import Hero from "@/components/home/hero";
import OurServices from "@/components/home/ourServices";
import RootLayout from "@/layouts/RootLayout";
import IndustriesWeServe from "@/components/home/industriesWeServe";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <OurServices />
      <IndustriesWeServe />
      <Testimonial />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
