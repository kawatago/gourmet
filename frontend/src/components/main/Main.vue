<template>
    <div class="main">
        contents is here ...
        <RadarChart/>
    </div>
</template>

<script>
import { Radar } from 'vue-chartjs'

var RadarChart = {
	extends: Radar,
	mounted () {
		this.renderChart({
            // ラベル
            // 味、値段、店の雰囲気、アクセス、お酒に合う
			labels: ["味", "コストパフォーマンス", "雰囲気", "アクセス","飲み会？"],
			// データ詳細
			datasets: [{
					// データタイトル
					label: 'content1',
					// データ
					data: [5, 4, 1, 3, 3],
					backgroundColor: [
						'rgba(100, 130, 255, 0.2)'						
					]
			// },
			// {
			// 		// データタイトル
			// 		label: 'アニメ2',
			// 		// データ
			// 		data: [4, 5, 0, 2],
			// 		backgroundColor: [
			// 			'rgba(130, 255, 100, 0.2)'						
			// 		],
			// 		borderWidth: 6,
			// 		borderDash: [1,1],
			// 		pointHoverBorderWidth: 10
			// }
            }]
		});
	}
};


export default {
    name: 'Main',
    components: {
		RadarChart
	}
}
</script>

<style>

</style>
