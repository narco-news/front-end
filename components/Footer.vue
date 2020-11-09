<template>
	<div style="background-color: #262626;" class="">
		<div class="flex justify-center">
			<div class="">
				<!-- Mailing -->
				<!-- <div class="col-span-5 md:col-span-3 p-2 text-center">
					<span class="text-md w-full font-bold foot-title">Mailing list</span>
					<div class="p-2">
						<mailchimp-subscribe
							url="https://news.us10.list-manage.com/subscribe/post-json"
							:user-id="user"
							:list-id="list"
							@error="onError"
							@success="onSuccess"
						>
							<template v-slot="{subscribe, setEmail, error, success, loading}">
								<form class="flex flex-col" @submit.prevent="subscribe">
									<div class="h-8 flex flex-col">
										<input
											id="email"
											class="appearance-none rounded-md py-2 px-3 text-gray-700 leading-tight"
											type="email"
											placeholder="Enter email address"
											@input="setEmail($event.target.value)"
										/>
										<div
											style="color: #dff2e9;"
											class="float-right uppercase font-semibold font-mono mt-12"
										>
											<div v-if="loading" class="text-xs p-2">Loading…</div>
											<div v-if="error" class="text-xs">
												{{ error }}
											</div>
											<div
												v-if="success"
												style="color: #dff2e9;"
												class="text-xs mt-2 ml-6"
											>
												Success! 🥳
											</div>
										</div>
									</div>
									<div class="mt-4 subut">
										<button
											class="text-sm px-4 py-2 rounded-md font-bold"
											type="button"
											@click.prevent="subscribe"
										>
											Submit
										</button>
									</div>
								</form>
							</template>
						</mailchimp-subscribe>
					</div>
				</div> -->
				<div class="p-2 flex flex-row justify-center">
					<div class="links grid grid-flow-row uppercase m-4">
						<h2 class="text-gray-500">narco.news</h2>
						<n-link class="" to="/about">About</n-link>
						<n-link class="" to="/wire">Wire</n-link>
						<n-link class="" to="/pa">Press Aggregate</n-link>
						<n-link class="" to="/library">Library</n-link>
						<n-link class="" to="/contact">Contact</n-link>
					</div>
					<div class="links grid grid-flow-row uppercase m-4">
						<h2 class="text-gray-500">Sections</h2>
						<n-link class="" to="/tag/united-states">United States</n-link>
						<n-link class="" to="/tag/mexican-dto">Mexico</n-link>
						<n-link class="" to="/tag/central-america">Central America</n-link>
						<n-link class="" to="/tag/south-america">South America</n-link>
						<n-link class="" to="/tag/opinion">Opinion</n-link>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center">
			<div
				class="cursor-not-allowed site text-xs flex items-center justify-center"
			>
				<span class="site-name mr-1 h-auto">
					narco<span class="italic">&nbsp;dot&nbsp;</span> news</span
				>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
// import MailchimpSubscribe from 'vue-mailchimp-subscribe';

export default {
	components: {
		// MailchimpSubscribe
	},
	data() {
		return {
			user: process.env.userID,
			list: process.env.listID
		};
	},
	methods: {
		onError() {
			// handle error
		},
		onSuccess() {
			// handle success
		}
	}
};
</script>

<style lang="scss" scoped>
.logo {
	img {
		-webkit-filter: invert(1);
		filter: invert(1);
	}
}
.links {
	color: #fcfcfc;
	font-weight: 600;
	font-size: 11px;
}
.site-name {
	font-weight: 600;
}
.trademark {
	font-size: 9px;
	font-weight: 600;
	color: #8590a6;
	max-width: 900px;
}
.site {
	color: #252525;
	background: #ff5f6d; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#ffc371,
		#ff5f6d
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#ffc371,
		#ff5f6d
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
