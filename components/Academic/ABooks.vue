<template>
	<div class="mx-1">
		<h1 class="text-xl font-bold p-2">Books</h1>
		<div class="h-5 pattern-dots-md"></div>
		<div
			v-for="book in Books"
			:key="book.id"
			class="grid grid-flow-col grid-cols-2 md:grid-cols-3 bg-white my-2 h-auto overflow-hidden rounded-sm shadow-sm"
		>
			<div class="flex flex-col p-1 col-span-1 md:col-span-2">
				<h1 class="book-title text-lg font-bold">{{ book.title }}</h1>
				<h2 class="book-author text-md italic">{{ book.authors }}</h2>
				<p class="date-published text-sm">{{ book.datePublished }}</p>
				<p
					class="book-desc w-full h-56 p-1 text-xs overflow-y-auto shadow-inner"
				>
					{{ book.desc }}
				</p>
			</div>
			<div class="flex flex-row justify-end">
				<img
					:src="book.imageUrl"
					:alt="book.imageAlt"
					class="object-cover w-48 rounded-tr-sm"
				/>
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
<style lang="scss" scoped>
.book-title {
}
.book-author {
	color: #f26457;
}
.date-published {
	font-family: 'IBM Plex Sans', sans;
}
</style>
