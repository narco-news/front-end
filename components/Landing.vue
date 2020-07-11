<template>
	<div>
		<div class="relative">
			<div
				class="static flex flex-col md:flex-row justify-center items-center image-land"
			>
				<!-- <div class="static bg-white z-10 h-32 w-56 rounded-md m-3 md:m-4 md:mx-10 p-4">
          <div class="grid grid-cols-4">
            <div
              class="col-span-2 text-3xl text-center font-serif font-extrabold"
              style="color: #ff5e70"
            >narco</div>
            <div class="col-span-2">
              <div class="flex flex-col text-center">
                <div class="text-xs uppercase">noun</div>
                <div class="text-xs font-bold">/ nAHR-koh /</div>
              </div>
            </div>
          </div>
          <div class="text-md text-center mt-1">Dealer in drugs</div>
          <div
            class="text-xs text-center italic"
          >"political bosses who may have links to the narcos"</div>
        </div>
        <div class="static bg-white z-10 h-32 w-56 rounded-md m-3 md:m-4 md:mx-10 p-2">
          <div class="grid grid-cols-4">
            <div
              class="col-span-2 text-3xl text-center font-serif font-extrabold"
              style="color: #ff5e70"
            >news</div>
            <div class="col-span-2">
              <div class="flex flex-col text-center">
                <div class="text-xs uppercase">noun</div>
                <div class="text-xs font-bold">/ nOOZ /</div>
              </div>
            </div>
          </div>
          <div class="text-md text-center mt-1">Newly received or noteworthy information</div>
          <div class="text-xs text-center italic">"we have some news for you"</div>
        </div> -->
				<img
					src="~/assets/images/opium.jpg"
					alt="Poppy plants"
					class="object-cover w-full absolute z-0 image-land"
				/>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.image-land {
	height: 20rem;
}

.definition {
	p {
		font-family: 'Baloo Thambi 2', cursive;
	}
}
.word {
	h2 {
		font-family: 'Patua One', display;
	}
}
.exp {
	font-family: 'Montserrat', sans-serif;
	font-style: italic;
}
.gram {
	color: #ff5e70;
}
.opium {
	background-image: ('images/opium.jpg');
}
</style>
