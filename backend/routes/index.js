var express = require('express');
var router = express.Router();

var AddContent = require('');
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  console.log("response に識別子を点けるrouter");
  next();
  console.log("response に識別子を点けta");
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test用関数
router.post('/test', function(req, res, next){
  console.log("test has passed");
  res.json({status: 'success'});
})

router.post('/content/add', function(req, res, next){
  contole.log("at content/add");
  AddContent(req, res);
})

module.exports = router;

