<template>
	<div>
		<div>LoginForm</div>
		<form @submit.prevent="loginSubmit">
			<div>
				<label for="username">username: </label>
				<input type="text" id="username" v-model="username" />
			</div>
			<div>
				<label for="password">password: </label>
				<input type="password" id="password" v-model="password" />
			</div>
			<button type="submit">로그인</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'LoginForm',
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		loginSubmit() {
			console.log(this.password);
			console.log(this.username);
		},
	},
};
</script>

<style scoped></style>
