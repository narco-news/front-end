<template>
	<div class="my-1">
		<div class="text-center">
			<div
				style="font-size: 0.5rem; color: #2a413e;"
				class="font-extrabold uppercase my-4"
			>
				U.S. Border Drug Interdictions In Pounds For 2019
			</div>
		</div>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-8 row-gap-8 m-2 p-2">
			<div
				class="text-border text-center animate__animated animate__slideInLeft"
			>
				<div class="text-sm text-border-text">
					Cocaine
				</div>
				<div class="numbers text-lg md:text-3xl lg:text-4xl my-2">
					<countup :delay="delay" :endVal="cocaine" :options="options" />
				</div>
			</div>
			<div
				class="text-border text-center animate__animated animate__slideInLeft"
			>
				<div class="text-sm text-border-text">
					Heroin
				</div>
				<div class="numbers text-lg md:text-3xl lg:text-4xl my-2">
					<countup :delay="delay" :endVal="heroin" :options="options" />
				</div>
			</div>
			<div
				class="text-border text-center animate__animated animate__slideInRight"
			>
				<div class="text-sm text-border-text">
					Meth
				</div>
				<div class="numbers text-lg md:text-3xl lg:text-4xl my-2">
					<countup :delay="delay" :endVal="meth" :options="options" />
				</div>
			</div>
			<div
				class="text-border text-center animate__animated animate__slideInRight"
			>
				<div class="text-sm text-border-text">
					Fentanyl
				</div>
				<div
					class="numbers text-lg md:text-3xl lg:text-4xl my-2 animate__animated animate__slideInRight"
				>
					<countup :delay="delay" :endVal="fent" :options="options" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cocaine: 89207,
			heroin: 5427,
			meth: 68585,
			fent: 2545,
			delay: 2000,
			options: {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			}
		};
	}
};
</script>

<style lang="sass">
$dark: #777777

.numbers
	color: #ff5e70


.text-border
  border: solid #ff5e70
  border-radius: 15px
  background-color: #EEF3ED

  .text-border-text
    position: absolute
    margin-top: -20px
    margin-left: 10px
    color: white
    background: #ff5e70
    border-radius: 5px
    padding: 2px 4px
</style>
