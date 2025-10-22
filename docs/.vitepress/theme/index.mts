// docs/.vitepress/theme/index.mts
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import confetti from "./components/confetti.vue"
// import MouseClick from "./components/MouseClick.vue"
// import MouseFollower from "./components/MouseFollower.vue"
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import MyLayout from './MyLayout.vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { inBrowser } from 'vitepress';
import { watch } from 'vue';
import { useRouter } from 'vitepress';
// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

export default {
	extends: DefaultTheme,
	Layout: MyLayout,
	enhanceApp({ app, router }) {
		// 注册全局组件
		app.component('Linkcard', Linkcard)
		app.component('HomeUnderline', HomeUnderline)
		app.component('confetti', confetti)
		// app.component('MouseClick', MouseClick)
		// app.component('MouseFollower', MouseFollower)

		// 彩虹背景动画样式
		if (typeof window !== 'undefined') {
			watch(
				() => router.route.data.relativePath,
				() => updateHomePageStyle(location.pathname === '/'),
				{ immediate: true },
			)
		}


		// 进度条配置
		if (inBrowser) {
			NProgress.configure({ showSpinner: false })
			router.onBeforeRouteChange = () => {
				NProgress.start() // 开始进度条
			}
			router.onAfterRouteChanged = () => {
				NProgress.done() // 停止进度条
			}
		}

		// // giscus配置（如果需要的话）
		// const { frontmatter } = useData();
		// const route = useRoute();
		// giscusTalk({
		//     repo: 'zym2013/amldocs', //仓库
		//     repoId: 'R_kgDOQGSaEg', //仓库ID
		//     category: 'General', // 讨论分类
		//     categoryId: 'DIC_kwDOQGSaEs4Cw47D', //讨论分类ID
		//     mapping: 'pathname',
		//     inputPosition: 'top',
		//     lang: 'zh-CN',
		// },
		//     {
		//         frontmatter, route
		//     },
		//     //默认值为true，表示已启用，此参数可以忽略；
		//     //如果为false，则表示未启用
		//     //您可以使用"comment:true"序言在页面上单独启用它
		//     true
		// );
	},
}
// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
	if (value) {
		if (homePageStyle) return

		homePageStyle = document.createElement('style')
		homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
		document.body.appendChild(homePageStyle)
	} else {
		if (!homePageStyle) return

		homePageStyle.remove()
		homePageStyle = undefined
	}
}