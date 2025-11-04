import primaryContact from "@/lib/contactData";
import { siteInfo } from "@/lib/data";
import { generateSEO } from "@/lib/seo";
import { Group, Lightbulb, Shield } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import React from "react";
export const metadata = generateSEO({
  title: `About Us | ${siteInfo.name}`,
  description: "Learn about our mission, work ethics, team & values.",
  keywords: ["about agency", "web agency india", "startup company"],
});
export default function page() {
  return (
    <>
      <Script id="breadcrumbs-about" type="application/ld+json">
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
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: `${siteInfo.url}/about`,
            },
          ],
        })}
      </Script>
      <section className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <main className="flex-grow">
            <section className="relative">
              <div
                className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 22, 34, 0.7) 0%, rgba(10, 22, 34, 0.9) 100%), url('/logos/logo.png')",
                }}
              >
                <div className="flex flex-col gap-4 text-center max-w-3xl">
                  <h1 className="text-white text-4xl md:text-5xl font-black tracking-tighter">
                    Crafting the Future of Digital Solutions.
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg font-normal leading-relaxed">
                    Welcome to Thinkweb Software Solutions. We specialize in
                    building innovative web and mobile applications that drive
                    business growth and success.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-16 sm:py-24">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Our Story, Mission, and Vision
                  </h2>
                  <p className="text-base font-normal leading-relaxed">
                    Founded with a passion for technology and a commitment to
                    excellence, Thinkweb was born from the idea that software
                    should be both powerful and intuitive. Our mission is to
                    empower businesses by creating bespoke digital solutions
                    that solve real-world problems.
                  </p>
                  <p className="text-base font-normal leading-relaxed">
                    Our vision is to be a leading partner in digital
                    transformation, recognized for our innovation, integrity,
                    and unwavering dedication to client success.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-5xl font-extrabold text-primary">10+</p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-light/70 dark:text-text-dark/70">
                      Projects Completed
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-extrabold text-primary">98%</p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-light/70 dark:text-text-dark/70">
                      Happy Clients
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-extrabold text-primary">1+</p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-light/70 dark:text-text-dark/70">
                      Years of Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-extrabold text-primary">5</p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-light/70 dark:text-text-dark/70">
                      Team Experts
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 sm:py-24 bg-white dark:bg-background-dark/50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Our Core Values
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
                    The principles that guide our work, our partnerships, and
                    our commitment to excellence.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark">
                    <div className="flex items-center justify-center size-12 rounded-full bg-secondary/10 text-secondary">
                      <span
                        className="material-symbols-outlined text-3xl"
                        data-icon="lightbulb"
                      >
                        <Lightbulb size={25} className="text-primary" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold">Innovation</h3>
                    <p className="mt-2 text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">
                      We constantly explore new technologies and approaches to
                      deliver cutting-edge solutions that give our clients a
                      competitive edge.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark">
                    <div className="flex items-center justify-center size-12 rounded-full bg-secondary/10 text-secondary">
                      <span
                        className="material-symbols-outlined text-3xl"
                        data-icon="shield"
                      >
                        <Shield size={25} className="text-primary" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold">Integrity</h3>
                    <p className="mt-2 text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">
                      We believe in transparent communication, ethical
                      practices, and building relationships based on trust and
                      mutual respect.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark">
                    <div className="flex items-center justify-center size-12 rounded-full bg-secondary/10 text-secondary">
                      <span
                        className="material-symbols-outlined text-3xl"
                        data-icon="groups"
                      >
                        <Group size={25} className="text-primary" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold">
                      Client Partnership
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-text-light/80 dark:text-text-dark/80">
                      Your success is our success. We work collaboratively with
                      our clients, acting as a true extension of their team to
                      achieve shared goals.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-background dark:bg-background-dark/50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Ready to build the future?
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
                    Let&apos;s discuss how our expertise can help you achieve
                    your business goals. Whether you&apos;re a startup or an
                    enterprise, we&apos;re here to help.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                      <Link href={`tel:${primaryContact.phone}`}>
                        <span className="truncate">Contact Us</span>
                      </Link>
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-accent  text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                      <Link href={"/services"}>
                        <span className="truncate">View Our Services</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
}
