<template>
	<div class="grid grid-cols-2 text-center">
		<div
			v-for="book in $options.bookList.books"
			:key="book.id"
			class="grid grid-cols-1 mx-auto"
		>
			<div class="book-cover mx-auto w-32 md:w-48 lg:w-54 h-full">
				<img :src="book.imageUrl" :alt="book.imageAlt" />
			</div>
			<div
				class="book-box flex flex-col bg-white rounded-lg shadow-lg w-40 h-auto p-1"
			>
				<h2 class="text-xs font-serif font-bold text-red-400">
					{{ book.title }}
				</h2>
				<h3 class="text-sm text-gray-500 p-1">
					{{ book.authors }}
				</h3>
				<button
					class="bg-gray-300 rounded text-gray-700 text-xs font-extrabold"
					@click="$modal.show('bookDesc')"
				>
					Description
				</button>
				<modal
					name="bookDesc"
					height="auto"
					:width="width"
					:scrollable="true"
					@before-open="beforeOpen"
					@before-close="beforeClose"
				>
					<!-- Modal Start -->
					<div class="text-sm m-1">
						<div>
							<!-- Modal Content -->
						</div>
						<button
							class="text-xs uppercase text-gray-800 bottom-0 float-right p-2"
							@click="$modal.hide('bookDesc')"
						>
							close
						</button>
					</div>
				</modal>
			</div>
		</div>
	</div>
</template>

<script>
import Books from '~/assets/bookList.json';
export default {
	name: 'BookCard',
	bookList: Books,
	data() {
		return {
			time: 0,
			duration: 5000,
			width: 350,
			foo: ''
		};
	},
	methods: {
		show() {
			this.$modal.show('bookDesc', {foo: 'bar', poo: true});
		},
		hide() {
			this.$modal.hide('bookDesc');
		},
		beforeOpen(event) {
			this.time = Date.now();
		},
		beforeClose(event) {
			if (this.time + this.duration < Date.now()) {
				event.cancel();
			}
		}
	}
};
</script>

<style lang="scss">
.book-box {
	background-color: white;
}
.book-button {
	background-color: black;
	color: white;
}
.book-cover {
	img {
		margin-bottom: -50px;
	}
}
</style>
