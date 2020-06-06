<template>
	<vue-navigation-bar :options="navbarOptions"></vue-navigation-bar>
</template>

<script>
export default {
	data() {
		return {
			navbarOptions: {
				elementId: 'main-navbar',
				isUsingVueRouter: true,
				mobileBreakpoint: 992,
				brandImagePath: '/',
				brandImage: require('~/assets/images/bw-nn-logo.png'),
				brandImageAltText: 'brand-image',
				collapseButtonImageOpen: require('~/assets/images/collapse-menu-dark.png'),
				collapseButtonImageClose: require('~/assets/images/times.png'),
				showBrandImageInMobilePopup: true,
				ariaLabelMainNav: 'Main Navigation',
				tooltipAnimationType: 'shift-away',
				menuOptionsLeft: [
					{
						type: 'link',
						path: '/',
						text: 'Home',
						iconLeft:
							'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0D0D0D" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"/></svg>'
					},
					{
						type: 'link',
						text: 'Maps',
						iconLeft:
							'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0D0D0D" d="M21.32,5.05l-6-2h-.07a.7.7,0,0,0-.14,0h-.23l-.13,0h-.07L9,5,3.32,3.05a1,1,0,0,0-.9.14A1,1,0,0,0,2,4V18a1,1,0,0,0,.68.95l6,2h0a1,1,0,0,0,.62,0h0L15,19.05,20.68,21A1.19,1.19,0,0,0,21,21a.94.94,0,0,0,.58-.19A1,1,0,0,0,22,20V6A1,1,0,0,0,21.32,5.05ZM8,18.61,4,17.28V5.39L8,6.72Zm6-1.33-4,1.33V6.72l4-1.33Zm6,1.33-4-1.33V5.39l4,1.33Z"/></svg>',
						subMenuOptions: [
							{
								type: 'link',
								text: 'Tamaulipas, México',
								path: '/tamap',
								iconLeft:
									'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
							},
							{
								type: 'link',
								text: 'Michoacán, México',
								path: '/michmap',
								iconLeft:
									'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
							},
							{
								type: 'link',
								text: 'Guanajuato, México',
								path: '/guanajuato-map',
								iconLeft:
									'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
							}
						]
					},
					{
						type: 'link',
						text: 'Library',
						iconLeft:
							'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0D0D0D" d="M22.47,18.82l-1-3.86h0L18.32,3.37a1,1,0,0,0-1.22-.71l-3.87,1a1,1,0,0,0-.73-.33H2.5a1,1,0,0,0-1,1v16a1,1,0,0,0,1,1h10a1,1,0,0,0,1-1v-8l2.2,8.22a1,1,0,0,0,1,.74,1.15,1.15,0,0,0,.26,0l4.83-1.29a1,1,0,0,0,.61-.47A1.05,1.05,0,0,0,22.47,18.82Zm-16,.55h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm5,12h-3v-2h3Zm0-4h-3v-6h3Zm0-8h-3v-2h3Zm2.25-1.74,2.9-.78.52,1.93-2.9.78Zm2.59,9.66-1.55-5.8,2.9-.78,1.55,5.8Zm1,3.86-.52-1.93,2.9-.78.52,1.93Z"/></svg>',
						subMenuOptions: [
							{
								type: 'link',
								text: 'Book List',
								subText: 'Easy reading on-topic books that are worth your time',
								path: '/booklist',
								iconLeft:
									'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#0D0D0D" d="M21.17,2.06A13.1,13.1,0,0,0,19,1.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2,13.1,13.1,0,0,0-2.17.19,1,1,0,0,0-.83,1v12a1,1,0,0,0,1.17,1,10.9,10.9,0,0,1,8.25,1.91l.12.07.11,0a.91.91,0,0,0,.7,0l.11,0,.12-.07A10.9,10.9,0,0,1,20.83,16a1,1,0,0,0,1.17-1v-12A1,1,0,0,0,21.17,2.06ZM11,15.35a12.87,12.87,0,0,0-6-1.48c-.33,0-.66,0-1,0v-10a8.69,8.69,0,0,1,1,0,10.86,10.86,0,0,1,6,1.8Zm9-1.44c-.34,0-.67,0-1,0a12.87,12.87,0,0,0-6,1.48V5.67a10.86,10.86,0,0,1,6-1.8,8.69,8.69,0,0,1,1,0Zm1.17,4.15A13.1,13.1,0,0,0,19,17.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2.05,13.1,13.1,0,0,0-2.17.19A1,1,0,0,0,2,19.21,1,1,0,0,0,3.17,20a10.9,10.9,0,0,1,8.25,1.91,1,1,0,0,0,1.16,0A10.9,10.9,0,0,1,20.83,20,1,1,0,0,0,22,19.21,1,1,0,0,0,21.17,18.06Z"/></svg>'
							},
							{
								type: 'link',
								text: 'Academia',
								subText:
									'Collection of papers, journals and other texts originating from the academic world',
								path: '/academia',
								iconLeft:
									'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="20" height="20" viewBox="0 0 24 24"><path fill="#0D0D0D" d="M18.93,11.67a.42.42,0,0,0,0-.1A7.4,7.4,0,0,0,15,7.62V4h1a1,1,0,0,0,0-2H8A1,1,0,0,0,8,4H9V7.62a7.4,7.4,0,0,0-3.89,4,.42.42,0,0,0,0,.1,7.5,7.5,0,1,0,13.86,0ZM10.31,9.26A1,1,0,0,0,11,8.31V4h2V8.31a1,1,0,0,0,.69.95A5.43,5.43,0,0,1,16.23,11H7.77A5.43,5.43,0,0,1,10.31,9.26ZM12,20a5.51,5.51,0,0,1-5.5-5.5A5.34,5.34,0,0,1,6.72,13H17.28a5.34,5.34,0,0,1,.22,1.5A5.51,5.51,0,0,1,12,20Zm2-4a1,1,0,1,0,1,1A1,1,0,0,0,14,16Zm-4-1a1,1,0,1,0,1,1A1,1,0,0,0,10,15Z"/></svg>'
							}
							// {
							// 	type: 'hr'
							// }
							// {
							// 	type: 'link',
							// 	text: 'Contact Us',
							// 	path: './contact',
							// 	iconLeft:
							// 		'<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="20" height="20" viewBox="0 0 24 24"><path fill="#0D0D0D" d="M16.77,5.37A1,1,0,0,0,18.13,5,1,1,0,0,1,19,4.5a1,1,0,0,1,0,2,1,1,0,0,0,0,2A3,3,0,1,0,16.4,4,1,1,0,0,0,16.77,5.37ZM21,13.5a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.91L9.88,14.8a3,3,0,0,0,4.24,0l1.64-1.64a1,1,0,1,0-1.42-1.42L12.7,13.38a1,1,0,0,1-1.4,0L5.41,7.5H13a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-4A1,1,0,0,0,21,13.5ZM18.29,9.79a1,1,0,0,0,0,1.42l.15.12a.76.76,0,0,0,.18.09.64.64,0,0,0,.18.06l.2,0a1,1,0,0,0,.71-1.71A1,1,0,0,0,18.29,9.79Z"/></svg>'
							// }
						]
					}
				],
				menuOptionsRight: [
					{
						type: 'link',
						text: 'ABOUT',
						path: '/about',
						class: 'small-text'
					},
					{
						type: 'button',
						text: 'The Wire',
						path: '/wire',
						class: 'hello'
					}
				]
			}
		};
	}
};
</script>

