<template>
	<div class="m-4">
		<div id="book-list" class="flex flex-col mx-auto">
			<div v-for="book in Books" :key="book.id">
				<!-- Start -->
				<div class="bg-white rounded-md shadow-md m-2 my-4">
					<div class="grid grid-cols-1 md:grid-cols-2">
						<div class="grid-span-1 text-lg md:text-2xl">
							<div class="col-span-1 font-bold p-2">
								{{ book.title }}
							</div>
							<div class="grid grid-cols-2 items-center text-center p-2">
								<div class="grid-span-1 text-sm md:text-lg font-mono red-text">
									{{ book.authors }}
								</div>
								<div class="grid-span-1 text-xs md:text-lg font-mono">
									{{ book.datePublished }}
								</div>
							</div>
						</div>
						<div
							class="col-span-1 overflow-hidden h-64 flex flex-row justify-end"
						>
							<img
								:src="book.imageUrl"
								:alt="book.imageAlt"
								style="transform: translate(0px, 0px);"
								class="object-cover rounded-tr-md"
							/>
						</div>
					</div>
					<div
						class="p-2 text-xs h-40 lg:h-32 overflow-y-auto hideScroll clear-right italic"
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
	max-width: 500px;
}
.red-text {
	color: #f26457;
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
