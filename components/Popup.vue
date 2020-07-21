<template>
	<div
		v-if="!isHidden"
		style="animation-delay: 2s;"
		class="fixed bottom-0 z-20 animate__animated animate__backInUp w-full flex justify-center py-4 px-2"
	>
		<div>
			<div
				class="inline-flex items-center bg-white leading-none rounded-lg p-3 shadow-xl"
			>
				<span
					class="inline-flex text-white rounded-full h-14 p-2 ml-2 justify-center items-center"
					style="background-color: #ff5e70;"
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
				<span class="grid grid-rows-1 px-1">
					<span
						style="
							color: #2a413e;
							font-family: 'Baloo Thambi 2', cursive;
							font-weight: 400;
						"
						class="text-sm md:text-md text-center p-1"
						>Things are still in development around here, please excuse any
						funkiness you happen to come across.</span
					>
				</span>
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
