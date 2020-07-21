<template>
	<div
		id="titleBox"
		class="select-none animate__animated animate__lightSpeedInRight h-10 text-center shadow-lg z-10 mx-4 md:mx-8 lg:mx-12 inline-block"
	>
		<div
			class="boxWords whitespace-no-wrap flex flex-row justify-end float-left ml-2 mr-8 md:mr-12 lg:mr-16"
		>
			<h1
				class="text-lg animate__animated animate__flash pt-1"
				style="animation-delay: 3s;"
			>
				{{ $t('message.wire') }}
			</h1>
			<div class="uppercase text-xs font-mono md:ml-4">
				<div id="blank" style="line-height: 1.1;" class="p-2">
					{{ $t('message.date') }}
					<br />
					{{ sec }}
				</div>
			</div>
		</div>
		<lottie-player
			id="lot"
			:src="ActAnim"
			:options="LottieOptions"
			class="absolute right-0"
		></lottie-player>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // load on demand
import Activity from '~/assets/ani-icons/activity.json';
export default {
	name: 'TitleBox',
	data() {
		return {
			update: '',
			ActAnim: Activity,
			time: dayjs(new Date()).format('HH:mm:ss'),
			sec: '',
			LottieOptions: {
				autoplay: true,
				loop: true,
				speed: 0.5,
				width: '25px',
				height: '25px'
			}
		};
	},
	created() {
		this.startInterval();
	},
	methods: {
		startInterval() {
			setInterval(() => {
				this.sec = dayjs(new Date()).format('HH:mm:ss');
			}, 1000);
		}
	},
	i18n: {
		messages: {
			en: {
				message: {
					date: dayjs().locale('en').format('ddd - MMM D, YYYY'),
					wire: 'The Wire'
				}
			},
			es: {
				message: {
					date: dayjs().locale('es').format('ddd - MMM D, YYYY'),
					wire: 'Portal de noticias'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#titleBox {
	background-color: #cef2d3;
	border-color: #038c4c;
	border-style: solid;
	border-width: 2px;
	h1 {
		text-transform: uppercase;
		font-family: 'IBM Plex Sans';
		font-weight: 700;
	}
}
</style>
