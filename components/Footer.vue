<template>
	<div style="background-color: #1b2431;" class="pt-3">
		<div class="h-full mb-2 mx-2 px-2">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
				<div class="sm:inline sm:grid-cols-1">
					<span class="text-md w-full">
						mailing list
					</span>
					<form class="w-full max-w-sm px-2 pt-1 sm:pt-2">
						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								<label
									class="block text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="inline-full-name"
								>
									Name
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									id="inline-full-name"
									class="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
									type="text"
									placeholder="El Juan Doe"
								/>
							</div>
						</div>
						<div class="md:flex md:items-center mb-6">
							<div class="md:w-1/3">
								<label
									class="block text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
									for="inline-username"
								>
									Email
								</label>
							</div>
							<div class="md:w-2/3">
								<input
									id="inline-username"
									class="text-xs bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
									type="password"
									placeholder="whodoe701@mail.com"
								/>
							</div>
						</div>
						<div class="md:flex md:items-center">
							<div class="md:w-1/3"></div>
							<div class="md:w-2/3">
								<button
									class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white text-xs font-bold py-1 px-2 rounded"
									type="button"
								>
									Sign Up
								</button>
							</div>
						</div>
					</form>
				</div>
				<div class="grid-cols-1 pl-4 lg:pl-12">
					<div>
						<span class="text-md w-full">
							wire
						</span>
						<div class="flex flex-auto flex-wrap text-xs ml-4">
							<a class="p-1" href="#">Press Aggregate</a>
							<a class="p-1" href="#">Drug Trafficking</a>
							<a class="p-1" href="#">Mexican DTOs</a>
						</div>
					</div>
				</div>
				<div class="grid-cols-1">
					<div>
						<span class="text-md w-full">
							narco news
						</span>
						<div class="grid grid-cols-2 text-xs ml-4">
							<a class="p-1" href="#">About</a>
							<a class="p-1" href="#">Blog</a>
							<a class="p-1" href="#">Contact Us</a>
							<a class="p-1" href="#">Github</a>
							<a class="p-1" href="#">RSS</a>
						</div>
					</div>
				</div>
				<div class="grid-cols-1">
					<div>
						<span class="text-md w-full">
							favorites
						</span>
						<div class="flex flex-auto flex-wrap text-xs ml-4">
							<a
								class="p-1"
								target="_blank"
								href="https://smallwarsjournal.com/elcentro"
								>El Centro</a
							>
							<a
								class="p-1"
								target="_blank"
								href="http://www.borderlandbeat.com/"
								>Borderland Beat</a
							>

							<a
								class="p-1"
								target="_blank"
								href="https://www.insightcrime.org/"
								>InSight Crime</a
							>
							<a
								class="p-1"
								target="_blank"
								href="https://www.crisisgroup.org/latin-america-caribbean/mexico"
								>Crisis Group MX</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div></div>
		<div class="bottom-0 pb-2 text-center">
			<span class="text-gray-600 text-xs">narco news 2020</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
