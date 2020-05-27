<template>
	<div class="flex flex-auto justify-center">
		<div class="relative h-64 pt-5">
			<div class="bookBox relative bg-white rounded shadow-lg w-56 z-10">
				<!-- Static parent -->

				<div
					style="background-color: #3a656a;"
					class="bookDate absolute text-white text-xs font-extrabold top-0 right-0 p-1 rounded"
				>
					{{ date }}
				</div>
				<div class="static flex flex-col">
					<div class="inline-block text-sm font-serif font-bold px-2 mt-4">
						{{ title }}
					</div>
					<div style="color: #ff5e70;" class="inline-block text-center p-1">
						{{ authors }}
					</div>
					<div
						class="bookDesc hideScroll inline-block text-xs overflow-auto rounded px-2 italic"
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
.bookBox {
	margin-left: 75px;
	max-height: 16rem;
}
.bookDesc {
	height: 7rem;
	max-height: 8rem;
	margin-bottom: 0.5rem;
}
.bookDate {
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
