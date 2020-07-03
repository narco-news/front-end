<template>
	<div>
		<nuxt-link :to="infoLink">
			<h1 style="color: #ff5e70;" class="text-lg font-serif">{{ title }}</h1>
		</nuxt-link>
		<p class="text-sm font-mono float-right">{{ date }}</p>
		<p class="text-sm p-1">{{ authors }}</p>
		<details class="px-4">
			<summary class="text-sm select-none">Abstract</summary>
			<p
				style="background-color: #eef3ed;"
				class="text-xs italic p-4 rounded-sm shadow-sm"
			>
				{{ abstract }}
			</p>
		</details>
		<div class="mt-4">
			<!-- <h3 class="text-xs uppercase text-gray-500">Tags</h3> -->
			<div class="flex flex-wrap flex-row">
				<!-- <div class="inline m-2 lg:m-1">
					<span
						v-for="tag in tags"
						:key="tag"
						style="background-color: #3a656a; color: #eef3ed; font-size: 11px;"
						class="rounded-md shadow-sm font-bold font-mono whitespace-no-wrap p-1 mr-3 flex-row text-center"
					>
						{{ tag }}
					</span>
				</div> -->
				<div class="icons flex flex-auto justify-end">
					<div>
						<!-- Info icon -->
						<a :href="infoLink" target="_blank" title="Infomation">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 24 24"
							>
								<path
									fill="#ff7283"
									d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Zm.38-2.92A1,1,0,0,0,11.8,11l-.18.06-.18.09-.15.12A1,1,0,0,0,11,12a1,1,0,0,0,.29.71,1,1,0,0,0,.33.21A.84.84,0,0,0,12,13a1,1,0,0,0,.71-.29A1,1,0,0,0,13,12a1,1,0,0,0-.29-.71A1.15,1.15,0,0,0,12.38,11.08ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Z"
								/></svg
						></a>
					</div>
					<div>
						<!-- Download icon -->
						<a :href="downLink" target="_blank" title="Download"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 24 24"
							>
								<path
									fill="#ff7283"
									d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"
								/></svg
						></a>
					</div>
				</div>
			</div>
		</div>
		<div class="pattern-dots-sm h-1 my-2"></div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Research paper title'
		},
		authors: {
			type: String,
			default: 'Johnny Appleseed, Susan Flowers'
		},
		date: {
			type: String,
			default: '01/01/20'
		},
		abstract: {
			type: String,
			default:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur, mauris sed fringilla vestibulum, turpis tortor ullamcorper sapien, a fringilla quam augue eu urna. In volutpat leo orci, non viverra urna bibendum vel. Sed id massa ac eros aliquet dignissim. Morbi lacus justo, varius id mauris sed, pretium elementum neque. Proin a tempor risus, id egestas sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper sollicitudin sodales. Suspendisse nulla sem, tincidunt non mauris et, faucibus efficitur ante. Suspendisse lobortis est augue, convallis maximus est lacinia a. Aliquam tincidunt vehicula interdum. Curabitur sagittis turpis et velit interdum, id gravida felis sodales.'
		},
		tags: {
			type: Array,
			default: () => ['Tag 1', 'Tag 2', 'Tag 3']
		},
		infoLink: {
			type: String,
			default: '#'
		},
		downLink: {
			type: String,
			default: '#'
		}
	}
};
</script>

<style lang="scss" scoped></style>
