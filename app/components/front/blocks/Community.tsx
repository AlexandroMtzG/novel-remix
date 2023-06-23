import { CommunityBlockDto } from "~/dtos/blocks/CommunityBlockDto";
import CommunitySimple from "./variants/community/CommunitySimple";

export default function Community({ item }: { item: CommunityBlockDto }) {
  return <>{item.style === "simple" && <CommunitySimple item={item} />}</>;
}
