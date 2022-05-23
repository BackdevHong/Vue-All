<template>
	<canvas id="myChart" ref="BarChart" width="50" height="50"></canvas>
</template>

<script>
export default {
	props: ["propsdata"],
	mounted() {
		// var ctx = document.getElementById("myChart");
		const ctx = this.$refs.BarChart;
		var myChart = new (ctx,
		{
			type: "bar",
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: this.propsdata,
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
			},
		})();
		console.log(myChart);
	},
};
</script>

<style></style>
