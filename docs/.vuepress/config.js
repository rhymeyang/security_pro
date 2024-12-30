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
          text: 'Info',
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
            '/02/02.03SocialEngineering.md',
            '/02/02.04VulnerabilityConcerns.md',
            '/02/02.04VulnerabilityConcerns.md'
          ],
        },
        {
          text: '3.0 Physical',
          collapsable: false,
          children: [
            '/03/03.01PhysicalThreats.md',
            '/03/03.02DeviceAndNetworkProtection.md',
            '/03/03.03EnvironmentalControls.md'
          ],
        },
        {
          text: '4.0 Networks and Hosts Design and Diagnosis',
          collapsable: false,
          children: [
            '/04/04.01ManageableNetworkPlan.md',
            '/04/04.02WindowsSystemHardening.md',
            '/04/04.03FileServerSecurity.md',
            '/04/04.04LinuxHostSecurity.md'
          ],
        },
        {
          text: '5.0 Devices and Infrastructure',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '6.0 Identity, Access, and Account Management',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '7.0 Cryptography and PKI',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '8.0 Wireless Threats',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '9.0 Virtualization, Cloud Security, and Securing Mobile Devices',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '10.0 Security Assessments',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '11.0 Security Assessments',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '12.0 Incident Response, Forensics, and Recovery',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '13.0 Risk Management',
          collapsable: false,
          children: [

          ],
        },
        {
          text: '14.0 Governance and Compliance',
          collapsable: false,
          children: [

          ],
        },
        {
          text: 'A.0 Security Pro - Practice Exams',
          collapsable: false,
          children: [

          ],
        },
        {
          text: 'B.0 CompTIA Security+ SY0-601 - Practice Exams',
          collapsable: false,
          children: [

          ],
        },
        {
          text: 'Glossary',
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


