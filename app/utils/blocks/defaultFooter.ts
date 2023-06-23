import { TFunction } from "react-i18next";
import { FooterBlockDto, FooterBlockStyle } from "~/dtos/blocks/FooterBlockDto";
import { defaultSocials } from "./defaultSocials";

export function defaultFooter({ t }: { t: TFunction }): FooterBlockDto {
  return {
    style: FooterBlockStyle.columns,
    text: t("blocks.footer.text"),
    sections: [
      {
        name: t("blocks.footer.application.title"),
        items: [
          { name: t("blocks.footer.application.home"), href: "/" },
          // { name: t("blocks.footer.application.contact"), href: "/contact" },
          // { name: t("blocks.footer.application.newsletter"), href: "/newsletter" },
        ],
      },
      // {
      //   name: t("blocks.footer.legal.title"),
      //   items: [
      //     { name: t("blocks.footer.legal.privacy"), href: "/privacy-policy" },
      //     { name: t("blocks.footer.legal.terms"), href: "/terms-and-conditions" },
      //   ],
      // },
    ],
    socials: defaultSocials,
  };
}
