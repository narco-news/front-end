<template>
	<div class="m-2">
		<!-- <div class="bg-white rounded shadow-lg p-4">
			<p class="font-serif text-lg">
				{{ title }}
			</p>
			<hr class="m-2" />
			<p style="color: #ff5e70;">
				{{ authors }}
			</p>
			<div>
				<button
					class="toggle-features float-right text-xs text-gray-900 uppercase"
					aria-controls="features"
					:aria-expanded="featuresOpen ? 'true' : 'false'"
					@click="toggleFeatures"
				>
					{{ featuresOpen ? 'Hide' : 'Show Abstract' }}
				</button>
				<div id="features" v-show-slide="featuresOpen" class="features text-xs">
					<p class="text-xs">
						{{ abstract }}
					</p>
				</div>
			</div>
		</div> -->
		<div class="p-4">
			<p class="font-bold text-md">
				Papers
			</p>
			<VueFaqAccordion
				v-slot="itemData"
				:items="researchPapers"
				activeColor="#FF7283"
				fontColor="#3A656A"
				class="font-serif text-lg"
			>
				<p class="mt-2 text-xs font-sans bg-white p-2 my-2 rounded">
					{{ itemData.abstract }}
				</p>
				<div>
					<p
						style="color: #ff7283;"
						class="font-bold font-sans rounded text-sm p-2"
					>
						{{ itemData.date }}
					</p>
					<p class="font-bold font-sans text-sm m-4">{{ itemData.authors }}</p>
				</div>

				<div class="flex flex-wrap flex-row my-3">
					<div
						v-for="keyword in itemData.keywords"
						:key="keyword.id"
						class="inline m-2 lg:m-1"
					>
						<span
							style="background-color: #50d8c8;"
							class="rounded shadow text-white text-xs font-bold font-mono p-1 m-2 whitespace-no-wrap"
						>
							{{ keyword }}
						</span>
					</div>
				</div>
				<div class="icons flex flex-auto justify-end">
					<div>
						<!-- Info icon -->
						<a :href="itemData.infoLink">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
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
						<a :href="itemData.downloadLink"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 24 24"
							>
								<path
									fill="#ff7283"
									d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"
								/></svg
						></a>
					</div>
				</div>
			</VueFaqAccordion>
		</div>
	</div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
import Papers from '~/assets/papers.json';
export default {
	components: {
		VueFaqAccordion
	},
	props: {},
	// title: {
	// 	type: String,
	// 	default: 'Title'
	// },
	// date: {
	// 	type: Number,
	// 	default: 2016
	// },
	// authors: {
	// 	type: String,
	// 	default: 'Authors'
	// },
	// abstract: {
	// 	type: String,
	// 	default: 'Abstract'
	// }
	data() {
		return {
			researchPapers: Papers.papers,
			featuresOpen: false,
			myItems: [
				{
					title: 'How long is a day and year on Venus?',
					value:
						'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
					category: 'Research Paper Feed',
					abstract: 'Hello fucker'
				},
				{
					title: 'What animal smells like popcorn?',
					value: 'Binturongs smell like popcorn.',
					category: 'Research Paper Feed'
				}
			]
		};
	},
	methods: {
		toggleFeatures() {
			this.featuresOpen = !this.featuresOpen;
		}
	}
};
</script>

<style lang="scss"></style>
