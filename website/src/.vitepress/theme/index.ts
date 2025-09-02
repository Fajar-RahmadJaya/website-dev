// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'

// Import Stylus files
import './styles/base.styl'

// Import Global plugins
import 'element-plus/theme-chalk/dark/css-vars.css'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// Import icon components
import { IconBugReport, IconDownload } from '@iconify-prerendered/vue-mdi'

// Import vitepress-plugin-image-viewer
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { useRoute } from 'vitepress'

import Layout from './Layout.vue'

// Import tag manager
import tagManager from './plugin/tagManager'
import tagManagerFallBack from './plugin/tagManagerFallBack'

// Import adsense
import Adsense from './components/adsense.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueQueryPlugin)
    enhanceAppWithTabs(app)
    app.component('IconDownload', IconDownload)
    app.component('IconBugReport', IconBugReport)
    tagManager({ id: 'GTM-NM64V2DN' })
    tagManagerFallBack({ id: 'GTM-NM64V2DN' })
    app.component('Adsense', Adsense)
    app.component('vImageViewer', vImageViewer)
  },
  setup() {
    // Image Viewer
    const route = useRoute()
    imageViewer(route)
  },
  Layout,
}
