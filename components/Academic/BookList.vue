<template>
	<div class="m-4">
		<div class="flex flex-auto flex-wrap my-5 content-center justify-center">
			<div v-for="book in bookList" :key="book.id">
				<BookCard
					class="m-6"
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
import BookCard from '~/components/Academic/bookCard';
import myBookList from '~/assets/booklist.json';
export default {
	name: 'BookList',
	components: {
		BookCard
	},
	data() {
		return {
			bookList: myBookList.books,
			twitter_description:
				'Books related to drug trafficking and everything it involves.',
			twitter_title: 'narco.news',
			feature_image: 'https://narco.news/images/booklist.png',
			title: 'Easy reading book list'
		};
	}
};
</script>

<style></style>
