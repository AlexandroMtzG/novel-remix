import { TFunction } from "react-i18next";
import { HeaderBlockDto, HeaderBlockStyle } from "~/dtos/blocks/HeaderBlockDto";

export function defaultHeader({ t }: { t: TFunction }): HeaderBlockDto {
  return {
    style: HeaderBlockStyle.simple,
    withLogo: true,
    withSignInAndSignUp: false,
    withThemeSwitcher: true,
    withLanguageSwitcher: true,
    links: [
      { path: "/", title: t("blocks.header.product") },
      {
        title: t("blocks.header.more"),
        items: [
          { title: "Original novel.sh (open source)", path: "https://novel.sh/?ref=novel-remix", target: "_blank" },
          { title: "Remix Page Blocks (open source)", path: "https://remix-page-blocks.vercel.app/?ref=novel-remix", target: "_blank" },
          { title: "Remix Blocks (open source)", path: "https://remixblocks.com/?ref=novel-remix", target: "_blank" },
          { title: "SaasRock - SaaS starter kit", path: "https://saasrock.com/?ref=novel-remix-header", target: "_blank" },
        ],
      },
    ],
  };
}
