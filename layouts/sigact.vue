<template>
	<div>
		<nuxt />
		<SigNav />
		<SigBasic />
		<SigInfo />
	</div>
</template>

<script>
import SigNav from '../components/SigAct/SigNav';
import SigBasic from '../components/SigAct/SigBasic';
import SigInfo from '../components/SigAct/SigInfo';

export default {
	name: 'SigAct',
	components: {
		SigNav,
		SigBasic,
		SigInfo
	}
};
</script>

<style lang="scss" scoped></style>
