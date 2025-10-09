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
          text: 'List of Supported Keys',
          collapsed: true,
          items: [
            { text: 'Keyboard', link: '/docs/getting-started/key-list/keyboard' },
            { text: 'Mouse', link: '/docs/getting-started/key-list/mouse' },
            { text: 'Virtual Keyboard Code', link: '/docs/getting-started/key-list/vk-code' },
            { text: 'Scan Code', link: '/docs/getting-started/key-list/scan-code' },
            { text: 'ASCII', link: '/docs/getting-started/key-list/ascii' },
            { text: 'ANSI', link: '/docs/getting-started/key-list/ansi' },
            { text: 'Unicode', link: '/docs/getting-started/key-list/unicode' },
          ],
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
