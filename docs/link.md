<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.luogu.com.cn/upload/usericon/1416603.png',
    name: 'Better Luogu',
    title: 'by volatile',
    links: [
      { icon: 'vitepress', link: 'https://blg.volatiles.dpdns.org/' },
      { icon: 'luogu', link: 'https://www.luogu.me/article/w31r5kzz' }
    ]
  },
  {
    avatar: 'https://cdn.luogu.com.cn/upload/usericon/1393230.png',
    name: 'Better VJudge',
    title: 'by zhangyimin12345',
    links: [
      { icon: 'github', link: 'https://github.com/zhangyimin12345/better-vjudge' },
      { icon: 'vitepress', link: 'https://better-vjudge.github.io' },
      { icon: 'luogu', link: 'https://www.luogu.me/article/49wuyxk4' },
    ]
  },
]
</script>

# 友链

当然是一些插件啦！

<VPTeamMembers size="small" :members="members" />