<template>
	<div class="mb-2">
		<h2 class="float-left text-sm">
			{{ feedTitle }}
		</h2>
		<div class="list">
			<ol class="list-inside">
				<Loading :loaded="loaded"></Loading>
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
import Loading from '~/components/Loading';
export default {
	name: 'LongFeed',
	components: {
		Loading
	},
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
			loaded: false,
			error: '',
			fullFeed: {},
			proxy: process.env.proxy
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
			const CORS_PROXY = this.proxy;
			try {
				const feed = await parser.parseURL(CORS_PROXY + this.feedUrl);
				this.fullFeed = feed.items.splice(0, 16);
				this.loaded = true;
			} catch (e) {
				this.error = e.toString();
				// this.loading = false;
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
	line-height: 1.2;

	li {
		a {
			font-family: 'Source Sans Pro', sans;
			font-size: 12px;
			font-weight: 600;
			letter-spacing: 0.5px;
			color: #595fd9;
		}
	}
}
.list {
	max-height: 450px;
	overflow-y: scroll;
	overflow-x: hidden;
	border: 1px solid black;
	padding: 0 10px;
	background-color: #fbfbfb;
}
.list-inside {
	margin-top: 15px;
}
h2 {
	position: absolute;
	background-color: #fbfbfb;
	margin-left: 20px;
	margin-top: -12px;
	padding: 0 1em;
	border: 1px solid black;
	@apply shadow-sm;
}
</style>
