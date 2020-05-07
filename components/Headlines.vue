<template>
	<div class="px-4">
		<infinite-slide-bar
			:bar-style="{
				background: 'transparent',
				padding: '5px 0'
			}"
		>
			<div class="p-4">
				<div class="card max-w-lg rounded overflow-hidden shadow-md">
					<div class="px-2 py-3">
						<div class="flex-auto font-bold text-md mb-2">
							<div>
								<a style="color: #0597f2;" href="#">
									Hello. I am a headline. I live at the top of the page.
								</a>
								<span
									style="font-weight: 400;"
									class="text-sm text-gray-600 px-4"
								>
									05.10.2020
								</span>
								<img
									class="float-right rounded-full"
									width="20"
									height="20"
									alt="Press website favicon"
									src="https://www.milenio.com/bundles/camusassets/images/icons/114x114.png"
								/>
							</div>
						</div>
						<span class="flex-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatibus quia, nulla! Maiores et perferendis eaque,
							exercitationem praesentium nihil.
						</span>
					</div>
				</div>
			</div>
		</infinite-slide-bar>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
