/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Puffer Docs",
  tagline: "Documentation for the Puffer Protocol",
  url: "https://pufferFinance.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pufferfinance",
  projectName: "doctest",
  themeConfig: {
    footer: {
      style: "dark",
      links: [
        {
          title: "Website",
          items: [
            {
              label: "Puffer",
              href: "https://www.puffer.fi/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            {
              label: "Twitter",
              href: "https://twitter.com/puffer_finance",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/PufferFinance",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    prism: {
      additionalLanguages: ["solidity"],
    },
    navbar: {
      title: "Puffer Docs",
      logo: {
        alt: "Puffer Logo",
        src: "img/Logo Mark.svg",
      },
      items: [
        {
          href: "https://www.puffer.fi/",
          label: "Puffer.fi",
          position: "right",
        },
        {
          href: "https://twitter.com/puffer_finance",
          label: "Twitter",
          position: "right",
        },
        {
          href: "https://github.com/PufferFinance",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/PufferFinance/website-docs",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local", "@rehype-katex"),
      { indexBlog: false, docsRouteBasePath: "/", indexPages: true },
    ],
  ],
};
