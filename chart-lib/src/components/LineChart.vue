<template>
	<canvas id="myChart2" ref="LineChart"></canvas>
</template>

<script>
export default {
	mounted() {
		// const ctx = document.getElementById("myChart2").getContext("2d");
		const ctx = this.$refs.LineChart;
		const myChart = new this.$_Chart(ctx, {
			type: "line",
			data: {
				labels: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
				],
				datasets: [
					{
						label: "My First dataset",
						backgroundColor: "rgb(255, 99, 132)",
						borderColor: "rgb(255, 99, 132)",
						data: [0, 10, 5, 2, 20, 30, 45],
					},
				],
				borderWidth: 1,
			},
		});
		console.log(myChart);
	},
};
</script>

<style></style>
