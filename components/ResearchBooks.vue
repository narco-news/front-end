<template>
	<div class="m-2 p-4">
		<p class="font-bold text-md">
			Books
		</p>
		<div id="book-list" class="rounded overflow-y-auto">
			<div v-for="book in Books" :key="book.id">
				<!-- Start -->
				<div class="bg-white rounded shadow-lg m-2 my-4">
					<div class="grid grid-cols-2 p-4">
						<div>
							<div class="text-lg font-serif font-bold">
								{{ book.title }}
							</div>
							<div class="text-sm font-mono red-text my-2">
								{{ book.authors }}
							</div>
							<div class="text-sm font-mono">
								{{ book.datePublished }}
							</div>
						</div>
						<div>
							<img
								:src="book.imageUrl"
								:alt="book.imageAlt"
								class="h-32 md:h-40 float-right m-2"
							/>
						</div>
					</div>
					<div
						class="p-4 text-xs h-40 lg:h-32 overflow-y-auto mb-2 hideScroll clear-right italic"
					>
						{{ book.desc }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ResearchBooks from '~/assets/rbooks.json';
export default {
	data() {
		return {
			Books: ResearchBooks.books
		};
	}
};
</script>

<style lang="scss">
#book-list {
	height: 800px;
}

.red-text {
	color: #ff5e70;
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
