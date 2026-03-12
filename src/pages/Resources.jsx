import React from "react";
import { Link, useParams } from "react-router-dom";
import Page from "../components/Page";

const resourcePages = {
  overview: {
    title: "Resources",
    subtitle: "Learn, discover, and stay up to date with KaryaUp resources.",
    content: (
      <div className="space-y-6">
        <p>
          Find guides, product updates, documentation, and more to help you get
          the most out of KaryaUp.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/resources/blog"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Blog</h3>
            <p className="mt-2 text-sm text-slate-600">
              Stories, tips, and product updates from the KaryaUp team.
            </p>
          </Link>
          <Link
            to="/resources/guides"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Guides</h3>
            <p className="mt-2 text-sm text-slate-600">
              Step-by-step guides to help you set up and scale with KaryaUp.
            </p>
          </Link>
          <Link
            to="/resources/product-updates"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Product updates</h3>
            <p className="mt-2 text-sm text-slate-600">
              Stay informed about new features, improvements, and releases.
            </p>
          </Link>
          <Link
            to="/resources/documentation"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Documentation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Full documentation for APIs, integrations, and advanced workflows.
            </p>
          </Link>
        </div>
      </div>
    ),
  },
  blog: {
    title: "Blog",
    subtitle: "Industry insights, product stories, and best practices.",
    content: (
      <p>
        Read our latest posts about team productivity, feature launches, and
        company news.
      </p>
    ),
  },
  guides: {
    title: "Guides",
    subtitle:
      "Practical, step-by-step instructions to get the most out of KaryaUp.",
    content: (
      <p>
        Browse helpful walkthroughs for common workflows and advanced setups.
      </p>
    ),
  },
  "product-updates": {
    title: "Product updates",
    subtitle: "See what’s new in KaryaUp, straight from the product team.",
    content: (
      <p>
        Learn about recent releases, upcoming improvements, and the product
        roadmap.
      </p>
    ),
  },
  documentation: {
    title: "Documentation",
    subtitle:
      "Detailed reference for APIs, integrations, and advanced workflows.",
    content: (
      <p>
        Find everything you need to integrate KaryaUp into your team’s stack.
      </p>
    ),
  },
};

export default function Resources() {
  const { page } = useParams();
  const key = page || "overview";
  const section = resourcePages[key] || resourcePages.overview;

  return (
    <Page title={section.title} subtitle={section.subtitle}>
      {section.content}
    </Page>
  );
}
