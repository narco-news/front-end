<template>
	<div>
		<div
			style="color: #3a656a; background-color: #eef3ed;"
			class="rounded bg-white overflow-hidden shadow-md m-4"
		>
			<div
				style="font-family: 'Patua One', cursive;"
				class="flex justify-end lg:justify-start text-xl m-4"
			>
				BOOKLIST
			</div>
			<div class="h-screen">
				<BookCard />
			</div>
		</div>
	</div>
</template>

<script>
import BookCard from '~/components/BookCard';
export default {
	components: {
		BookCard
	}
};
</script>

<style></style>
