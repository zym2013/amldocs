import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Amazing Luogu Docs",
	description: "Amazing Luogu 使用文档",
	base: '/amldocs/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/logo.webp',

		nav: [
			{ text: '获取插件', link: '/hello.md' },
			{ text: '使用说明', link: '/info.md' },
			{ text: '友链/推荐', link: '/link.md' }
		],

		sidebar: [
			{
				text: 'Amazing Luogu',
				items: [
					{ text: '获取插件', link: '/hello.md' },
					{ text: '使用说明', link: '/info.md' },
					{ text: '篡改猴下载', link: '/cuangaihou.md' },
					{ text: '友链/推荐', link: '/link.md' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/zym2013/amazing-luogu' }
		],

		search: {
			provider: 'local'
		},

		head: [
			['link', { rel: 'icon', href: '/logo.webp' }],
		],

		returnToTopLabel: '返回顶部',

		sidebarMenuLabel: '目录',

		outline: {
			level: [2, 4], // 显示2-4级标题
			// level: 'deep', // 显示2-6级标题
			label: '当前页大纲' // 文字显示
		},

		//编辑本页
		editLink: {
			pattern: 'https://github.com/zym2013/amldocs/edit/main/docs/:path', // 改成自己的仓库
			text: '在 GitHub 编辑本页'
		},

		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short', // 可选值full、long、medium、short
				timeStyle: 'medium' // 可选值full、long、medium、short
			},
		},

		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
	}
})
