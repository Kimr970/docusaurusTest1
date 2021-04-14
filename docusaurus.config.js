/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Faction Documentation Engine Site',
  tagline: 'Blogs | Customer Information | Other Content',
//  url: 'https://my-website.com',
    url: 'https://github.com/Kimr970',
  baseUrl: '/docusaurusTest1.git/',
//  baseUrl: '/project1/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  //organizationName: 'factioninc/Kimr970', // Usually your GitHub org/user name.
  organizationName: 'Kimr970', // Usually your GitHub org/user name.
  projectName: 'docusaurusTest1', // Usually your repo name.
  themeConfig: {
    colorMode: {
        disableSwitch: false,
    },
    
    algolia: {
        apiKey: "0f0dad529646d86477765db0afc10bc7",
        indexName: "factiondocusaurus",
        algoliaOptions: {},
    },
    navbar: {
      title: 'Faction Doc Engine',
      logo: {
        alt: 'My Site Logo',
        src: 'img/factionlogo.jpeg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{
         //  type: 'search',
        //},
         // {
          // to: 'search', label: 'Search', position: 'right'
         // },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Kimr970/docusaurusTest1/blog',
           // label: 'GitHub',
           // position: 'right',
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
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Kimr970/docusaurusTest1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
           editUrl:
            'https://github.com/Kimr970/docusaurusTest1.git/',
            //'https://github.com/Kimr970/docusaurusTest1/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          //  'https://github.com/Kimr970/docusaurusTest1.git/',
              '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
