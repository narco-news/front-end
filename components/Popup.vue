<template>
	<div v-if="!isHidden" class="m-1 text-center">
		<div class="p-2">
			<div
				style="border: solid 1px black;"
				class="inline-flex items-center bg-white leading-none text-red-600 rounded-full p-3 shadow-xl text-teal text-sm"
			>
				<span
					class="inline-flex bg-red-500 text-white rounded-full h-14 w-14 p-2 ml-2 justify-center items-center"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<path
							fill="#fff"
							d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"
						/></svg
				></span>
				<span class="inline-flex px-1"
					>Thanks for stopping by! Things are still much in development around
					here so please excuse any funkiness you happen to come across.</span
				>
				<img
					src="../assets/icons/times.svg"
					width="20"
					height="20"
					style="min-width: 20px; min-height: 20px;"
					@click="isHidden = true"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isHidden: false
		};
	}
};
</script>

<style></style>
