import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gaia UI',
  tagline: 'Ready-to-use UI components tailored for professional use, powered by anime-inspired aesthetics.',
  favicon: 'https://be.navatech.me/assets/gaia.webp',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gaia.navatech.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  organizationName: 'navatech',
  projectName: 'gaia-ui',

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Gaia UI',
      logo: {
        alt: 'Gaia UI Logo',
        src: 'https://be.navatech.me/assets/gaia.webp',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.npmjs.com/package/@navatech/gaia-ui',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://navatech.me',
          label: 'Navatech',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Gaia UI Mascot Logo',
        src: 'https://be.navatech.me/assets/gaia.webp',
        href: '/',
        width: 48,
        height: 48,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quickstart & Installation',
              to: '/docs/basicConfig/installation',
            },
            {
              label: 'Zenith Components',
              to: '/docs/basicConfig/installation',
            },
            {
              label: 'Changelog & Releases',
              href: 'https://www.npmjs.com/package/@navatech/gaia-ui',
            },
          ],
        },
        {
          title: 'Ecosystem & Company',
          items: [
            {
              label: 'Navatech Official 🌐',
              href: 'https://navatech.me',
            },
            {
              label: 'Gaia UI Portal',
              href: 'https://gaia.navatech.me',
            },
            {
              label: 'Creator Portfolio 👨‍💻',
              href: 'https://sinamokevin.navatech.me',
            },
          ],
        },
        {
          title: 'Community & Resources',
          items: [
            {
              label: 'Official Blog',
              to: '/blog',
            },
            {
              label: 'NPM Package Registry',
              href: 'https://www.npmjs.com/package/@navatech/gaia-ui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Navatech. Engineered with 🌸 & ❤️ for anime & modern web developers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
