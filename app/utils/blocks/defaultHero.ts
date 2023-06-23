import { TFunction } from "react-i18next";
import { HeroBlockDto } from "~/dtos/blocks/HeroBlockDto";

export function defaultHero({ t }: { t: TFunction }): HeroBlockDto {
  return {
    style: "simple",
    headline: t("blocks.hero.headline"),
    subheadline: t("blocks.hero.subheadline"),
    image: "https://via.placeholder.com/720x600?text=Your%20Hero%20Image",
    // cta: [
    //   {
    //     text: t("blocks.hero.cta.primary"),
    //     href: "https://github.com/steven-tey/novel",
    //     isPrimary: true,
    //   },
    //   {
    //     text: t("blocks.hero.cta.secondary"),
    //     href: "https://github.com/AlexandroMtzG/novel-remix",
    //     isPrimary: false,
    //   },
    // ],
    // topText: {
    //   text: t("blocks.hero.topText"),
    // },
    // bottomText: {
    //   link: {
    //     text: "Remix 1.6.3",
    //   },
    // },
  };
}
