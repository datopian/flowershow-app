const config = {
  title: "Flowershow",
  description: "Publish your digital garden",
  author: "Flowershow",
  logo: "/images/logo.svg",
  domain: "https://flowershow.app",
  navbarTitle: {
    logo: "/images/logo.svg",
    text: "Flowershow",
    version: "Alpha",
  },
  editLinkRoot:
    "https://github.com/datopian/flowershow-app/edit/main",
  showEditLink: true,
  showToc: true,
  showSidebar: false,
  showComments: true,
  comments: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    pages: ["blog"], // page directories where we want commments
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
  },
  analytics: "G-RQWLTRWBS2",
  navLinks: [
    { href: "/#features", name: "Features" },
    { href: "/docs", name: "Docs" },
    { href: "/blog", name: "Blog" },
    { href: "/docs/roadmap", name: "Roadmap" },
    { href: "/about", name: "About" },
    { href: "/cloud", name: "Cloud" },
    {
      href: "https://github.com/flowershow/flowershow/discussions",
      name: "Forum",
    },
    { href: "/_all", name: "All" },
  ],
  social: [
    { label: "github", href: "https://github.com/datopian/flowershow" },
    { label: "discord", href: "https://discord.gg/cPxejPzpwt" },
  ],
  search: {
    provider: "algolia",
    config: {
      appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
      apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
      indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
    },
  },
  nextSeo: {
    titleTemplate: "%s | Flowershow",
    description:
      "Turn your markdown notes into an elegant website and tailor it to your needs. Flowershow is easy to use, fully-featured, Obsidian compatible and open-source.",
    canonical: "https://flowershow.app",
    openGraph: {
      title: "Flowershow",
      images: [
        {
          url: "https://flowershow.app/assets/images/frontpage-screenshot.jpg",
          alt: "Flowershow",
          width: 1200,
          height: 627,
          type: "image/jpg",
        },
      ],
    },
    twitter: {
      handle: "@flowershow",
      site: "https://flowershow.app",
      cardType: "summary_large_image",
    },
  },
};

export default config;
