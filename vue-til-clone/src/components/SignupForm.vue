<template>
	<div>
		<div>
			<form @submit.prevent="signupSubmit">
				<div>
					<label for="username">username: </label>
					<input type="text" id="username" v-model="username" />
				</div>
				<div>
					<label for="password">password: </label>
					<input type="text" id="password" v-model="password" />
				</div>
				<button type="submit">회원가입</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SignupForm',
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		signupSubmit() {
			console.log('signupSubmit');
		},
	},
};
</script>

<style scoped></style>
