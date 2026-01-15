/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require("remark-math").default;
const katex = require("rehype-katex").default;

module.exports = {
  title: "Puffer Finance Docs",
  tagline: "Documentation for the Puffer products",
  url: "https://docs.puffer.fi",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pufferfinance",
  projectName: "doctest",
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
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
            {
              label: "Discord",
              href: "https://discord.gg/pufferfi",
            },
            {
              label: "X",
              href: "https://x.com/puffer_finance",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PufferFinance",
            },
          ],
        },
      ],
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
          href: "https://x.com/puffer_finance",
          label: "X",
          position: "right",
        },
        {
          href: "https://discord.gg/pufferfi",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/PufferFinance",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://governance.puffer.fi",
          label: "Forum",
          position: "right",
        },
        {
          href: "https://app.puffer.fi/puffer?tab=Stake",
          label: "Voting",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "yield",
        path: "docs/yield",
        routeBasePath: "yield",
        sidebarPath: require.resolve("./sidebars-yield.js"),
        editUrl: ({ docPath }) => {
          return `https://github.com/PufferFinance/website-docs/tree/main/docs/yield/${docPath}`;
        },
        remarkPlugins: [math],
        rehypePlugins: [
          [
            katex,
            {
              strict: false,
              throwOnError: false,
              globalGroup: true,
            },
          ],
        ],
        include: ["**/*.{md,mdx}"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "puffer-preconf",
        path: "docs/puffer-preconf",
        routeBasePath: "puffer-preconf",
        sidebarPath: require.resolve("./sidebars-puffer-preconf.js"),
        editUrl: ({ docPath }) => {
          return `https://github.com/PufferFinance/website-docs/tree/main/docs/puffer-preconf/${docPath}`;
        },
        remarkPlugins: [math],
        rehypePlugins: [
          [
            katex,
            {
              strict: false,
              throwOnError: false,
              globalGroup: true,
            },
          ],
        ],
        include: ["**/*.{md,mdx}"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "institutional",
        path: "docs/institutional",
        routeBasePath: "institutional",
        sidebarPath: require.resolve("./sidebars-institutional.js"),
        editUrl: ({ docPath }) => {
          return `https://github.com/PufferFinance/website-docs/tree/main/docs/institutional/${docPath}`;
        },
        remarkPlugins: [math],
        rehypePlugins: [
          [
            katex,
            {
              strict: false,
              throwOnError: false,
              globalGroup: true,
            },
          ],
        ],
        include: ["**/*.{md,mdx}"],
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        docsRouteBasePath: ["/yield", "/puffer-preconf", "/institutional"],
        indexPages: true,
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        removeDefaultStopWordFilter: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: "left",
        docsPluginIdForPreferredVersion: "yield",
        indexDocs: true,
        hideSearchBarWithNoSearchContext: false,
        useAllContextsWithNoSearchContext: true,
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
};
