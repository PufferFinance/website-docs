// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  yield: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Protocol",
      items: [
        "overview",
        "guiding-principles",
        "nlrt",
        "modules",
        "validator-tickets",
        "validator-tickets-calculation",
        "rewards",
        "guardians",
        "burst-threshold",
      ],
    },
    {
      type: "category",
      label: "Node Operators",
      items: [
        "requirements",
        "setup",
        "registration",
        "noop-rewards",
        "purchase-vts",
        "purchase-vt-using-safe",
        "ejection-scenarios",
      ],
    },
    {
      type: "category",
      label: "Stakers",
      items: [
        "stake",
        "withdraw"
      ],
    },
    {
      type: "category",
      label: "Deployments",
      items: [
        "deployed-contracts",
        "multisig"
      ],
    },
    {
      type: "category",
      label: "Governance",
      items: [
        "governance-mission",
        "governance-understanding-governance",
        "governance-calendar",
        "governance-token",
        "governance-voting",
        "governance-roadmap",
      ],
    },
    {
      type: "category",
      label: "Campaigns",
      items: [
        "campaigns-season-1",
        "campaigns-season-2"
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "glossary",
        "hardforks",
        "slash",
        "faq",
        "cookie-policy",
        "privacy-policy",
        "terms-of-service",
      ],
    },
    {
      type: "link",
      label: "Puffer SDK",
      href: "https://pufferfinance.github.io/puffer-sdk/",
    },
  ],
};

module.exports = sidebars; 