<style lang="scss">
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
@import '~/node_modules/vue-navigation-bar/dist/vue-navigation-bar.css';

.small-text a {
	font-size: 14 !important;
	font-family: 'Baloo Thambi 2', cursive !important;
}

.hello {
	background-color: #dff1d5 !important;
	border-radius: 15px !important;
	z-index: 1;
	position: relative;
	font-size: 12px;
	font-weight: 400;
	font-family: 'Patua One', cursive;
	color: #3b274b;
	padding: 1em 1em;
	outline: none;
	border: none;
	background-color: hsl(236, 32%, 26%);

	&::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: white;
		color: #dff1d5 !important;
		transform-origin: center right;
		transform: scaleX(0);
		transition: transform 0.25s ease-in-out;
		border-radius: 5px !important;
	}
	&:hover {
		cursor: pointer;
		color: #3b274b !important;
	}
	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}
}

.vnb__brand-image-wrapper__link__image {
	max-height: 38px;
}

.vnb-button {
	border-radius: 5px !important;
	margin-right: 20px !important;
}

.vnb {
	background-color: #fff !important;
	border-bottom: 1px solid black;
	font-family: 'Baloo Thambi 2', cursive;
	font-weight: 500;
	.button-red {
		background: #ff3b30;
		&:hover {
			background: darken(#ff3b30, 10%);
		}
	}
	&__menu-options {
		&__option {
			&__button {
				&__icon {
					svg {
						margin-top: -3px;
					}
				}
			}
		}
	}
	&__popup {
		&__bottom {
			&__menu-options {
				&__option {
					&__link {
						&__icon {
							svg {
								margin-top: -4px;
							}
						}
					}
				}
			}
		}
	}
	.custom-section-content {
		width: 100%;
		@media (min-width: 568px) {
			width: 50%;
		}
		@media (min-width: 992px) {
			width: 15%;
		}
		@media (min-width: 1200px) {
			width: 20%;
		}
	}
}
</style>
