<template>
	<div
		style="background-color: #f2b705;"
		class="h-56 md:h-48 flex flex-col items-center pt-16"
	>
		<h1 style="color: #f2f2f2;" class="text-xl mx-4">
			{{ $t('message.signup') }}
		</h1>
		<div class="mt-4">
			<mailchimp-subscribe
				url="https://news.us10.list-manage.com/subscribe/post-json"
				:user-id="user"
				:list-id="list"
				@error="onError"
				@success="onSuccess"
			>
				<template v-slot="{subscribe, setEmail, error, success, loading}">
					<form
						class="px-2 flex flex-row items-center"
						@submit.prevent="subscribe"
					>
						<div class="h-8 grid grid-cols-1">
							<input
								id="email"
								class="appearance-none rounded-md w-max-64 py-2 px-3 text-gray-700 leading-tight"
								type="email"
								:placeholder="$t('message.placeholder')"
								@input="setEmail($event.target.value)"
							/>
							<div
								style="color: #f2f2f2;"
								class="float-left uppercase font-semibold font-mono"
							>
								<div v-if="loading" class="text-xs p-2">Loading…</div>
								<div v-if="error" class="text-xs mt-2">
									{{ error }}
								</div>
								<div
									v-if="success"
									style="color: #038c4c;"
									class="text-xs mt-2 ml-6"
								>
									Success! 🥳
								</div>
							</div>
						</div>
						<div class="subut">
							<button
								class="text-white font-bold py-2 px-2 rounded-md focus:outline-none hvr-back-pulse"
								type="button"
								@click.prevent="subscribe"
							>
								{{ $t('message.submit') }}
							</button>
						</div>
					</form>
				</template>
			</mailchimp-subscribe>
			<p
				style="color: #f2f2f2;"
				class="absolute right-0 text-xs text-right font-bold mt-8 md:mt-0 px-2 md:px-4"
			></p>
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
	},
	i18n: {
		messages: {
			en: {
				message: {
					submit: 'Submit',
					placeholder: 'Email address',
					signup: 'Mailing list for future updates'
				}
			},
			es: {
				message: {
					submit: 'Enviar',
					placeholder: 'Dirección de correo electrónico',
					signup: 'Lista de correo electrónico para futuras actualizaciones'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
input {
	width: 300px;
}
.subut button {
	margin-left: 20px;
	background-color: #0d0d0d;

	&:hover {
		background-color: lighten(#0d0d0d, 10%);
	}
}

h1 {
	font-weight: 700;
}
</style>
