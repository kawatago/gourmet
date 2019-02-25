module.exports = function (req, res) {
    //Bodyの確認
    if (req.body==null) {
        //error
        console.log('No Body')
        res.json({
            state: 'failure',
            description: 'No body'
        })
    } else {
        var newName = req.body.task_name
        var newDetail = req.body.detail
        var newReg = req.body.register_user_id
        var newRes = req.body.responsible_person
        var newParent = req.body.parent_task_id
        var newGroup = req.body.group_id
        if (newName==null || newDetail==null || newReg==null || newRes==null || newGroup==null){
            //error
            res.json({
                state: 'failure',
                description: 'Empty input exists.'
            })
        } else {
            //モデルの宣言
            var Content = require('../../model/Content')
            //モデルクラス作成
            var newTask = new Task({
                parent_task_id: newParent,
                group_id: newGroup,
                task_name: newName,
                detail: newDetail,
                state: 0,
                responsible_person: newRes,
                register_user_id: newReg
            })
            //登録
            newTask.save(function(err,data){
                if (err) {
                    console.log(err)
                    res.json({
                        state: 'failure',
                        description: 'Error in Saving'
                    })
                } else {
                    res.json({
                        state: 'success',
                        data: data
                    })
                }
            })
        }
    }
}