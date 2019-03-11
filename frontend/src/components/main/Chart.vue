<template>
  <div class="small">
    <input type="text" v-model="text">
    <p> selected content in chart is {{ selectedcontent }}</p>
    {{ checkSelectedcontent }}
    <radar-chart :chart-data="datacollection"></radar-chart>
    <button @click="fillData()">Randomize</button>
    <button @click="contentData()">Randomize2</button>
  </div>
</template>

<script>
  import RadarChart from './RadarChart.js'

  export default {
    name: "Chart",
    components: {
        RadarChart
    },
    data () {
      return {
        datacollection: null,
        selectedcontent: 0,
        items: [
            { content: 'Foo' ,taste: 3,cost: 4,mood: 4,access: 4,drink: 2},
            { content: 'Bar' ,taste: 4,cost: 5,mood: 4,access: 1,drink: 2},
            { content: 'Baz' ,taste: 1,cost: 3,mood: 4,access: 4,drink: 3}
        ]
      }
    },
    updated: function() {
      this.$emit('input', {
        text: this.text,
      })
    },
    mounted: function() {
      this.text   = this.value.text
    },
    computed: {
        checkSelectedcontent: function() {
            //this.fillData()//selectedcontentが変更されるとグラフが再描画される
            this.contentData(this.selectedcontent)
            return this.selectedcontent
        }
    },
    props:['selectedcontent'],
    mounted () {
      this.fillData()
    },
    methods: {
      overWriteProps: function() {
          this.testprops = "at chart this element has overwritten";
          console.log("overwrite has executed");
          // ここで書き換えても、sidebarのほうのtestpropsでは値はそのまま。。。→computedを使う？
      },
      fillData () {
        this.datacollection = {
          labels: ["味", "コストパフォーマンス", "雰囲気", "アクセス","飲み会？"],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(),]}
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      contentData (arg) {
        //arg:コンテンツ名（一意）から評価を引っ張ってくる  
        /* 同コンポーネント上で定義されているデータ構造（一時的なもの、冗長）のcontent属性と照合し、
            合致するもののグラフを描画する
            データベースを使えるようになったらこの部分がデータベースへの問い合わせに代わる */
        var tmpdata = [];
        for(var i=0 ; i<3 ; i++){
            if(this.items[i].content === arg){
                console.log(this.items[i].content);
                tmpdata = [this.items[i].taste, this.items[i].cost, this.items[i].mood, this.items[i].access, this.items[i].drink];
            }
            console.log("------");
        }
        this.datacollection = {
          labels: ["味", "コストパフォーマンス", "雰囲気", "アクセス","飲み会？"],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: tmpdata}
          ]
        }
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>