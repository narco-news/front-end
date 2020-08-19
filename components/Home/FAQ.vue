<template>
	<div class="mb-12">
		<div
			style="color: #0d0d0d;"
			class="text-center pattern-diagonal-stripes-sm"
		>
			<h1
				style="color: #f2913d;"
				class="inline p-4 text-lg md:text-3xl font-bold uppercase"
			>
				Frequently Asked Questions
			</h1>
		</div>
		<div class="faq flex justify-center mt-12 px-4">
			<vsa-list>
				<!-- Here you can use v-for to loop through items  -->
				<vsa-item>
					<vsa-heading>
						Who the hell are you people?
					</vsa-heading>
					<vsa-content>
						We're really just a curious couple of folks with an interest in
						understanding these issues and helping others do the same. We
						maintain a level of privacy and security not to deceive but instead
						protect our safety. That is not to say that it will be like this
						indefinitely, but for the time being that is how it must be.
					</vsa-content>
				</vsa-item>
				<vsa-item>
					<vsa-heading>
						Are you guys cops?
					</vsa-heading>
					<vsa-content>
						<span class="font-bold">No!</span> Our team has
						<span class="underline">zero</span> affliation with any law
						enforcement agency from any country. We are not "lawmen in training"
						and have no aspirations of becoming part of any particular law
						enforcement appararus.
					</vsa-content>
				</vsa-item>
				<vsa-item>
					<vsa-heading>
						What's the point of all this?
					</vsa-heading>
					<vsa-content>
						We felt there was a need for better understanding and availability
						of information in regards to drug trafficking, drug policy, and it's
						history. Much of what we understand about these topics is outdated
						and could use some refreshing! A fair amount also gets lost in
						translation, something which we hope to lessen.
					</vsa-content>
				</vsa-item>
				<vsa-item>
					<vsa-heading>
						Do you make any money<br />
						off this website?
					</vsa-heading>
					<vsa-content>
						<span class="font-bold">Nope!</span> The website doesn't run any
						advertising of any sort.
					</vsa-content>
				</vsa-item>
				<vsa-item>
					<vsa-heading>Whose funding this place?</vsa-heading>
					<vsa-content>
						No one, the costs and maintance to keep the lights on around here is
						provided solely by us at the moment.
					</vsa-content>
				</vsa-item>
				<vsa-item>
					<vsa-heading
						>Shouldn't drug cartels<br />
						be labeled as<br />
						terrorist organizations?</vsa-heading
					>
					<vsa-content>
						<span class="font-bold">No.</span> It's a lazy and shiny policy
						choice that doesn't reflect the current reality of the criminal
						landscape in Mexico or the groups that make up it. Some actors wade
						into the terroritory of criminal insurgency but none yet can be
						argued as being terrorists.
					</vsa-content>
				</vsa-item>
			</vsa-list>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.vsa-list {
	--vsa-highlight-color: #03a688;
	--vsa-default-icon-size: 0.5;
}
h1 {
	background-color: #f2f2f2;
	font-family: 'Lora', sans-serif;
}
</style>
