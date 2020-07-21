<template>
	<div>
		<div class="absolute top-0 left-0 m-4">
			<n-link to="/" class="hvr-pulse">
				<div class="flex">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							fill="#F24405"
							viewBox="0 0 24 24"
						>
							<g data-name="Layer 2">
								<g data-name="home">
									<rect width="24" height="24" opacity="0" />
									<path
										d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"
									/>
								</g>
							</g>
						</svg>
					</span>
				</div>
			</n-link>
		</div>
		<div id="smallLinks" class="absolute flex flex-col top-0 left-0 mt-24 ml-8">
			<n-link to="/about" class="mb-2 hvr-forward">
				<div class="flex flex-row">
					<span class="pt-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#DFF2E9"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-help-circle"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
							<line x1="12" y1="17" x2="12.01" y2="17"></line>
						</svg>
					</span>
					<h2 class="text-xl ml-4">
						ABOUT
					</h2>
				</div>
			</n-link>
			<!-- <n-link to="/about" class="hvr-forward">
				<div class="flex flex-row">
					<span class="pt-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#DFF2E9"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-mail"
						>
							<path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
					</span>
					<h2 class="text-xl ml-4">
						CONTACT
					</h2>
				</div>
			</n-link> -->
		</div>
		<div class="flex flex-col mt-20">
			<n-link to="/wire" class="bigLink hvr-pulse-shrink">
				<div class="flex">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-activity"
						>
							<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
						</svg>
					</span>
					<h2 class="text-3xl ml-6">
						NEWSWIRE
					</h2>
				</div>
			</n-link>
			<n-link to="/booklist" class="bigLink hvr-pulse-shrink">
				<div class="flex">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#DFF2E9"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-book"
						>
							<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
							<path
								d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
							></path>
						</svg>
					</span>
					<h2 class="text-3xl ml-6">
						BOOK LIST
					</h2>
				</div>
			</n-link>
			<a href="/wiki" class="bigLink hvr-pulse-shrink">
				<div class="flex">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-sidebar"
						>
							<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="9" y1="3" x2="9" y2="21"></line>
						</svg>
					</span>
					<h2 class="text-3xl ml-6">
						WIKI
					</h2>
				</div>
			</a>
			<div class="mt-20">
				<div class="flex">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#f2f2f2"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-map"
						>
							<polygon
								points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
							></polygon>
							<line x1="8" y1="2" x2="8" y2="18"></line>
							<line x1="16" y1="6" x2="16" y2="22"></line>
						</svg>
					</span>
					<h2 class="text-3xl ml-6">
						MAPS
					</h2>
				</div>
				<n-link to="/guanajuato-map" class="mb-2 hvr-forward mt-3 ml-4">
					<div class="flex flex-row">
						<span class="pt-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#f2f2f2"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-map-pin"
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
						</span>
						<h2 class="text-xl ml-4">
							Guanajuato
						</h2>
					</div>
				</n-link>
				<n-link to="/tamap" class="mb-2 hvr-forward mt-3 ml-4">
					<div class="flex flex-row">
						<span class="pt-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#f2f2f2"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-map-pin"
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
						</span>
						<h2 class="text-xl ml-4">
							Tamaulipas
						</h2>
					</div>
				</n-link>
				<n-link to="/mich-map" class="mb-2 hvr-forward mt-3 ml-4">
					<div class="flex flex-row">
						<span class="pt-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#f2f2f2"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-map-pin"
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
						</span>
						<h2 class="text-xl ml-4">
							Michoacán
						</h2>
					</div>
				</n-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Menu'
};
</script>

<style lang="scss" scoped>
.bigLink {
	margin: 0.5em 0;

	svg {
		margin-top: 2px;
	}
	&:active a {
		color: #f2cd5c;
	}
}

a {
	font-weight: 600;
	color: #f2f2f2;
	&:hover {
		color: #f2cd5c;
	}
}

#smallLinks a {
	&:hover {
		color: #52b5f2;
	}
	&:active {
		color: #52b5f2;
	}
}
</style>
