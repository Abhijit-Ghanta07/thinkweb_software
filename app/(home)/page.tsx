import Image from "next/image";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { TechStack } from "./_components/Tech";
import { Testimonials } from "./_components/Testimonal";
import { SendInquiry } from "./_components/SendInquiry";
import Script from "next/script";
import { siteInfo } from "@/lib/data";
import { generateSEO } from "@/lib/seo";
export const metadata = generateSEO({
  title: `Best Web & App Development Agency | ${siteInfo.name}`,
  description:
    "We build websites, mobile apps, SEO strategy, branding & digital solutions.",
  keywords: [
    "web development",
    "app development",
    "SEO agency",
    "startup development",
  ],
});
export default function Home() {
  return (
    <>
      <Script id="home-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you build custom websites?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we build custom websites tailored to your business needs.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer SEO services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide complete SEO strategy & optimization services.",
              },
            },
          ],
        })}
      </Script>

      {/* ✅ Aggregate Rating JSON-LD */}
      <Script id="rating-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          itemReviewed: {
            "@type": "Organization",
            name: siteInfo.name,
          },
          ratingValue: "4.9",
          reviewCount: "112",
        })}
      </Script>

      {/* ✅ Breadcrumbs */}
      <Script id="breadcrumbs-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteInfo.url,
            },
          ],
        })}
      </Script>

      <div className="lg:container mx-auto">
        <Hero />
        <Services />
        <TechStack />
        <Testimonials />
        <SendInquiry />
      </div>
    </>
  );
}
