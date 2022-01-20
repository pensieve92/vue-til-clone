<template>
	<div>
		<!--		결과 -->
		<!--    기본 `to="/main"` -->
		<!--    Named Routes`:to="{ name: 'post', params: {postId}}"`-->
		<!--		:to 옵션 중에 `path`를 사용하면 매핑이 될 줄 알았는데, 그게 아니였음..-->
		<!--		route 기본경로인 path 옵션으로 보내면 안되고 :to 를 사용해서 객체형식으로 -->
		<!--    router를 요청할 경우에는 name 속성을 사용해야한다.-->
		<!--    -->
		<!--    path를 사용하게 되면 params가 매핑되는게 아니라 String으로 인식된다.-->

		<!--		watch > $route() => {}할 경우-->
		<!--    name 속성을 지정해서 보내주면 $route 제대로 바라보고 있음-->
		<!--    path 속성을 지정해서 보내면 $route에서 제대로 Listen하지 못함?? -->

		<!--    결과-->
		<!--		Listen은 되는 것 같은데 왜 처음에 할때는 안됬었지??-->
		<!--		route 속성(path, params, 등등)이 변경될때만 아래 로직을 타게 되는데 route-->
		<!--		변경이 없는 상태에서도 될 줄 착각해서 Listen이 안된다고 생각한것 같음..-->

		<!--    정리-->
		<!--		path는 params와 query 변수를 같이 포함하는 속성이라 params: {postId: 123},-->
		<!--		query: {userId: 'hello'} 이런식의 객체를 전달하는 :to 에서는 name속성만을-->
		<!--		사용해야 함-->

		<!--		<router-link :to="{ name: 'post', params: { postId: 123 } }">-->
		<!--			Named Routes /main-->
		<!--		</router-link>-->
		<!--		||-->
		<!--		<router-link :to="{ name: 'postList', params: { postId: 123 } }">-->
		<!--			Named Routes /main, name: postList-->
		<!--		</router-link>-->
		<!--		||<router-link :to="{ name: 'postListItem', params: { postId: 123 } }">-->
		<!--			Named Routes /main, name: postList-->
		<!--		</router-link>-->
		||
		<router-link :to="{ path: '/main/123' }"> /main/:postId </router-link>
		||
		<router-link :to="{ path: '/main/posts/:postId', params: { postId: 123 } }">
			/main/posts/:postId
		</router-link>
		||
		<router-link :to="{ path: '/main/posts', params: { postId: 123 } }">
			/main/posts
		</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'MainPage',
	data() {
		return {
			postId: '',
		};
	},
	// watch: {
	// 	$route(newValue, oldValue) {
	// 		console.log(this.$route.params);
	// 		console.log(newValue);
	// 		console.log(oldValue);
	// 	},
	// },
	components: {},
};
</script>

<style scoped></style>
