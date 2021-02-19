<template>
	<div class="flex flex-auto justify-center">
		<div class="relative pt-5 md:my-4 mb-6">
			<div class="relative bg-white rounded shadow-lg h-72 w-56 z-10 ml-16">
				<div class="book-date absolute text-xs top-0 right-0 p-1 text-gray-600">
					{{ date }}
				</div>
				<div class="static flex flex-col">
					<div class="book-title inline-block text-md font-semibold p-2">
						{{ title }}
					</div>
					<div
						class="inline-block text-center text-sm font-serif lg:text-md text-gray-700 my-1 mx-3"
					>
						{{ authors }}
					</div>
					<div
						class="hideScroll inline-block h-40 overflow-auto m-2 p-1 shadow-inner rounded text-xs italic text-gray-600"
					>
						{{ desc }}
					</div>
				</div>
			</div>

			<img
				:src="imageUrl"
				:alt="imageAlt"
				class="absolute top-0 left-0 h-48 z-0 animate__animated animate__fadeIn"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BookCard',
	props: {
		title: {
			type: String,
			default: 'Title'
		},
		date: {
			type: Number,
			default: 2016
		},
		authors: {
			type: String,
			default: 'Authors'
		},
		desc: {
			type: String,
			default: 'Description'
		},
		imageUrl: {
			type: String,
			default: '#'
		},
		imageAlt: {
			type: String,
			default: 'Image'
		}
	}
};
</script>

<style lang="scss">
.book-title {
	color: #262626;
	line-height: 1.2;
}
.book-date {
	margin-top: -23px;
	margin-right: 25px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hideScroll::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE and Edge */
.hideScroll {
	-ms-overflow-style: none;
}
</style>
