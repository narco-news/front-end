<template>
	<div class="pt-16">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#03A688"
					fill-opacity="1"
					d="M0,0L80,26.7C160,53,320,107,480,106.7C640,107,800,53,960,53.3C1120,53,1280,107,1360,133.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				></path>
			</svg>
		</div>
		<div class="negative-margin">
			<div class="situation-aware text-3xl lg:text-5xl p-6 lg:ml-12">
				{{ $t('message.sitaware') }}
			</div>
			<div
				class="tam-box pb-12 flex flex-col md:flex-row justify-center items-center"
			>
				<div class="bg-white rounded-lg shadow-lg w-64 mb-8 md:mb-0 md:mr-8">
					<div class="">
						<div class="p-2">
							<img
								src="~/assets/flags/mexico-2.svg"
								class="w-8 float-right"
								alt="Mexico flag"
							/>
							<h1 class="text-2xl font-bold">Tamaulipas</h1>
							<p class="text-sm italic mb-4">24°17′14″ N, 98°33′48″ W</p>
							<!-- <div
								class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded w-16"
							>
								<n-link to="/tamap">
									<div class="flex flex-row flex-no-wrap">
										{{ $t('message.map') }}
									</div>
								</n-link>
							</div> -->
							<div
								class="my-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-32"
							>
								<n-link to="/tag/tamaulipas">
									<div class="flex flex-row flex-no-wrap gap-2">
										{{ $t('message.latest') }}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="#f2f2f2"
											width="24"
											height="24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</div>
								</n-link>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-lg w-64">
					<div>
						<div class="p-2">
							<img
								src="~/assets/flags/mexico-2.svg"
								class="w-8 float-right"
								alt="Mexico flag"
							/>
							<h1 class="text-2xl font-bold">Guanajuato</h1>
							<p class="text-sm italic mb-4">21°1′0″ N, 101°16′0″ W</p>
							<!-- <div
								class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded w-16"
							>
								<n-link to="/guanajuato-map">
									<div class="flex flex-row flex-no-wrap gap-2">
										{{ $t('message.map') }}
									</div>
								</n-link>
							</div> -->

							<div
								class="my-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-32"
							>
								<n-link to="/tag/guanajuato">
									<div class="flex flex-row flex-no-wrap gap-2">
										{{ $t('message.latest') }}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="#f2f2f2"
											width="24"
											height="24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</div>
								</n-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SitAware',
	i18n: {
		messages: {
			en: {
				message: {
					sitaware: 'Situational Awareness',
					map: 'Map',
					latest: 'Latest'
				}
			},
			es: {
				message: {
					sitaware: 'Conciencia situacional',
					map: 'Mapa',
					latest: 'Último'
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.negative-margin {
	margin-top: -2em;
	background-color: #03a688;
	@media (min-width: 1024px) {
		margin-top: -7em;
	}
	@media (max-width: 768px) {
		margin-top: -2em;
	}
}
.situation-aware {
	background-color: #03a688;
	color: white;
	font-weight: 700;
}
.tam-box {
	background-color: #03a688;
}
</style>
