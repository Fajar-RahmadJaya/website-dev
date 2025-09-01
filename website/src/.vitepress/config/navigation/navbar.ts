import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Get v{app_version}',
    activeMatch: '^/*?(download|changelogs)/*?$',
    items: [
      {
        text: 'Download',
        link: '/download/',
      },
      {
        text: 'Changelogs',
        link: '/changelogs/',
      },
    ],
  },
  {
    text: 'KeyTik Pro',
    link: '/pro-version/',
  },
  {
    text: 'Docs',
    link: '/docs/introduction/overview',
    activeMatch: '/docs/',
  },
]

export default nav
