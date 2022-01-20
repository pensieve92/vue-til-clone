<template>
	<div>PostListItem</div>
</template>

<script>
export default {
	name: 'PostListItem',
	watch: {
		$route(newValue, oldValue) {
			console.log('postLIstitem');
			console.log(this.$route.params);
			console.log(newValue);
			console.log(oldValue);
		},
	},
};
</script>

<style scoped></style>
