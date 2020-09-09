<template>
	<div class="mb-2">
		<h1 class="float-left">
			{{ feedTitle }}
		</h1>
		<div class="list text-sm">
			<ol class="list-inside">
				<li v-for="(item, index) in fullFeed" :key="index">
					<a :href="item.link" target="_blank" rel="noreferrer">
						{{ item.title }}
						<hr class="my-1" />
					</a>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Feed',
	props: {
		feedUrl: {
			type: String,
			default: '#'
		},
		feedTitle: {
			type: String,
			default: 'Feed Title'
		}
	},
	data() {
		return {
			loading: true,
			error: '',
			fullFeed: {}
		};
	},
	created() {
		return this.fetchData();
	},
	mounted() {
		return this.fetchData();
	},
	methods: {
		async fetchData() {
			const Parser = require('rss-parser');
			const parser = new Parser();
			const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
			try {
				const feed = await parser.parseURL(CORS_PROXY + this.feedUrl);
				this.fullFeed = feed.items.splice(0, 15);
			} catch (e) {
				this.error = e.toString();
				this.loading = false;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
ol {
	list-style-type: decimal;
	font-size: 16px;
	font-family: 'EB Garamond', sans-serif;
	font-weight: 700;

	li {
		a {
			font-family: 'Source Sans Pro', sans;
			font-size: 14px;
			font-weight: 600;
			letter-spacing: 0.5px;
			color: #595fd9;
		}
	}
}
.list {
	max-height: 400px;
	overflow: scroll;
	border: 1px solid black;
	padding: 0 10px;
	background-color: #fbfbfb;
}
.list-inside {
	margin-top: 15px;
}
h1 {
	position: absolute;
	background-color: #fbfbfb;
	margin-left: 20px;
	margin-top: -12px;
	padding: 0 1em;
}
</style>
