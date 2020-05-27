<template>
	<div>
		<div>
			<div v-for="book in myBookList" :key="book.id">
				<book-desc-modal
					:show="showModal(book.id)"
					@close="toggleModal(book.id)"
				/>
				<a class="text-sm" href="#" @click.stop="toggleModal(book.id)">Show</a>
			</div>
		</div>
	</div>
</template>

<script>
import BookDescModal from '~/components/BookDescModal';
import bookList from '~/assets/bookList.json';
export default {
	components: {BookDescModal},
	props: {
		show: String,
		passOn: String
	},
	data() {
		return {
			myBookList: bookList.books,
			activeModal: 0
		};
	},
	methods: {
		showModal(id) {
			return this.activeModal === id;
		},
		toggleModal(id) {
			if (this.activeModal !== 0) {
				this.activeModal = 0;
				return false;
			}
			this.activeModal = id;
		}
	}
};
</script>

<style></style>
