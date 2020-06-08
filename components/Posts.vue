<template>
	<div>
		<article v-for="post in posts" :key="post.id" class="post">
			<div v-if="post.feature_image" class="">
				<nuxt-link :to="{path: '/' + post.slug}">
					<img
						class="mx-auto object-cover h-64 w-full mb-4"
						:src="post.feature_image"
						:alt="post.title"
					/>
				</nuxt-link>
			</div>
			<div class="row">
				<div class="md-11 lg-10 mx-auto">
					<div class="post-content">
						<div v-if="post.tags.length > 0" class="post-tags">
							<ul class="list inline">
								<li v-for="tag in post.tags.slice(0, 1)" :key="tag.id">
									<nuxt-link
										:to="{path: '/tag/' + tag.slug}"
										:title="tag.name"
										class="button tag-button hvr-bob animate__animated animate__slideInDown"
										>{{ tag.name.replace(/^(#)/, '') }}</nuxt-link
									>
								</li>
							</ul>
						</div>
						<h1
							v-if="post.title"
							class="md:px-4 md:pt-1 post-title hvr-forward animate__animated animate__fadeIn"
						>
							<nuxt-link
								:to="{path: '/' + post.slug}"
								:title="post.title"
								style="color: #d3494e;"
								>{{ post.title }}</nuxt-link
							>
						</h1>
						<div class="post-author">
							<div
								v-if="post.primary_author.profile_image"
								class="post-author-avatar"
							>
								<nuxt-link
									:to="{path: '/author/' + post.primary_author.slug}"
									:title="post.primary_author.name"
								>
									<img
										:src="post.primary_author.profile_image"
										:alt="post.primary_author.name"
									/>
								</nuxt-link>
							</div>
							<div class="post-author-info">
								<div class="post-author-info-description">Author</div>
								<div class="post-author-info-name">
									<nuxt-link
										:to="{path: '/author/' + post.primary_author.slug}"
										:title="post.primary_author.name"
										>{{ post.primary_author.name }}</nuxt-link
									>
								</div>
							</div>
						</div>
						<p v-if="post.custom_excerpt">{{ post.custom_excerpt }}</p>
						<p v-else-if="post.excerpt && !post.custom_excerpt">
							{{ post.excerpt }}
						</p>
						<nuxt-link
							class="post-read-more"
							:to="{path: '/' + post.slug}"
							title="Read more..."
							>Read more...</nuxt-link
						>
						<div class="post-meta">
							<ul class="list meta">
								<li v-if="post.featured">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										version="1.1"
									>
										<path
											d="M 4.5 2 C 3.675781 2 3 2.675781 3 3.5 L 3 14.484375 L 8 10.820313 L 13 14.484375 L 13 3.5 C 13 2.675781 12.324219 2 11.5 2 Z M 4.5 3 L 11.5 3 C 11.78125 3 12 3.21875 12 3.5 L 12 12.515625 L 8 9.578125 L 4 12.515625 L 4 3.5 C 4 3.21875 4.21875 3 4.5 3 Z "
										/>
									</svg>
									<span class="post-featured">Featured</span>
								</li>
								<li>
									<div class="post-meta-date">
										<div class="post-meta-date-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path
													fill="#ff5e70"
													d="M 6 1 L 6 3 L 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 18 3 L 18 1 L 16 1 L 16 3 L 8 3 L 8 1 L 6 1 z M 5 5 L 19 5 L 19 7 L 5 7 L 5 5 z M 5 9 L 19 9 L 19 19 L 5 19 L 5 9 z M 12.75 10 L 9 11.455078 L 9 13.068359 L 11 12.365234 L 11 18 L 13 18 L 13 10 L 12.75 10 z"
												/>
											</svg>
										</div>
										<div class="post-meta-date-info">
											<span style="color: #ff5e70;" class="published_at">{{
												post.published_at | dayjs
											}}</span>
											<span
												v-if="post.updated_at !== post.published_at"
												class="updated_at text-gray-500 text-xs"
											>
												last edited
												<span>{{ post.updated_at | dayjs }}</span></span
											>
										</div>
									</div>
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											fill="#3a656a"
											d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"
										/>
									</svg>
									<span
										><reading-time :content="post.html" style="color: #3a656a;"
									/></span>
								</li>
							</ul>
						</div>
						<!-- SHARE -->
						<div class="flex justify-end">
							<div class="hvr-pop mx-2">
								<a
									:href="
										'https://twitter.com/share?text=' +
										post.title +
										' written by ' +
										post.primary_author.name +
										' for narco.news' +
										'&url=' +
										blogUrl +
										'/' +
										post.slug
									"
									onClick="
											window.open(
												this.href,
												'twitter-share',
												'width=550,height=235'
											);
											return false;
										"
								>
									<svg
										id="Layer_1"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										width="30"
										height="30"
										x="0px"
										y="0px"
										viewBox="0 0 512 512"
										enable-background="new 0 0 512 512"
										xml:space="preserve"
									>
										<linearGradient
											id="SVGID_1_"
											gradientUnits="userSpaceOnUse"
											x1="269.8383"
											y1="439.5176"
											x2="269.8383"
											y2="64.4883"
											class="gradient-element"
										>
											<stop
												offset="0"
												class="primary-color-gradient"
												style="stop-color: #00b7ff;"
											></stop>
											<stop
												offset="1"
												class="secondary-color-gradient"
												style="stop-color: #ffffc7;"
											></stop>
										</linearGradient>
										<path
											fill="url(#SVGID_1_)"
											d="M332.9,150.6l0.9-55.2c0.1-6.8,6.2-18.7,13-17.6c0,0,30.3,4.3,47.9,26.8c18.9-4,36.7-11.3,52.8-21.4
	c-6.2,20.6-19.4,37.8-36.5,48.7c16.8-2.2,32.8-6.9,47.7-13.9c-11.1,17.7-25.3,33.2-41.5,45.6c0.2,3.8,0.3,7.6,0.3,11.4
	c0,116.4-83.6,250.6-236.5,250.6c-35.6,0-69.5-8.4-99.8-23.4l25.1-2.8c114.8-12.8,207.5-101,224-215.3
	C331.9,172.5,332.8,161.3,332.9,150.6z"
										></path>
										<path
											d="M180.8,433.5c-46.9,0-92.5-14.2-131.9-41c-3.1-2.1-4.3-6-3-9.4c1.3-3.5,4.8-5.6,8.5-5.1c6.2,0.8,12.5,1.2,18.8,1.2
	c29.6,0,57.9-8.4,82.8-24.5c-30.3-7.9-55.1-31.8-64.8-64c-0.8-2.7-0.2-5.6,1.7-7.7c1.9-2.1,4.7-3,7.5-2.5c0.9,0.2,1.8,0.3,2.7,0.5
	c-25.2-17.4-41.4-47.4-41.4-80.5c0,0,0-0.1,0-0.1l0-1.1c0-2.8,1.6-5.5,4.1-6.8c2.5-1.4,5.5-1.4,8,0.1c2.6,1.5,5.3,2.9,8.1,4.1
	c-12.5-16.7-19.5-37.6-19.5-59.5c0-16.9,4.2-33.6,12.3-48.1c1.3-2.4,3.7-3.9,6.4-4.1c2.7-0.2,5.3,1,7,3.1
	c38.7,50.3,94.9,82.1,155.5,88.1c-0.4-3.7-0.6-7.5-0.6-11.3c0-53,40.9-96.1,91.2-96.1c23.6,0,46.5,9.8,63.4,27
	c16.1-3.9,31.5-10.4,45.8-19.3c2.8-1.8,6.5-1.6,9.1,0.4c2.7,2,3.8,5.5,2.8,8.7c-3.5,11.8-9.2,22.6-16.5,32
	c5.7-1.9,11.2-4.1,16.7-6.7c3.2-1.5,7-0.7,9.4,1.9c2.4,2.7,2.7,6.6,0.8,9.6c-11,17.4-24.4,32.5-40.1,45.1c0.1,2.5,0.1,5,0.1,7.6
	c0,62.7-22.9,126.1-62.8,174c-21.7,26.1-47.5,46.6-76.8,60.9C253.9,425.6,218.6,433.5,180.8,433.5z M84.4,394.8
	c30.1,14.9,62.9,22.7,96.4,22.7c143.1,0,228.5-123.3,228.5-242.6c0-3.8-0.1-7.5-0.2-11c-0.1-2.6,1-5.1,3.1-6.7
	c8.7-6.6,16.6-14.1,23.8-22.3c-7.9,2.2-16,3.9-24.2,4.9c-3.7,0.5-7.3-1.7-8.5-5.2c-1.3-3.5,0.1-7.5,3.2-9.5
	c9.6-6.1,17.7-14.2,23.8-23.8c-11,4.9-22.4,8.6-34.1,11.1c-2.8,0.6-5.7-0.4-7.6-2.5c-14.4-16.2-33.8-25.1-54.7-25.1
	c-41.4,0-75.2,35.9-75.2,80.1c0,6.3,0.7,12.5,2,18.3c0.5,2.4-0.1,5-1.7,6.9c-1.6,1.9-4,2.9-6.5,2.8c-64.8-3.4-125.7-34.2-169-85
	c-3.4,9.3-5.2,19.2-5.2,29.2c0,26.9,12.6,51.9,33.6,66.8c2.9,2,4.1,5.7,2.9,9.1c-1.1,3.4-4.4,5.6-7.9,5.4
	c-9.7-0.4-19.4-2.4-28.5-5.9c4.7,32.8,28.3,59.9,59.5,66.5c3.6,0.8,6.2,3.9,6.3,7.5c0.1,3.7-2.2,7-5.8,8c-8.9,2.6-18.2,3.7-27.5,3.3
	c12.4,26,37.5,43.1,65.6,43.7c3.3,0.1,6.3,2.2,7.4,5.4c1.1,3.2,0.1,6.7-2.4,8.8C153.4,379.1,120,392.5,84.4,394.8z"
										></path>
										<g>
											<path
												fill="#00B7FF"
												class="primary-color"
												d="M19.5,495.7v-21.8h56.9v21.8H19.5z M154.3,495.7v-21.8H97.4v21.8H154.3z"
											></path>
											<path
												fill="#FFFFC7"
												class="secondary-color"
												d="M175.8,495.7v-21.8h244.6v21.8H175.8z"
											></path>
										</g>
										<path
											d="M297.9,36.2c-41.4,0-75.2,35.9-75.2,80.1c0,6.3,0.7,12.5,2,18.3c0.6,2.5-0.1,5.1-1.8,7.1c-1.5,1.7-3.7,2.7-6,2.7
	c-0.3,0-0.6,0-0.8,0c-46.5-4.9-92.9-42.4-112.7-91.1c-1.7-4.1,0.3-8.8,4.4-10.4c4.1-1.7,8.8,0.3,10.4,4.4
	c16.2,39.8,51.8,71.1,89.1,79.5c-0.3-3.4-0.5-6.9-0.5-10.4c0-53,40.9-96.1,91.2-96.1c4.4,0,8,3.6,8,8S302.3,36.2,297.9,36.2z
	 M476.2,401.4h-87.6c-4.4,0-8,3.6-8,8s3.6,8,8,8h87.6c4.4,0,8-3.6,8-8S480.6,401.4,476.2,401.4z M420.4,433.7H307.6
	c-4.4,0-8,3.6-8,8s3.6,8,8,8h112.8c4.4,0,8-3.6,8-8S424.8,433.7,420.4,433.7z M482.4,306.6h-15.8v-15.8c0-4.4-3.6-8-8-8s-8,3.6-8,8
	v15.8h-15.8c-4.4,0-8,3.6-8,8s3.6,8,8,8h15.8v15.8c0,4.4,3.6,8,8,8s8-3.6,8-8v-15.8h15.8c4.4,0,8-3.6,8-8S486.8,306.6,482.4,306.6z
	 M74.4,50.2c0,14.6-11.8,26.4-26.4,26.4S21.6,64.7,21.6,50.2S33.4,23.8,48,23.8S74.4,35.6,74.4,50.2z M58.4,50.2
	c0-5.7-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4S42.3,60.6,48,60.6S58.4,55.9,58.4,50.2z M43,330.6c0,5-4.1,9-9,9s-9-4.1-9-9
	s4.1-9,9-9S43,325.6,43,330.6z M73,330.6c0,5-4.1,9-9,9s-9-4.1-9-9s4.1-9,9-9S73,325.6,73,330.6z"
										></path>
									</svg>
								</a>
							</div>
							<!-- Facebook -->
							<div class="hvr-pop mx-2">
								<a
									:href="
										'https://www.facebook.com/sharer.php?u=' +
										blogUrl +
										'/' +
										post.slug
									"
									onClick="window.open(this.href,'facebook-share','width=580,height=296');return false;"
									link-class="facebook"
								>
									<svg
										id="Layer_1"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										width="30"
										height="30"
										x="0px"
										y="0px"
										viewBox="0 0 512 512"
										enable-background="new 0 0 512 512"
										xml:space="preserve"
									>
										<linearGradient
											id="SVGID_1_"
											gradientUnits="userSpaceOnUse"
											x1="304.9338"
											y1="439.7354"
											x2="304.9338"
											y2="94.1891"
											class="gradient-element"
										>
											<stop
												offset="0"
												class="primary-color-gradient"
												style="stop-color: #00b7ff;"
											></stop>
											<stop
												offset="1"
												class="secondary-color-gradient"
												style="stop-color: #ffffc7;"
											></stop>
										</linearGradient>
										<path
											fill="url(#SVGID_1_)"
											d="M287.9,212.9c-2.4,8.1-3.7,17.3-3.7,27.9v35.8h-31.8v42.5h31.8v127.4h-73.9h-33.3H168v-0.7
	c-25.3-4.2-44.6-26.2-44.6-52.7v-22.7h20.8c13.1,0,23.8-10.7,23.8-23.8l0,0C168,249.3,200.2,212.9,287.9,212.9z M455.9,84.5h-62.7
	v128c-1,0-1.9-0.1-2.9-0.1c-6.1-0.3-13.8-0.5-21.2-0.5c-28.2,0-42.5,13.3-42.5,39.6v25.2h61.8l-7.1,42.5h-54.7v127.4h128
	c17.6,0,31.8-14.3,31.8-31.8V237.3v-24.4V115C486.4,98.2,472.7,84.5,455.9,84.5z"
										></path>
										<path
											d="M454.6,454.4h-125c-4.4,0-8-3.6-8-8V319.1c0-4.4,3.6-8,8-8h50.8l4.6-29.5h-55.4c-4.4,0-8-3.6-8-8v-25.2
	c0-31.5,18.4-49.6,50.5-49.6c4.9,0,10.9,0.1,16.2,0.3v-27.4c-7.2-0.6-16.6-1.2-23.6-1.2c-24.2,0-42.7,5.6-54.7,16.6
	c-11.8,10.8-17.8,27.2-17.8,48.7v37.8c0,4.4-3.6,8-8,8h-26.8v29.5h26.8c4.4,0,8,3.6,8,8v127.4c0,4.4-3.6,8-8,8H157.4
	c-22,0-39.8-17.9-39.8-39.8V174.2c0-4.4,3.6-8,8-8s8,3.6,8,8v240.3c0,13.1,10.7,23.8,23.8,23.8h118.7V327.1h-26.8c-4.4,0-8-3.6-8-8
	v-45.5c0-4.4,3.6-8,8-8h26.8v-29.8c0-52.4,31.4-81.3,88.5-81.3c10.3,0,25.2,1.1,32.5,1.9c4.1,0.4,7.1,3.9,7.1,8v43
	c0,2.2-0.9,4.3-2.5,5.8c-1.6,1.5-3.7,2.3-5.9,2.2c-5.7-0.3-16.4-0.5-23.9-0.5c-23.2,0-34.5,11-34.5,33.6v17.2h56.8
	c2.3,0,4.6,1,6.1,2.8c1.5,1.8,2.2,4.1,1.8,6.4l-7.1,45.5c-0.6,3.9-4,6.8-7.9,6.8h-49.7v111.4h117c13.1,0,23.8-10.7,23.8-23.8V117.4
	c0-13.1-10.7-23.8-23.8-23.8H157.4c-13.1,0-23.8,10.7-23.8,23.8V142c0,4.4-3.6,8-8,8s-8-3.6-8-8v-24.5c0-22,17.9-39.8,39.8-39.8
	h297.2c22,0,39.8,17.9,39.8,39.8v297.2C494.4,436.5,476.5,454.4,454.6,454.4z"
										></path>
										<path
											d="M23.6,102.4c5,0,9-4.1,9-9s-4.1-9-9-9s-9,4.1-9,9S18.6,102.4,23.6,102.4z M197.7,484.1c0,4.4-3.6,8-8,8h-40.9
	c-4.4,0-8-3.6-8-8s3.6-8,8-8h40.9C194.1,476.1,197.7,479.7,197.7,484.1z M506.3,484.1c0,4.4-3.6,8-8,8H219.7c-4.4,0-8-3.6-8-8
	s3.6-8,8-8h278.6C502.7,476.1,506.3,479.7,506.3,484.1z M199.2,174.2c0,4.4-3.6,8-8,8h-87.6c-4.4,0-8-3.6-8-8s3.6-8,8-8h87.6
	C195.6,166.2,199.2,169.8,199.2,174.2z M135.4,150H22.6c-4.4,0-8-3.6-8-8s3.6-8,8-8h112.8c4.4,0,8,3.6,8,8S139.8,150,135.4,150z
	 M53.6,102.4c5,0,9-4.1,9-9s-4.1-9-9-9s-9,4.1-9,9S48.6,102.4,53.6,102.4z M83.6,102.4c5,0,9-4.1,9-9s-4.1-9-9-9s-9,4.1-9,9
	S78.6,102.4,83.6,102.4z M79.9,45.8c0-4.4,3.6-8,8-8h137.6c4.4,0,8,3.6,8,8s-3.6,8-8,8H87.9C83.4,53.8,79.9,50.2,79.9,45.8z
	 M86.4,446.4c0,4.4-3.6,8-8,8H62.6v15.8c0,4.4-3.6,8-8,8s-8-3.6-8-8v-15.8H30.8c-4.4,0-8-3.6-8-8s3.6-8,8-8h15.8v-15.8
	c0-4.4,3.6-8,8-8s8,3.6,8,8v15.8h15.8C82.8,438.4,86.4,442,86.4,446.4z"
										></path>
										<path
											fill="#FFFFC7"
											class="secondary-color"
											d="M74.4,249.8H30.8v-43.6h43.6V249.8z M74.4,276.3H30.8v43.6h43.6V276.3z M74.4,346.3H30.8v43.6h43.6V346.3z"
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
		<div class="row">
			<div class="md-11 lg-10 mx-auto">
				<div class="pagination">
					<div class="prev" :class="{disabled: !pagination.prev}">
						<nuxt-link
							:to="prevLink"
							class="pagination-link"
							title="Newer posts"
							>Newer posts</nuxt-link
						>
					</div>
					<div class="next" :class="{disabled: !pagination.next}">
						<nuxt-link
							:to="nextLink"
							class="pagination-link"
							title="Older posts"
							>Older posts</nuxt-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

// import Dropdown from '~/components/Dropdown.vue';
// import DropdownContent from '~/components/DropdownContent.vue';
// import DropdownItem from '~/components/DropdownItem.vue';
import ReadingTime from '~/components/ReadingTime.vue';

dayjs.extend(advancedFormat);

export default {
	name: 'Posts',

	components: {
		// dropdown: Dropdown,
		// 'dropdown-content': DropdownContent,
		// 'dropdown-item': DropdownItem,
		'reading-time': ReadingTime
	},

	filters: {
		dayjs(date) {
			return dayjs(date).format('MMMM Do, YYYY');
		}
	},

	props: {
		posts: {
			type: Array,
			required: true
		},

		pagination: {
			type: Object,
			required: true
		},

		baseUrl: {
			type: String,
			required: false,
			default: '/'
		}
	},

	data() {
		return {
			blogUrl: process.env.blogUrl
		};
	},

	computed: {
		prevLink() {
			if (this.pagination.prev === 1) {
				return this.baseUrl;
			} else {
				return this.baseUrl + 'page/' + this.pagination.prev;
			}
		},

		nextLink() {
			return this.baseUrl + 'page/' + this.pagination.next;
		}
	}
};
</script>

<style lang="scss">
.post-image img {
	max-width: 75% !important;
	height: auto !important;
}
</style>
