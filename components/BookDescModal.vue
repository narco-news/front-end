<template>
	<div>
		<modal :show="show" @close="close">
			// The elements that we wanted to be shown or used.
			<div v-for="(book, index) in myBookList" :key="book.id">
				<!-- Modal Start -->
				{{ index }}
				<!-- Modal End -->
			</div>
		</modal>
	</div>
</template>

<script>
import Modal from '~/components/Modal';
import bookList from '~/assets/bookList.json';

export default {
	components: {Modal},
	props: ['show'],
	data() {
		return {
			myBooklist: bookList.books
		};
	},
	methods: {
		chooseDesc() {
			// chooseDesc
		},
		close() {
			this.$emit('close');
		}
	}
};
</script>
