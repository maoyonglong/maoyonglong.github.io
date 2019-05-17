module.exports = {
    head: [
        [
            'link', { rel: 'icon', href: '/assets/img/avatar.jpg' }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Yule Mao',
            description: 'Yule Mao\'s homepage'
        }
    },
    theme: 'meteorlxy',
    themeConfig: {
        personalInfo: {
            nickname: 'Yule Mao',
            description: 'give life some code',
            email: 'myl970421@gmail.com',
            location: 'Dongguan, China',
            avatar: '/assets/img/avatar.jpg',
            sns: {
                github: {
                    account: 'maoyonglong',
                    link: 'https://github.com/maoyonglong'
                },
                weibo: {
                    account: '紫色的辣椒人',
                    link: 'https://weibo.com/u/6520442763/home'
                }
            }
        },
        headerBackground: {
            useGeo: true
        },
        lastUpdated: true,
        nav: [
            {
                text: 'Home', link: '/', exact: true
            },
            {
                text: 'Posts', link: '/posts', exact: true
            }
        ],
        comments: {
            platform: 'github',
            owner: 'maoyonglong',
            repo: 'maoyonglong.github.io',
            clientId: '561363b836d4beaf29c6',
            clientSecret: 'b1f4e6b8c84d8d09ab65b2777b3dd83f14ff3644',
            autoCreateIssue: process.env.NODE_ENV !== 'development'
        },
    },
    markdown: {
        toc: {
            includeLevel: [2, 3, 4]
        }
    }
}