import { i18nHelper } from "~/locale/i18n.utils";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Language } from "remix-i18next";
import { getSeoMetaTags } from "~/utils/blocks/seoService";
import { MetaTagsDto } from "~/dtos/seo/MetaTagsDto";
import { getUserInfo, UserSession } from "~/utils/session.server";
import Hero from "~/components/front/blocks/Hero";
import { useTranslation } from "react-i18next";
import Header from "~/components/front/Header";
import Footer from "~/components/front/Footer";
import Banner from "~/components/front/blocks/Banner";
import { defaultHero } from "~/utils/blocks/defaultHero";
import { defaultHeader } from "~/utils/blocks/defaultHeader";
import { defaultFooter } from "~/utils/blocks/defaultFooter";
import { defaultBanner } from "~/utils/blocks/defaultBanner";
import Editor from "~/modules/novel/ui/editor";

type LoaderData = {
  i18n: Record<string, Language>;
  userSession: UserSession;
  metaTags: MetaTagsDto;
};

export let loader: LoaderFunction = async ({ request }) => {
  const { translations } = await i18nHelper(request);
  try {
    const userSession = await getUserInfo(request);
    const data: LoaderData = {
      i18n: translations,
      userSession,
      metaTags: await getSeoMetaTags(request),
    };
    return json(data);
  } catch (e) {
    return json({
      i18n: translations,
    });
  }
};

export const meta: MetaFunction = ({ data }) => ({
  ...data?.metaTags,
});

export default function () {
  const { t } = useTranslation();

  return (
    <div>
      <Banner item={defaultBanner({ t })} />
      <Header item={defaultHeader({ t })} />
      {/* <Hero item={defaultHero({ t })} /> */}
      <div className="pt-2 pb-4 text-center">
        <h1 className="flex flex-col text-3xl font-extrabold sm:text-4xl">{t("blocks.hero.headline")}</h1>
        <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">{t("blocks.hero.subheadline")}</p>
      </div>
      <div className="flex justify-center">
        <Editor />
      </div>
      {/* <Footer item={defaultFooter({ t })} /> */}
    </div>
  );
}
