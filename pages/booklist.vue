<template>
	<div>
		<div class="p-2 m-4 h-full">
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
	</div>
</template>

<script>
import BookCard from '~/components/bookCard';
import myBookList from '~/assets/booklist.json';
export default {
	name: 'BookList',
	components: {
		BookCard
	},
	data() {
		return {
			bookList: myBookList.books,
			title: 'Book list'
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Easy reading on-topic books that are worth taking a look at'
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'Easy reading on-topic books that are worth taking a look at'
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: 'narco.news Book List'
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'narco.news Book List'
				},
				{
					hid: 'twitter:card',
					property: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					hid: 'twitter:title',
					property: 'twitter:title',
					content: 'Easy reading on-topic books that are worth taking a look at'
				},
				{
					hid: 'twitter:image',
					property: 'twitter:image',
					content: 'https://narco.news/images/booklist.png'
				}
			]
		};
	}
};
</script>

<style></style>
