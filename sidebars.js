/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  background: [
    "intro",
    {
      type: "category",
      label: "Protocol",
      items: [
        "overview",
        "guiding-principles",
        "strategies",
        "smoothing",
        "rewards",
        "growth-spurts",
        "guardians",
        "burst-threshold",
        "governance",
      ],
    },
    {
      type: "category",
      label: "Technology",
      items: ["secure-signer", "rave"],
    },
    {
      type: "category",
      label: "Node Operators",
      items: ["requirements", "setup", "registration", "node-rewards"],
    },
    {
      type: "category",
      label: "Stakers",
      items: ["minting", "redeeming"],
    },
    {
      type: "category",
      label: "Reference",
      items: ["glossary", "hardforks", "slash", "comparisons", "faq"],
    },
  ],
};

module.exports = sidebars;
