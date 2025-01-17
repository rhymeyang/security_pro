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
            '/05/05.01.SecurityAppliances.md',
            '/05/05.02.DemilitarizedZones.md',
            '/05/05.03.Firewalls.md',
            '/05/05.04.NetworkAddressTranslation.md',
            '/05/05.05.VirtualPrivateNetworks.md',
            '/05/05.06.WebThreatProtection.md',
            '/05/05.07.NetworkAccessControl.md',
            '/05/05.08.NetworkThreats.md',
            '/05/05.09.NetworkDeviceVulnerabilities.md',
            '/05/05.10.Network Applications.md',
            '/05/05.11.SwitchSecurityAndAttacks.md',
            '/05/05.12.UsingVLANs.md',
            '/05/05.13.RouterSecurity.md'
          ],
        },
        {
          text: '6.0 Identity, Access, and Account Management',
          collapsable: false,
          children: [
            '/06/06.01.AccessControlModels.md',
            '/06/06.02.Authentication.md',
            '/06/06.03.Authorization.md',
            '/06/06.04.WindowsUserManagement.md',
            '/06/06.05.ActiveDirectoryOverview.md',
            '/06/06.06.HardeningAuthentication.md',
            '/06/06.07.LinuxUsers.md',
            '/06/06.08.LinuxGroups.md',
            '/06/06.09.RemoteAccess.md',
            '/06/06.10.NetworkAuthentication.md'
          ],
        },
        {
          text: '7.0 Cryptography and PKI',
          collapsable: false,
          children: [
            '/07/07.01.Cryptography.md',
            '/07/07.02.CryptographyImplementations.md',
            '/07/07.03.Hashing.md',
            '/07/07.04.FileEncryption.md',
            '/07/07.05.PublicKeyInfrastructure.md'
          ],
        },
        {
          text: '8.0 Wireless Threats',
          collapsable: false,
          children: [
            '/08/08.01.WirelessOverview.md',
            '/08/08.02.WirelessAttacks.md',
            '/08/08.03.WirelessDefenses.md',
          ],
        },
        {
          text: '9.0 Virtualization, Cloud Security, and Securing Mobile Devices',
          collapsable: false,
          children: [
            '/09/09.01.HostVirtualization.md',
            '/09/09.02.VirtualNetworking.md',
            '/09/09.03.SoftwareDefinedNetworking.md',
            '/09/09.04.CloudServices.md',
            '/09/09.05.CloudSecurity.md',
            '/09/09.06.MobileDevices.md',
            '/09/09.07.MobileDeviceManagement.md',
            '/09/09.08.BYODSecurity.md',
            '/09/09.09.EmbeddedAndSpecializedSystems.md'
          ],
        },
        {
          text: '10.0 Security Assessments',
          collapsable: false,
          children: [
            '/10/10.01.DataTransmissionSecurity.md',
            '/10/10.02.DataLossPrevention.md',
            '/10/10.03.WebApplicationAttacks.md',
            '/10/10.04.ApplicationDevelopmentAndSecurity.md'
          ],
        },
        {
          text: '11.0 Security Assessments',
          collapsable: false,
          children: [
            '/11/11.01.PenetrationTesting.md',
            '/11/11.02.MonitoringAndReconnaissance.md',
            '/11/11.03.IntrusionDetection.md',
            '/11/11.04.SecurityAssessmentTechniques.md',
            '/11/11.05.ProtocolAnalyzers.md',
            '/11/11.06.AnalyzingNetworkAttacks.md',
            '/11/11.07.PasswordAttacks.md'
          ],
        },
        {
          text: '12.0 Incident Response, Forensics, and Recovery',
          collapsable: false,
          children: [
            '/12/12.01.IncidentResponse.md',
            '/12/12.02.MitigationOfIncident.md',
            '/12/12.03.LogManagement.md',
            '/12/12.04.WindowsLogging.md',
            '/12/12.05.DigitalForensics.md',
            '/12/12.06.FilePacketManipulation.md',
            '/12/12.07.Redundancy.md',
            '/12/12.08.BackupRestore.md'
          ],
        },
        {
          text: '13.0 Risk Management',
          collapsable: false,
          children: [
            '/13/13.01.OrganizationalSecurityPolicies.md',
            '/13/13.02.RiskManagement.md',
            '/13/13.03.Email.md'
          ],
        },
        {
          text: '14.0 Governance and Compliance',
          collapsable: false,
          children: [
            '/14/14.01.Audits.md',
            '/14/14.02.ControlsAFrameworks.md',
            '/14/14.03.SensitiveDataPrivacy.md'
          ],
        },
        {
          text: 'A.0 Security Pro - Practice Exams',
          collapsable: false,
          children: [
            '/A0/A1.md',
            '/A0/A2.md'
          ],
        },
        {
          text: 'B.0 CompTIA Security+ SY0-601 - Practice Exams',
          collapsable: false,
          children: [
            '/B0/B1.md',
            '/B0/B2.md',
            '/B0/B3.md'
          ],
        },
        {
          text: 'Glossary',
          collapsable: false,
          children: [
            '/Glossary/G.md'
          ],
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Security Pro",
  description: 'Notes',
})


