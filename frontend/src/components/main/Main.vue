<template>
    <div class="main">
        <!-- <p v-on:click="overWriteProps">overWriteProps at main {{ testprops }}</p> -->
        <!-- <RadarChart/> -->
        <p>at main {{ selectedContent }}</p>
        <p>selectedcontent is {{ selectedcontent }}</p>
        <Chart v-bind:selectedcontent="selectedcontent"  v-model="selectedContent" />
    </div>
</template>

<script>
import vuechart from 'vue-chartjs'
import { Radar, mixins } from 'vue-chartjs'
import Chart from '@/components/main/Chart'
// vue.component('Chart', Chart)

// const { reactiveProp } = mixins



export default {
    name: 'Main',
    data: () => {
        return {
            // RadarChart,
            data: [5, 4, 1, 3, 3],
            bindtest: "",
            selectedContent: {
                text: '初期値'
            },
            selectedcontent: 0
        }
    },
    components: {
        // RadarChart,
        Chart
    },
    props: ['selectedcontent'],
    computed: {
        checkSelectedcontent() {
            console.log("checkselectedcontent");
            console.log(selectedcontent);
            return this.selectedcontent;
        }
    },
    methods: {
        sample_MC(arg){
            console.log("at Main");
            console.log("sample has executed.");
            this.$emit('sample', 1);//Index のsampleに1を送信したい
        },
        overWriteProps: function() {
            this.testprops = "at main this element has overwritten";
            console.log("overwrite has executed");
            // ここで書き換えても、sidebarのほうのtestpropsでは値はそのまま。。。→computedを使う？
        },
        testChangeValue: function(){
            //親コンポーネントから（postで）対応するデータをとってきて、動的に表示したい
            var alt_data=[1,1,1,1,2];//←でだめなので、ここで新しくインスタンスをつくる（）this.renderCharts
            // RadarChart = {
            //     extends: Radar,
            //     mounted () {
            //         this.renderChart({
            //             labels: ["味", "コストパフォーマンス", "雰囲気", "アクセス","飲み会？"],
            //             // データ詳細
            //             datasets: [{
            //                 // データタイトル
            //                 label: 'content1',
            //                 // データ
            //                 data:data, 
            //                 backgroundColor: [
            //                     'rgba(100, 130, 255, 0.2)'						
            //                 ]
            //             }]
            //         });
	        //     }
            // };
            // console.log(RadarChart.data.datasets[0].data);
            // RadarChart.datasets.data.pop();
            // RadarChart.data.datasets.data.push(alt_data);
            // RadarChart.update();
            console.log("testChangeValue has executed.");
        }
    }
}
</script>

<style>

</style>
