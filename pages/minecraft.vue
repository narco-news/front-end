<template>
	<div>
		<div
			class="bg-white rounded shadow w-4/5 md:w-3/5 mx-auto my-6 text-center p-4"
		>
			<div class="my-2">
				<h1 class="font-mono font-bold text-lg">Public Minecraft Server</h1>
				<h1 class="font-mono font-bold text-lg text-gray-700">
					Servidor público de Minecraft
				</h1>
			</div>
			<img
				class="mx-auto animate__animated animate__fadeIn"
				src="~/assets/images/minecraft.jpeg"
				alt="Remote cabin in the jungle"
			/>
			<p class="text-left text-md mt-4">
				<span class="font-bold">Need an escape?</span>
				<br />
				<span class="text-xs">
					Everyone needs a break from never ending news cycles and world
					affairs. We've set up a public Minecraft server available for anyone
					and everyone. What makes Minecraft great is that it doesn't present
					you with any obvious purpose. Build things with other folks or build
					things alone. Spend all your time farming and raising livestock or
					deep down in a mineshaft treasure hunting. That choice in Minecraft is
					left entirely up to you. Our hope is this virtual world can provide a
					healthy, friendly and safe digital getaway from pressures and stresses
					of our own world. The goals are simple, to have fun and relax!
					<br />
					<br />
					The current installation running is
					<i>primarily</i> vanilla Minecraft version
					<span class="font-bold">1.15.2</span>
				</span>
			</p>
			<div class="my-6 uppercase font-bold underline text-blue-600">
				<a
					href="http://minecraft.narco.news:8123/?worldname=world&mapname=flat&zoom=3&x=-226&y=64&z=210"
					target="_blank"
					>Check out the live map!</a
				>
			</div>
			<div style="color: #ff5e70;" class="my-8">
				<button
					style="border: #ff5e70 1px solid;"
					class="rounded shadow-md p-2 px-6 text-sm hvr-grow"
					@click="show = true"
				>
					Reveal Server IP Address
				</button>
				<vodal
					className="minecraftIp"
					:show="show"
					:width="width"
					:height="height"
					:animation="animation"
					@hide="show = false"
				>
					<div class="m-2">
						<div class="flex flex-col justify-center">
							<div style="color: #ff5e70;" class="p-4 mt-4 pattern-dots-sm">
								<h1 class="text-xl text-black bg-white py-4">
									The <span style="color: #ff5e70;">Rules</span>
								</h1>
							</div>
							<ol
								class="list-disc text-left text-sm font-sans font-bold mt-2 mx-4"
							>
								<li class="p-1">
									Be respectful
								</li>
								<li class="p-1">Be considerate of others creations</li>
								<li>
									Not everyone might want to discuss things happening in the
									world or their personal lives. We're in here getting away from
									all that. Be mindful of this.
								</li>
								<li class="p-1">
									PVP is tolerated but please announce your intention instead of
									exploiting someones trust.
								</li>
							</ol>
							<div
								style="color: #ff5e70;"
								class="pattern-diagonal-stripes-sm h-20 flex justify-center items-center my-6"
							>
								<span class="bg-white text-xl p-2 font-mono text-gray-900"
									>minecraft.narco.news</span
								>
							</div>
						</div>
					</div>
				</vodal>
			</div>
			<div
				style="line-height: 120%;"
				class="verysmalltext italic text-gray-600 mx-2 md:mx-16"
			>
				If you've never played Minecraft but are curious, please reach out! All
				you need is a computer running Windows, macOS or Linux. The game can be
				purchased on their
				<a
					class="text-blue-500 font-bold"
					href="https://minecraft.net"
					target="_blank"
					>website</a
				>.
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Minecraft',
	data() {
		return {
			show: false,
			animation: 'rotate',
			width: 300,
			height: 550
		};
	}
};
</script>

<style lang="scss">
@import 'vodal/common.css';
@import 'vodal/rotate.css';

.verysmalltext {
	font-size: 8px;
}

.minecraftIp {
	color: #204653 !important;
	.vodal-dialog {
		border-radius: 15px;
	}
	.vodal-close:after {
		background: #204653;
	}
	.vodal-close:before {
		background: #204653;
	}
}
</style>
