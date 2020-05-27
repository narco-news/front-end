<template>
	<div>
		<div
			style="color: #3a656a; background-color: #eef3ed;"
			class="rounded bg-white overflow-hidden shadow-md m-4 h-full"
		>
			<div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-xl m-4"
			>
				BOOK LIST
			</div>
			<div class="flex flex-auto flex-wrap my-5">
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
			bookList: myBookList.books
		};
	}
};
</script>

<style></style>
