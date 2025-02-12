import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "@/components/Hero";
/* import { FeaturesTiles } from "@/components/FeatureTiles"; */
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/common/Button"
import WhatIsFlowershow from "@/components/WhatIsFlowershow";
import CloudPublishSteps from "@/components/CloudPublishSteps";

import type { CustomAppProps } from "./_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Publish your Obsidian vault for free with Flowershow",
    subtitle: "The easiest way to share your digital garden with the world – no coding required. Just sign up, connect your vault, and have your site online in 2 minutes!",
    highlights: [
        "Obsidian compatibile",
        "Quick and easy",
        "Free forever plan available",
    ],
    infoBadges: [
        (<h2 className="max-w-lg text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-400 ">
            Flowershow Cloud
        </h2>)
    ],
    ctaButtons: [
        (<Button target="_blank" href="https://cloud.flowershow.app">
            <span>Start publishing for free</span>
        </Button>),
        (<Button target="_blank" href="/pricing" variant="outline" className="ml-4">
            <span>View pricing</span>
        </Button>),
    ]
}

// const features = [
//     {
//         title: "Markdown, MDX syntax support",
//         description:
//             "Flowershow was designed with Obsidian users in mind, so it aims to fully support Obsidian syntax, including CommonMark, GitHub Flavoured Markdown and Obsidian extensions, like Wiki links. All of your Markdown files are parsed as MDX. This means you not only can write your content using good old Markdown, but also enrich it with dynamic visualizations, immersive user interactions and much more!",
//         link: "/docs/syntax",
//         imageSrc: "/images/obs_dark.png",
//     },
//     {
//         title: "Mermaid and MathJax support",
//         description:
//             "Display Mermaid diagrams within your notes as well as math exaptions, where you can use LaTeX notations to denote formulas.",
//         link: "/docs/mermaid",
//         imageSrc: "/images/mermaid.png",
//     },
//     {
//         title: "Table of contents",
//         description:
//             "You can add a table of contents to your markdown pages as well as adding a site-wide table of contents in a LHS sidebar to allow your users to easily navigate to other pages on your website.",
//         link: "/docs/site-wide-toc",
//         imageSrc: "/images/toc.png",
//     }
// ];

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            <WhatIsFlowershow />
            {/* <CloudPublishSteps/> */}
            {/* <Features features={features} /> */}
            <CTASection
                title="Join the Flowershow community"
                subtitle="Join other Obsidian users who are already sharing their digital gardens with the world."
                cta="Start publishing for free"
                href="https://cloud.flowershow.app"
            />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<Props>
> => {
    return {
        props: {
            meta: {
                urlPath: "/",
                showToc: false,
                showEditLink: false,
                showSidebar: false,
                showComments: false,
            },
        },
    };
};
