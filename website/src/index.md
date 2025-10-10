---
title: Home
layout: home

hero:
  name: KeyTik
  text: Powerful All-in-One Automation Tool
  tagline: Multi-Profile Key Mapper, Clicker, Macro, and More.
  image:
    alt: Sun and Moon Icon
    light: /home/sun2.webp
    dark: /home/moon.webp
  actions:
    - theme: brand
      text: Introduction
      link: /docs/introduction/overview
    - theme: alt
      text: Download
      link: /download/

customMetaTitle: KeyTik

features:
  - title: Multi Profile Automation
    details: Key remapper, auto clicker, screen clicker, file opener and more.
    icon: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="var(--vp-c-green-2)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
    link: /docs/getting-started/automation-tool
    linkText: Automation tool
  - title: Comprehensive Key Support
    details: ASCII, ANSI, Unicode, Scan Code, Virtual Keyboard Code and more.
    icon: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="var(--vp-c-indigo-2)" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/><path stroke="var(--vp-c-indigo-2)" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/><path stroke="var(--vp-c-indigo-2)" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/></svg>
    link: /docs/getting-started/key-list/keyboard
    linkText: List of Supported Key
  - title: Packed with Features
    details: Bind to Programs and Devices, Assign Shortcuts, Text Format, Hold Format and more.
    icon: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="var(--vp-c-yellow-2)" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/></svg>
    link: /docs/introduction/features
    linkText: Features
---

<script setup>
import CustomStats from "@theme/components/CustomStats.vue";
import DownloadCount from "@theme/components/DownloadCount.vue";
import Preview from "@theme/components/Preview.vue";
import StarCount from "@theme/components/StarCount.vue";
</script>

<CustomStats>
  <template #card1>
    <Preview :images="[
      '/preview/main dark.png',
      '/preview/main light.png',
      '/preview/default mode.png',
      '/preview/choosing key1.png',
      '/preview/choosing key2.png',
      '/preview/key format.gif',
      '/preview/select device.png',
      '/preview/select program.png',
      '/preview/text mode.png',
    ]" />
  </template>
  <template #card2>
    <DownloadCount />
  </template>
  <template #card3>
    <StarCount />
  </template>
</CustomStats>
