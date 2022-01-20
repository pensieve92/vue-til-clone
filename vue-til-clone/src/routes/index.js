import Vue from 'vue';
import VueRouter from 'vue-router';
import PostListItem from '@/components/posts/PostListItem';
// import PostList from '@/components/posts/PostList.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
			children: [
				// 정리
				// children의 path에는 첫 `/`는 생략한다.
				// `:postId`

				// path가 '/', '', 일경우 위에 정의된 곳에 매핑된다.
				// {
				// 	path: '',
				// 	name: 'post',
				// 	component: PostListItem,
				// },
				// {
				// 	path: 'postList',
				// 	name: 'postList',
				// 	component: PostListItem,
				// },
				// {
				// 	path: '', //  http://localhost:8080/main
				// 	component: PostList,
				// },
				{
					path: ':postId', // http://localhost:8080/main/:postId // :postId를 String으로 전달된다.param으로 넘어가지 않음
					component: PostListItem,
				},
				{
					path: 'posts/:postId', //http://localhost:8080/main/posts/:postId
					component: PostListItem,
				},
				// {
				// 	path: 'posts', // http://localhost:8080/main/posts
				// 	name: 'postListItem',
				// 	component: PostListItem,
				// },
				// {
				// 	path: 'posts/:postId',
				// 	component: PostList,
				// },
			],
		},
	],
});
