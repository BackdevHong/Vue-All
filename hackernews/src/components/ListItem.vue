<template>
	<div>
		<ul class="news-list">
			<li v-for="item in listItems" :key="item">
				<!-- 포인트 영역 -->
				<div class="points" v-if="item.points != null">
					{{ item.points }}
				</div>
				<div v-else>0</div>
				<!-- 기타 영역 -->
				<template v-if="item.domain">
					<a v-bind:href="item.url">
						{{ item.title }}
					</a>
				</template>
				<template v-else>
					<router-link :to="`/item/${item.id}`">
						{{ item.title }}
					</router-link>
				</template>
				<small>
					{{ item.time_ago }} by
					<router-link :to="`/user/${item.user}`" v-if="item.user">
						{{ item.user }}
					</router-link>
					<a :href="item.url" v-else>
						{{ item.domain }}
					</a>
				</small>
			</li>
		</ul>
		<!-- eslint-disable -->
		<!-- <p v-for="item in this.$store.state.news">
			<a v-bind:href="item.url">
				{{ item.title }}
			</a>
			<small>
				{{ item.time_ago }} by
				<router-link :to="`/user/${item.user}`">
					{{ item.user }}
				</router-link>
			</small>
		</p> -->
	</div>
</template>

<script>
// import { fetchNewsList } from "../api/index";

export default {
	created() {
		// this.$store.dispatch("FETCH_NEWS");
		const name = this.$route.name;
		if (name === "news") {
			this.$store.dispatch("FETCH_NEWS");
		} else if (name === "ask") {
			this.$store.dispatch("FETCH_ASK");
		} else if (name === "jobs") {
			this.$store.dispatch("FETCH_JOBS");
		}
	},
	computed: {
		listItems() {
			const name = this.$route.name;
			if (name === "news") {
				return this.$store.state.news;
			} else if (name === "ask") {
				return this.$store.state.ask;
			} else if (name === "jobs") {
				return this.$store.state.jobs;
			}
			return "";
		},
	},
};
</script>

<style scoped>
.news-list > li {
	border: 1px solid black;
	border-radius: 5px;
	width: 80%;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 5px 5px 5px;
	list-style: none;
}

.news-list {
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-top: 3px;
	align-items: center;
	padding: 0;
}

div > ul > li > a,
small > a {
	text-decoration: none;
	color: black;
}

div > ul > li > a:after,
small > a:after {
	color: black;
}

div > ul > li > a:hover,
small > a:hover {
	color: pink;
	transition: all 0.4s;
}

.points {
	color: #42b883;
}
</style>
