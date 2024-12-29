import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/security_pro/',
  theme: defaultTheme({
    logo: '/images/leaf.svg',
    contributors: false,
    navbar: [
      {
        text: 'Vivian',
        link: '/../vivian/',
      },
      {
        text: 'Security Pro',
        link: '/../security_pro/',
      },
      {
        text: 'Recipe',
        link: '/../recipe/',
      },
      {
        text: 'Tools',
        link: '/../tools/',
      },
      {
        text: 'English',
        link: '/../english-starter/',
      },
      {
        text: 'Semester 3',
        link: '/../Se/',
      }
    ],

    sidebar: {
      '/': [
        {
          text: '基础信息',
          collapsable: false,
          children: [
            '/',
          ],
        },
        {
          text: '1.0 Introduction',
          collapsable: false,
          children: [
            '/01/01.01SecurityOverview.md',
            '/01/01.02DefensePlanning.md',
            '/01/01.03UsingTheSimulator.md'
          ]
        },
        {
          text: '2.0 Threats, Attacks, and Vulnerabilities',
          collapsable: false,
          children: [
            '/02/02.01UnderstandingAttacks',
            '/02/02.02Malware.md',
            '/02/02.03SocialEngineering.md'
          ],
        },
        {
          text: '3.0 Physical',
          collapsable: false,
          children: [

          ],
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Security Pro",
  description: 'Notes',
})


