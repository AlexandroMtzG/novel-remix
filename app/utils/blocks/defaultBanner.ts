import { TFunction } from "i18next";
import { BannerBlockDto } from "~/dtos/blocks/BannerBlockDto";

export function defaultBanner({ t }: { t: TFunction }): BannerBlockDto {
  return {
    style: "top",
    text: t("blocks.banner.text"),
    cta: [
      { text: t("blocks.banner.cta.primary"), href: "https://github.com/steven-tey/novel" },
      { text: t("blocks.banner.cta.secondary"), href: "https://github.com/AlexandroMtzG/novel-remix" },
    ],
  };
}
