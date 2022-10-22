const guide = [
  {
    title: "Getting Started",
    icon: "bullet" as const,
    hasIcon: false,
    href: "getting-start",
  },
  {
    title: "Generic Props",
    icon: "bullet" as const,
    hasIcon: false,
    href: "generic-props",
  },
];

export const siderbar = {
  title: "Documentation",
  sections: [
    {
      title: "Guide",
      basepath: "guide",
      prevIcon: "",
      afterIcon: "arrow__right" as const,
      items: guide,
    },
  ],
};
