#fbfbfb<template>
	<div>
		<div class="font-mono float-right text-xs mb-6 mr-2">
			Last Updated: 18/08/2020
		</div>
		<div class="mx-12 mb-6 clear-right">
			<p class="text-md my-6">
				At the moment the only way to get in contact is through the form found
				below. Eventually
				<a style="color: #f26457;" href="https://securedrop.org">SecureDrop</a>
				will be implemented on the site. With that being said, I'd like to
				remind you that the form below is
				<span class="font-bold underline">NOT SECURE</span>.
			</p>
			<div class="pattern-dots-md p-4 my-2">
				<div
					style="background-color: #fbfbfb;"
					class="rounded border-red border-2 m-2 p-2"
				>
					<p class="text-sm text-red font-bold my-2">
						What do you mean not secure?
					</p>
					<p class="text-sm mx-2">
						We are unable to guarantee that whatever messages you send to us via
						the form below do not have the potential of being snooped on by a
						<a
							style="color: #f26457;"
							href="https://en.wikipedia.org/wiki/Nation_state"
							class="underline"
							target="_blank"
							>nation state</a
						>. The site does implement SSL and you should see the lock in your
						address bar. But while SSL protects you from the general population
						and hackers. We can not guarantee that SSL alone will protect you
						from a motivated state actor.
					</p>
					<p class="text-sm my-2 mx-4 italic">
						If you are worried about your message being intercepted by state
						actors please reach out privately on social media and we will set up
						a secure system on the fly to facilitate safe information transfer.
					</p>
				</div>
			</div>

			<p class="my-6 font-bold">
				Nevertheless, the form below should be sufficient for the majority of
				use cases, most people's threat model does not include nation state
				actors.
			</p>
		</div>
		<!-- Form Start -->
		<div class="flex justify-center my-8">
			<div v-if="isSuccess === false" class="pattern-dots-md p-10 my-2">
				<div class="form p-6">
					<FormulateForm name="contact" @submit="sendData">
						<FormulateInput
							v-model="value"
							type="textarea"
							label="Message"
							validation="required|max:500,length"
							validation-name="text"
							input-class="h-40"
							:help="`${500 - value.length} characters left.`"
						/>
						<FormulateInput
							label="Contact Email"
							name="email"
							help="Please provide a contact email if expecting a response"
							validation="optional|^email"
						/>
						<FormulateInput type="submit" label="Submit" />
					</FormulateForm>
				</div>
			</div>
		</div>
		<div
			v-if="isSuccess"
			class="success text-center my-6 animate__animated animate__fadeIn"
		>
			We received your submission, thank you!
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
			message: '',
			value: '',
			length: 0,
			isSuccess: false
		};
	},
	methods: {
		async sendData(data) {
			try {
				const res = await this.$axios.post(
					'https://api.formcake.com/api/form/21fb0bc6-a426-4701-97ee-9011f0e47f92/submission',
					data
				);
				this.isSuccess = !!res;
				this.$formulate.reset('contact');
			} catch (err) {
				// errors
				this.$formulate.handle(err, 'contact');
			}
		}
	}
};
</script>

<style lang="scss">
@import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
.form {
	border: 2px solid #03a688;
	background-color: #fbfbfb;
	@apply rounded-md;
}
.success {
	@apply text-sm;
	@apply text-red;
	font-weight: 700;
	letter-spacing: 1.2px;
}
</style>
