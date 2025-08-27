import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'
import sidebar from './navigation/sidebar'

const themeConfig: DefaultTheme.Config = {
  logo: {
    src: '/img/logo-128px.png',
    width: 24,
    height: 24,
  },

  nav,
  sidebar,

  outline: [2, 3],

  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/Fajar-RahmadJaya/KeyTik',
      ariaLabel: 'Project GitHub',
    },
    {
      icon: 'x',
      link: 'https://x.com/Fajar_RahmadJ',
      ariaLabel: 'X Page',
    },
    // { icon: "instagram", link: "https://instagram.com/Fajar-RahmadJaya", ariaLabel: "Instagram Page" },
  ],

  footer: {
    message: `
      <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank"><strong>Open-source Apache Licensed</strong></a>
      <br>
      <a href="/policies/term-service/">Terms of Service</a>
      <span class="divider">|</span> <a href="/policies/privacy-policies/">Privacy policy</a>
      <span class="divider">|</span> <a href="/policies/user-agreement/">User Agreement</a>
      <span class="divider">|</span> <a href="/policies/about-me/">About Me</a>
      <span class="divider">|</span> <a href="/policies/contact/">Contact</a>
      <br><br>
    `,
    copyright: `Copyright © ${new Date().getFullYear()} Fajar Rahmad Jaya`,
  },

  editLink: {
    pattern: 'https://github.com/Fajar-RahmadJaya/website-dev/edit/main/website/src/:path',
    text: 'Help us improve this page',
  },

  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      forceLocale: true,
      dateStyle: 'long',
      timeStyle: 'short',
    },
  },

  search: {
    provider: 'algolia',
    options: {
      appId: 'IXX45N1P5C',
      apiKey: 'a7a819b0bd88bc7333c7f42d611ec04e',
      indexName: 'KeyTik',
    },
  },
}

export default themeConfig
