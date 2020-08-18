<template>
	<div>
		<div class="h-40 overflow-y-scroll">
			<ul class="list-none">
				<li>
					<span class="text-xs font-bold">{{
						'2020-08-18 14:56:00' | dayjs
					}}</span>
					<p class="text-xs">
						<n-link to="/contact" class="underline">Contact</n-link> page is
						live! :)
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{
						'2020-08-07 14:50:00' | dayjs
					}}</span>
					<p class="text-xs">
						Added some things to
						<n-link to="/academia" class="underline">Academic</n-link> page and
						did a little rearranging. My biggest problem now is that there a lot
						I want to display there but little space for it all. So I'm trying
						to decide where to compromise. Regardless though that'll be a busy
						page. Also I'll get the contact page implemented next week so you
						all can start sending hate mail. 🤪
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{
						'2020-08-03 11:42:00' | dayjs
					}}</span>
					<p class="text-xs">
						Finally feel good with design, need to rework and spend time on the
						<n-link to="/academia" class="underline">Academic</n-link> page and
						of course the maps. Focus over coming weeks will be content content
						content and translations! And will probably spend some time spicing
						up this home page. 😎
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-07-22' | dayjs }}</span>
					<p class="text-xs">
						Yikes! Time flies when you take your eye off of it. I feel forever
						behind but at least feel good about how the design of the place is
						turning out.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-07-11' | dayjs }}</span>
					<p class="text-xs">
						Even though things are getting more comfy around here there is still
						lots to do on the development front. Which will be most of my focus
						next week. Really thankful to all who've checked out the site thus
						far and appreciate your patience throughout this development
						process.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-06-24' | dayjs }}</span>
					<p class="text-xs">
						Howdy! Took a breather last week and did some work behind the
						scenes. Trying to figure out best way to catelog a lot of events
						that isn't blog posts, more later.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-06-09' | dayjs }}</span>
					<p class="text-xs">
						The essentials for the design of the blog portion of the site have
						been finished. I'm sure as we post I'll notice more oddities I need
						to go in and fix but for now it all seems to look orderly.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-06-05' | dayjs }}</span>
					<p class="text-xs">
						Happy June! Things are starting to feel more lively around here.
						Check out the wire! Still lots to do though.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-05-28' | dayjs }}</span>
					<p class="text-xs">
						Added books and academia pages. Academia page still needs work but
						it's serves the purpose for now.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-05-20' | dayjs }}</span>
					<p class="text-xs">
						Added pages for Tamaulipas and Michoacán maps with basic map for
						now. Library pages up but empty.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-05-17' | dayjs }}</span>
					<p class="text-xs">
						Pushed the latest changes to production... testing over the next 24
						hours.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-04-15' | dayjs }}</span>
					<p class="text-xs line-through">
						More home page stuff, still far from satisfied but wire frame is
						pretty much done. Oh and still need a footer!
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-04-14' | dayjs }}</span>
					<p class="text-xs line-through">
						Alpha launch(!!!). Home page to production state, basic unexciting
						Tamaulipas map working in it's simplest form.
					</p>
				</li>
				<li>
					<span class="text-xs font-bold">{{ '2020-04-07' | dayjs }}</span>
					<p class="text-xs">
						First Test! Can you hear me?
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
	relativeTime: {
		future: 'in %s',
		past: '%s ago',
		s: 'a few seconds',
		m: 'a minute',
		mm: '%d minutes',
		h: 'an hour',
		hh: '%d hours',
		d: 'a day',
		dd: '%d days',
		M: 'a month',
		MM: '%d months',
		y: 'a year',
		yy: '%d years'
	}
});
export default {
	name: 'WebsiteUpdates',
	filters: {
		dayjs(date) {
			return dayjs().to(date);
		}
	}
};
</script>

<style lang="scss" scoped>
li {
	span {
		color: #f28177;
		font-family: 'Courier Prime', monospace;
	}
	p {
		font-family: 'IBM Plex Sans', sans-serif;
		line-height: 1.1;
		font-weight: 400;
	}
}
</style>
