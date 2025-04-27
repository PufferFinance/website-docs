// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Products',
      items: [
        {
          type: 'link',
          label: 'Yield',
          href: '/yield',
        },
        {
          type: 'link',
          label: 'UniFi AVS',
          href: '/unifi-avs',
        },
        {
          type: 'link',
          label: 'Institutional',
          href: '/institutional',
        },
      ],
    },
  ],
};

module.exports = sidebars; 