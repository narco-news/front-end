<template>
	<div>
		<div
			style="color: #3a656a; background-color: #eef3ed;"
			class="rounded shadow-md p-2 m-4 h-full"
		>
			<div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-xl m-4"
			>
				BOOK LIST
			</div>
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
					'twitter:card': {
						content:
							"We've compiled this list of books to help your exploration of this topic. We do not nesscarily endorse what is purported in these books, but feel they're all worth spending time with to better understand drug trafficking and it's complexities."
					},
					'twitter:site': {
						content: ''
					},
					'twitter:creator': {
						content: ''
					},
					'og:url': {
						content: 'https://narco.news/booklist'
					},
					'og:title': {
						content: 'Book list'
					},
					'og:image': {
						content: 'https://narco.news/images/meta/bw-nn-logo.png'
					},
					'og:description': {
						content:
							"We've compiled this list of books to help your exploration of this topic. We do not nesscarily endorse what is purported by these books, but feel they're all worth spending time with to better understand drug trafficking and it's complexities."
					},
					hid:
						"We've compiled this list of books to help your exploration of this topic. We do not nesscarily endorse what is purported in these books, but feel they're all worth spending time with to better understand drug trafficking and it's complexities.",
					content:
						"We've compiled this list of books to help your exploration of this topic. We do not nesscarily endorse what is purported in these books, but feel they're all worth spending time with to better understand drug trafficking and it's complexities."
				}
			]
		};
	}
};
</script>

<style></style>
