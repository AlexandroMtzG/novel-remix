import { MetaTagsDto } from "~/dtos/seo/MetaTagsDto";

export async function getSeoMetaTags(request?: Request): Promise<MetaTagsDto> {
  const pathname = request ? new URL(request.url).pathname : "";
  return getSeoMetaTagsFromPathname(pathname);
}

async function getSeoMetaTagsFromPathname(pathname: string) {
  const title = "Novel.sh for Remix";
  const description = "Novel is a Notion-style WYSYWIG editor with AI-powered autocompletions.";
  const keywords = "novel, notion, editor, wysiwyg, ai, autocompletions, open source";
  const image = "https://github.com/steven-tey/novel/raw/main/app/opengraph-image.png";
  const twitterImage = "https://github.com/steven-tey/novel/raw/main/app/opengraph-image.png";

  const metaTags: MetaTagsDto = {
    charset: "utf-8",
    title,
    description,
    keywords,
    "og:title": title,
    "og:type": "website",
    "og:url": pathname,
    "og:image": image,
    "og:card": "summary_large_image",
    "og:description": description,
    "twitter:image": twitterImage,
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
  };

  return metaTags;
}
