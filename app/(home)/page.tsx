import Image from "next/image";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { TechStack } from "./_components/Tech";
import { Testimonials } from "./_components/Testimonal";
import { SendInquiry } from "./_components/SendInquiry";

export default function Home() {
  return (
    <div className="lg:container mx-auto">
      <Hero />
      <Services />
      <TechStack />
      <Testimonials />
      <SendInquiry />
    </div>
  );
}
