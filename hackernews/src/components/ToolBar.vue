<template>
	<div class="Header">
		<ul>
			<li style="margin-left: 0">
				<router-link to="/News">News</router-link>
			</li>
			<li>
				<router-link to="/Ask">Ask</router-link>
			</li>
			<li>
				<router-link to="/Jobs">Jobs</router-link>
			</li>
			<!-- <li>
                <router-link to="/User">User</router-link>
            </li>
            <li>
                <router-link to="/Item">Item</router-link>
            </li> -->
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
	list-style: none;
}
.Header {
	width: 100%;
	height: 30px;
	line-height: 30px;
	background-color: lightgreen;
}

.Header ul {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 0;
	width: 30%;
	height: 30px;
	padding-left: 0;
	margin-left: 35%;
}
.Header > ul > li {
	float: left;
}

.Header .router-link-exact-active {
	color: cadetblue;
	text-decoration: none;
}

.Header a {
	text-decoration: none;
	color: black;
}
</style>
