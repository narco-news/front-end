<template>
	<div>
		<div class="font-mono float-right text-xs mb-6 mr-2">
			{{ $t('message.updated') }}: 18/08/2020
		</div>
		<div class="mx-12 mb-6 clear-right">
			<p class="text-md my-6">
				{{ $t('message.text1') }}
			</p>
			<div class="pattern-dots-md p-4 my-2">
				<div
					style="background-color: #fbfbfb;"
					class="rounded border-red border-2 m-2 p-2"
				>
					<p class="text-sm text-red font-bold my-2">
						{{ $t('message.question') }}
					</p>
					<p class="text-sm mx-2">
						{{ $t('message.text2') }}
					</p>
					<p class="text-sm my-2 mx-4 italic">
						{{ $t('message.text3') }}
					</p>
				</div>
			</div>

			<p class="my-6 font-bold"></p>
		</div>
		<!-- Form Start -->
		<div class="flex justify-center my-8">
			<div v-if="isSuccess === false" class="pattern-dots-md p-10 my-2">
				<div class="form p-6">
					<FormulateForm name="contact" @submit="sendData">
						<FormulateInput
							v-model="value"
							type="textarea"
							:label="$t('message.message')"
							validation="required|max:500,length"
							validation-name="text"
							input-class="h-40"
							:help="`${500 - value.length + ' ' + $t('message.left')}.`"
						/>
						<FormulateInput
							:label="$t('message.contactemail')"
							name="email"
							:help="$t('message.contact')"
							validation="optional|^email"
						/>
						<FormulateInput type="submit" :label="$t('message.submit')" />
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
	},
	i18n: {
		messages: {
			en: {
				message: {
					updated: 'Last updated',
					text1:
						"At the moment the only way to get in contact is through the form found below. Eventually SecureDrop will be implemented on the website. With that being said, I'd like to remind you that the form below is not secure. Nevertheless, the form below should be sufficient for the majority of use cases, most people's threat model does not include nation state actors.",
					question: 'What do you mean not secure?',
					text2:
						'We are unable to guarantee that whatever messages you send to us via the form below do not have the potential of being snooped on by a nation state. The site does implement SSL and you should see the lock in your address bar. But while SSL protects you from the general population and hackers. We can not guarantee that SSL alone will protect you from a motivated state actor. ',
					text3:
						'If you are worried about your message being intercepted by state actors please reach out privately on social media and we will set up a secure system on the fly to facilitate safe information transfer.',
					submit: 'Submit',
					message: 'Message',
					contactemail: 'Contact Email',
					contact: 'Provide a contact email if expecting a response',
					left: 'characters left'
				}
			},
			es: {
				message: {
					updated: 'Última actualización',
					text1:
						'Por el momento la única manera de ponerse en contacto es a través del formulario que se encuentra a continuación. Eventualmente SecureDrop se implementará en el sitio web. Dicho esto, me gustaría recordarles que el formulario de abajo no es seguro. No obstante, el formulario que figura a continuación debería ser suficiente para la mayoría de los casos de uso, el modelo de amenaza de la mayoría de las personas no incluye a los agentes del Estado nación.',
					question: '¿Qué quieres decir con no seguro?',
					text2:
						'No podemos garantizar que los mensajes que nos envíe a través del formulario que aparece a continuación no tengan el potencial de ser espiados por un estado nacional. El sitio implementa SSL y deberías ver el candado en tu barra de direcciones. Pero mientras el SSL le protege de la población general y de los hackers. No podemos garantizar que el SSL por sí solo te proteja de un actor estatal motivado.',
					text3:
						'Si le preocupa que su mensaje sea interceptado por actores estatales, por favor, póngase en contacto con los medios de comunicación social y estableceremos un sistema seguro sobre la marcha para facilitar la transferencia de información segura.',
					submit: 'Enviar',
					message: 'Mensaje',
					contactemail: 'Email de contacto',
					contact: 'Proporcione un email de contacto si espera una respuesta',
					left: 'símbolos que quedan'
				}
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
