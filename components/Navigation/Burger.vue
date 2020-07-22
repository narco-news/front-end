<template>
	<div class="flex flex-col">
		<div id="main">
			<div id="home-icon">
				<n-link to="/">
					<img src="~/assets/icons/home-40.svg" alt="Home icon" />
				</n-link>
			</div>
			<div id="top">
				<n-link
					to="/about"
					class="hl-link flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-help-circle"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
						<line x1="12" y1="17" x2="12.01" y2="17"></line>
					</svg>

					<div class="hvr-forward">About</div>
				</n-link>
				<n-link
					to="#"
					class="hl-link flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
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
					<div class="hvr-forward">Contact</div>
				</n-link>
			</div>
			<div id="mid">
				<n-link
					to="/wire"
					class="flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<img src="~/assets/icons/activity-32.svg" alt="Booklist icon" />
					<span class="text-3xl">Newswire</span>
				</n-link>
				<n-link
					to="/booklist"
					class="flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<img src="~/assets/icons/bookmark.svg" alt="Booklist icon" />
					<span class="text-3xl">Booklist</span>
				</n-link>
				<n-link
					to="/academia"
					class="flex flex-row flex-no-wrap items-center gap-4 mb-2"
				>
					<img src="~/assets/icons/book-open-40.svg" alt="Booklist icon" />
					<span class="text-3xl">Academic</span>
				</n-link>
				<n-link
					to="/wiki"
					class="flex flex-row flex-no-wrap items-center gap-4"
				>
					<img src="~/assets/icons/wiki.svg" alt="Booklist icon" />
					<span class="text-3xl">Wiki</span>
				</n-link>
			</div>
			<div id="map-links">
				<div class="flex flex-col flex-no-wrap justify-start gap-2">
					<div>
						<img src="~/assets/icons/map.svg" alt="Map icon" />
					</div>
					<div>
						<h1 class="ml-2">Mexico</h1>
						<n-link
							to="/guanajuato-map"
							class="flex flex-row flex-no-wrap items-center gap-2 ml-4"
						>
							<img src="~/assets/icons/map-pin.svg" alt="Map icon" />
							<div class="text-xl">Guanajuato</div>
						</n-link>
						<n-link
							to="/tamap"
							class="flex flex-row flex-no-wrap items-center gap-2 ml-4"
						>
							<img src="~/assets/icons/map-pin.svg" alt="Map icon" />
							<div class="text-xl">Tamaulipas</div>
						</n-link>
						<n-link
							to="/michmap"
							class="flex flex-row flex-no-wrap items-center gap-2 ml-4"
						>
							<img src="~/assets/icons/map-pin.svg" alt="Map icon" />
							<div class="text-xl">Michoacán</div>
						</n-link>
					</div>
				</div>
			</div>
		</div>
		<!-- Logo -->
		<img id="logo" src="/logo/nn-colorful-300.png" alt="narco.news logo" />
	</div>
</template>

<script>
export default {
	name: 'Burger'
};
</script>

<style lang="scss" scoped>
a {
	color: #f2f2f2;
	&:hover svg {
		color: #595fd9;
	}
}
#home-icon {
	position: absolute;
	top: 0;
	left: 0;
	margin: 1em 1em;
}
#logo {
	position: absolute;
	bottom: 0;
	width: 50%;
	margin: 0 0 25px 25px;
}
#top {
	position: relative;
	margin: 1em 0;
	text-transform: uppercase;
	font-family: 'IBM Plex Sans', sans;
}
#mid {
	position: relative;
	margin: 2em 0 2em;
	color: #f2f2f2;
	font-family: 'Lora', serif;
	font-weight: 500;
	span {
		&:hover {
			color: #595fd9;
		}
	}
}

#map-links {
	font-family: 'IBM Plex Sans', sans;
	font-weight: 500;
	color: #a9a9a9;
	text-transform: uppercase;
	a {
		&:hover {
			color: #595fd9;
		}
	}
	h1 {
		font-family: 'Lora', sans-serif;
		text-transform: none;
	}
}
</style>
