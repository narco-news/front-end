<template>
	<div>
		<Landing />
		<LatestArticleCards />
		<MailBar />
		<InfoPanel />
		<Popup />
	</div>
</template>

<script>
import Popup from '~/components/Popup.vue';
import Landing from '~/components/Landing.vue';
import LatestArticleCards from '~/components/LatestArticleCards';
import InfoPanel from '~/components/InfoPanel';
import MailBar from '~/components/MailBar';

export default {
	layout: 'default',
	components: {
		Landing,
		LatestArticleCards,
		InfoPanel,
		MailBar,
		Popup
	}
};
</script>

<style lang="sass"></style>
