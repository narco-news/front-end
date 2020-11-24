<template>
	<div class="m-4">
		<div class="flex flex-auto flex-wrap my-5 content-center justify-center">
			<div v-for="book in Books" :key="book.id">
				<BookCard
					class="m-4"
					:title="book.title"
					:date="book.datePublished"
					:authors="book.authors"
					:desc="book.desc"
					:image-url="book.imageUrl"
					:image-alt="book.imageAlt"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import ResearchBooks from '~/assets/rbooks.json';
import BookCard from '~/components/Academic/bookCard';
export default {
	components: {
		BookCard
	},
	data() {
		return {
			Books: ResearchBooks.books
		};
	}
};
</script>
