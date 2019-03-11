<template>
    <div class="sidebar">
        <ul>
            <li v-on:click= "postTest">contents1</li>
            <!-- 項目をクリックするとポストで詳細を読み込む -->
            <!-- 項目をクリック→selected状態→propsでmainのテンプレートに値を送信(自動)→mainで変更を検知(computed?)→グラフを再描画するmethodを実行する) -->
            <p>at side {{ testprops }}</p>
            <li v-for="(item, index) in items" v-bind:key="index">
                <div v-on:click="selectIndex(item.content)"> {{ item.content }}</div><!-- Index.vueのsampleに値indexを送信-->
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

export default {
    name: 'Sidebar',
    data: () => {
        return {
            err: [],
            items: [
                { content: 'Foo' },
                { content: 'Bar' },
                { content: 'Baz' }
            ]  
        }
    },
    props:['testprops'],
    methods: {
        selectIndex: function(arg){
            console.log("for method");
            this.$emit('sample', arg);
        },
        postTest: function(){
            console.log("test axios ...");
            axios
                .post('/test')
                .then((result) => {
                    console.log(result)
                })
                .catch((err) => {
                    console.log("there are some errors")
                    console.log(err)
                })
        },
        obtainContent: function(){

        }
    }
}
</script>

<style>

</style>
