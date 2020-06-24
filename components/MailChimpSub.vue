<template>
	<div id="box" class="grid grid-cols-1 bg-white rounded shadow-md p-4 my-2">
		<div class="mb-2">
			<span style="color: #2a413e;" class="text-sm md:text-md">
				Mailing list
				<hr class="mb-1" style="border-color: #2a413e;" width="45%" />
			</span>
		</div>
		<div class="">
			<mailchimp-subscribe
				url="https://news.us10.list-manage.com/subscribe/post-json"
				:user-id="user"
				:list-id="list"
				@error="onError"
				@success="onSuccess"
			>
				<template v-slot="{subscribe, setEmail, error, success, loading}">
					<form @submit.prevent="subscribe">
						<input
							type="email"
							class="border border-red-300 w-40"
							@input="setEmail($event.target.value)"
						/>
						<button type="submit" class="text-sm ml-2">Submit</button>
						<div v-if="error">{{ error }}</div>
						<div
							v-if="success"
							style="color: #44af69;"
							class="text-xs p-2 font-bold"
						>
							Success!
						</div>
						<div v-if="loading" class="text-xs p-2">Loading…</div>
					</form>
				</template>
			</mailchimp-subscribe>
		</div>
	</div>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe';

export default {
	components: {
		MailchimpSubscribe
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

<style lang="scss" scoped></style>
