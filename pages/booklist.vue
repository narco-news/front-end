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
			twitter_description:
				'Books related to drug trafficking and everything it involves.',
			twitter_title: 'narco.news',
			feature_image: 'https://narco.news/images/booklist.png',
			title: 'Easy reading book list'
		};
	},
	head() {
		return {
			title:
				this.twitter_title +
				' - ' +
				this.twitter_description +
				' | ' +
				this.pageUrl,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.twitter_description
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.twitter_description
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.feature_image
				},
				{
					hid: 'og:site_name',
					property: 'og:site_name',
					content: this.twitter_title
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.twitter_title
				},
				{hid: 'og:url', property: 'og:url', content: process.env.blogUrl},
				{
					hid: 'apple-mobile-web-app-title',
					name: 'apple-mobile-web-app-title',
					content: this.twitter_title
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.twitter_description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.feature_image
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.twitter_title
				}
			]
		};
	}
};
</script>

<style></style>
