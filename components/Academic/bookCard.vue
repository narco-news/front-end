<template>
	<div class="flex flex-auto justify-center">
		<div class="relative h-64 pt-5 md:my-4 mb-6">
			<div class="book-box relative bg-white rounded shadow-lg w-56 z-10">
				<div
					class="book-date absolute bg-green-500 text-white text-xs font-extrabold top-0 right-0 p-1 rounded"
				>
					{{ date }}
				</div>
				<div class="static flex flex-col">
					<div class="book-title inline-block text-md px-2 mt-4">
						{{ title }}
					</div>
					<div class="inline-block text-center p-1">
						{{ authors }}
					</div>
					<div
						class="book-desc hideScroll inline-block text-xs overflow-auto rounded px-2 italic text-gray-700"
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
.book-box {
	background-color: white;
	margin-left: 75px;
	max-height: 18rem;
}
.book-title {
	font-family: 'EB Garamond', serif;
	font-weight: 600;
	color: #262626;
}
.book-desc {
	height: 7rem;
	max-height: 8rem;
	margin-bottom: 0.5rem;
}
.book-date {
	margin-top: -15px;
	margin-right: 15px;
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
