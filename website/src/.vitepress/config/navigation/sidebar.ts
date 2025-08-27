import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
  '/pro-version/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        },
        {
          text: 'Pro Version',
          link: '/pro-version/',
        },
      ],
    },
    {
      text: 'Introduction',
      items: [
        {
          text: 'Overview',
          link: '/docs/introduction/overview',
        },
        {
          text: 'Safety',
          link: '/docs/introduction/safety',
        },
        {
          text: 'Feature',
          link: '/docs/introduction/features',
        },
        {
          text: 'Use Case Example',
          link: '/docs/introduction/use-case',
        },
      ],
    },
    {
      text: 'Getting Started',
      items: [
        {
          text: 'Installation',
          link: '/docs/getting-started/installation',
        },
        {
          text: 'Supported Key List',
          link: '/docs/getting-started/supported-key-list',
        },
        {
          text: 'Automation Tool',
          link: '/docs/getting-started/automation-tool',
        },
        {
          text: 'KeyTik Mechanism',
          link: '/docs/getting-started/mechanism',
        },
        {
          text: 'Community',
          link: '/docs/getting-started/community',
        },
      ],
    },
  ]
}

export default sidebar
