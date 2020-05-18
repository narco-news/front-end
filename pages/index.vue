<template>
	<div>
		<!-- Top sticky notif -->
		<Popup />
		<!-- Interdictions FY19 -->
		<div>
			<FYNine />
		</div>
		<!-- RSS Marquee -->
		<div class="h-12 mb-2">
			<Marquee />
		</div>
		<!-- Landing Header -->
		<Cats />

		<!-- Landing Image -->
		<div class="mx-4">
			<Landing />
		</div>
		<!-- Content -->
		<div class="mb-10 mx-4">
			<div
				style="background-color: #eef3ed;"
				class="h-auto shadow-md pt-2 pb-10"
			>
				<div style="color: #3a656a; font-weight: 500;" class="px-4 my-4">
					<p class="text-2xl">
						Hello! <span class="text-gray-400">¡Hola!</span>
					</p>
					<p class="text-xl">
						Why we are here?
						<span class="text-gray-400">¿Por qué estamos aquí?</span>
					</p>
					<div class="text-md px-4 pt-2">
						We're currently in an era of information and conversation wealth.
						That paired with confusion and disarray throws us into a realm we've
						dubbed the
						<span style="color: #ff5e70; font-weight: 600;"
							>information clusterfuck</span
						>. Merriam-Websters<a
							src="https://www.merriam-webster.com/dictionary/clusterfuck"
							class="text-lg text-blue-500"
							>¹</a
						>
						defines clusterfuck as a "complex and utterly disordered and
						mismanaged situation." While Oxford<a
							src="https://www.lexico.com/en/definition/clusterfuck"
							class="text-lg text-blue-500"
							>²</a
						>
						states it as a "disastrously mishandled situation or undertaking."
						These definitions provide us a valuable reminders, the situation is
						complex and it has disastrous consequences.

						<div class="bg-white shadow-md my-4 mx-2 p-4 text-xs rounded">
							An analysis<a
								src="https://mexicobusiness.news/policyandeconomy/news/mexico-ranks-second-fake-news-generation"
								class="text-xs text-blue-500"
								>³</a
							>
							conducted by Luis Ángel Hurtado, Professor and Researcher at
							UNAM’s School of Political and Social Sciences concluded
							<span class="italic"
								>the misinformation epidemic reaches important figures in our
								country and renders us (Mexico) the second-largest generator of
								fake news after Turkey."</span
							>
						</div>
						We'd be foolish, as would you, to think that any of it will become
						clearer as time goes on. We'd also be foolish to proclaim that we
						knew of a cure or even that one existed. But we have some ideas and
						have established this digital compendium to share them. In addition
						gather the ideas of any and all.
						<div
							class="bg-white shadow-md my-4 mx-2 p-4 text-xs rounded h-auto overflow-hidden"
						>
							<span class="float-left italic">
								"Drug trafficking, for example, is not the behavior of a daring,
								secretive, and clever operator; it is a complex international
								business system, deeply touching the lives of peasant farmers,
								political leaders in the nation's capital, or the highly
								competent business men and women who make the system go, and
								reap enormous profits from it. Therefore, in order for us to
								understand them, to perceive their broader meaning, they must be
								studied as systematic behavior, in the full context of their
								economic, political, and cultural aspects.""
							</span>

							<div
								style="color: #ff5e70; font-weight: 600; font-size: 0.5rem;"
								class="w-auto float-right mt-2"
							>
								Martin, J. M., and A. T. Romano.
								<span class="italic"
									>Multinational crime: Terrorism, espionage, drug and arms
									trafficking</span
								>. SAGE Publications, 1992.
							</div>
						</div>

						Our focused is on organized crime and more specifically drug
						trafficking. Given the plethora of information and it's convergence
						with the digital world, our quest becomes aggregating into a central
						place the chaos. With hope of untangling and parsing it all to
						provide insight.
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
					<div class="grid-cols-1 md:col-span-2">
						<HomeWire />
					</div>
					<div class="grid-cols-1 md:col-span-1">
						<div>
							<div class="my-2">
								<Information />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Popup from '~/components/Popup.vue';
import FYNine from '~/components/FYNine.vue';
import Landing from '~/components/Landing.vue';
import Information from '~/components/Information.vue';
import HomeWire from '~/components/HomeWire.vue';
import Marquee from '~/components/Marquee.vue';
import Cats from '~/components/Cats.vue';

export default {
	layout: 'default',
	components: {
		Popup,
		FYNine,
		Landing,
		Information,
		HomeWire,
		Marquee,
		Cats
	}
};
</script>

<style lang="sass"></style>
