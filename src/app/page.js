import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Testimonial from "@/components/Testimonial";
import Spacer from "@/components/Spacer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Spacer size={80} />
      <Quote />
      <Divider size={64} />
      <Testimonial />
      <Spacer size={128} />
    </>
  );
}
