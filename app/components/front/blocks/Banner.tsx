import { BannerBlockDto } from "~/dtos/blocks/BannerBlockDto";
import BannerTop from "./variants/banner/BannerTop";
import BannerBottom from "./variants/banner/BannerBottom";

export default function Banner({ item }: { item: BannerBlockDto }) {
  return (
    <>
      {item.style === "top" && <BannerTop item={item} />}
      {item.style === "bottom" && <BannerBottom item={item} />}
    </>
  );
}
