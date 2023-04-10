// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'harbor-master',
  tagline: 'Easily add a SASS-based, shared style library to your repository',
  url: 'https://nxfullstack.github.io/',
  baseUrl: '/harbor-master/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '@nx-fullstack',
  projectName: 'harbor-master',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nxfullstack/harbor-master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'harbor-master',
          src: 'img/icon-512.png',
        },
        items: [
          {
            to: 'docs/installation',
            activeBasePath: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/nxfullstack/harbor-master',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/harbor-master',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wgdaniel3',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nxfullstack/harbor-master',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nx-fullstack. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
