<template>
	<div>
		<div class="px-4">
			<span
				class="text-sm md:text-md font-bold text-blue-500 font-mono whitespace-no-wrap"
			>
				{{ $t('message.sit') }}
			</span>
		</div>
		<div
			id="box"
			class="h-64 rounded-lg shadow-lg flex flex-col gap-4 justify-center items-center"
		>
			<n-link to="/celaya">
				<button
					class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
				>
					Guanajuato
				</button>
			</n-link>
			<button
				class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
			>
				Tamaulipas
			</button>
			<button
				class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
			>
				Michoacán
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EssentialLinks',
	i18n: {
		messages: {
			en: {
				message: {
					sit: 'Situational Awareness'
				}
			},
			es: {
				message: {
					sit: 'Conciencia situacional'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
#box {
	background-color: #f2f2f2;
}
</style>
