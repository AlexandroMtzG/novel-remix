import { TestimonialsBlockDto } from "~/dtos/blocks/TestimonialsBlockDto";
import TestimonialsSimple from "./variants/testimonials/TestimonialsSimple";

export default function Testimonials({ item }: { item: TestimonialsBlockDto }) {
  return <>{item.style === "simple" && <TestimonialsSimple item={item} />}</>;
}
