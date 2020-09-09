<template>
	<div>
		<h1 class="float-left">
			El Blog del Narco
		</h1>
		<div class="list text-sm clear-left">
			<br />
			<ol class="list-inside">
				<li v-for="(item, index) in fullFeed" :key="index">
					<a :href="item.link" target="_blank">
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
	name: 'EBDNFeed',
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
				const feed = await parser.parseURL(
					CORS_PROXY + 'https://www.blog-del-narco.com.mx/feeds/posts/default'
				);
				this.fullFeed = feed.items;
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
	font-family: 'Source Sans Pro', sans;
	font-weight: 700;

	li {
		a {
			font-size: 14px;
			font-family: 'EB Garamond', sans-serif;
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
h1 {
	position: absolute;
	background-color: #fbfbfb;
	margin-left: 20px;
	margin-top: -12px;
	padding: 0 1em;
}
</style>
