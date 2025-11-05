import { MeetUp } from "@/components/contact/MeetUp";
import primaryContact from "@/lib/contactData";
import { siteInfo } from "@/lib/data";
import { generateSEO } from "@/lib/seo";
import { Mail, Phone } from "lucide-react";
import Script from "next/script";
import React from "react";
export const metadata = generateSEO({
  title: `Contact Us | ${siteInfo.name}`,
  description: "Get in touch for project inquiries & business queries.",
});
export default function page() {
  return (
    <>
      <Script id="localbusiness-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: siteInfo.name,
          url: siteInfo.url,
          telephone: siteInfo.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Medinipur",
            addressRegion: "WB",
            addressCountry: "IN",
          },
        })}
      </Script>

      <Script id="breadcrumbs-contact" type="application/ld+json">
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
              name: "Contact",
              item: `${siteInfo.url}/contact`,
            },
          ],
        })}
      </Script>

      <section className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="flex flex-col gap-4 text-center mb-12 sm:mb-16">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">
                  Let&apos;s Build Something Great Together
                </h1>
                <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-normal leading-normal">
                  Fill out the form below, and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                {/* <div className="lg:col-span-3 bg-white dark:bg-background-dark p-8 sm:p-10 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-8">
                  Send us a Message
                </h2>
                <form action="#" className="space-y-6" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2">
                        Full Name
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 focus:border-primary dark:focus:border-secondary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                        placeholder="Enter your full name"
                        type="text"
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2">
                        Company Name (Optional)
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 focus:border-primary dark:focus:border-secondary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                        placeholder="Enter your company name"
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2">
                        Email Address
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 focus:border-primary dark:focus:border-secondary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                        placeholder="Enter your email address"
                        type="email"
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2">
                        Phone Number (Optional)
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 focus:border-primary dark:focus:border-secondary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                        placeholder="Enter your phone number"
                        type="tel"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2">
                        Your Message
                      </p>
                      <textarea
                        className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 focus:border-primary dark:focus:border-secondary min-h-32 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                        placeholder="How can we help you?"
                      ></textarea>
                    </label>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors duration-200"
                      type="submit"
                    >
                      <span className="truncate">Send Message</span>
                    </button>
                  </div>
                </form>
              </div> */}
                <div className="wrap w-full lg:col-span-3">
                  <MeetUp />
                </div>
                <div className="lg:col-span-2 space-y-10">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">
                      Our Contact Information
                    </h3>
                    <div className="space-y-4">
                      <a
                        className="flex items-center gap-4 group"
                        href="mailto:contact@thinkweb.io"
                      >
                        <div className="flex items-center justify-center size-10 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary group-hover:bg-primary/20 dark:group-hover:bg-secondary/20 transition-colors">
                          <Mail />
                        </div>
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-secondary">
                          {primaryContact.email}
                        </span>
                      </a>
                      <a
                        className="flex items-center gap-4 group"
                        href={`tel:${primaryContact.phone}`}
                      >
                        <div className="flex items-center justify-center size-10 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary group-hover:bg-primary/20 dark:group-hover:bg-secondary/20 transition-colors">
                          <Phone />
                        </div>
                        <span className="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-secondary">
                          {primaryContact.phone}
                        </span>
                      </a>
                      {/* <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center size-10 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary flex-shrink-0 mt-1">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                      </div>
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                        123 Innovation Drive, Tech City, ST 54321
                      </span>
                    </div> */}
                    </div>
                  </div>
                  <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden border border-border-light dark:border-border-dark">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="A stylized map showing a pin on a location."
                      data-location="Tech City"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-j0AFOveui8K6iF4W7ljCK5wDmsNZZ4g_GFBU7DnvQn1xqY7nHKOcxN45yK6dq-RKBRFaf10xRu--i62WQtjt7uwDf_Vgt7J4JAdAwAU_XQIohmGMZkX2qyBj_pyHas4V5aCYPkkiKsMYj5khzBEIlQ6htPK3rdWvo3ZPL_xrR02Jq-8WxxVz-aj4Glx6cKJgAhodYCK-MGVn9lh_xcBFRAC-GBCwAegtYs-IV225PKibz-SWLhEPnnUlJT2cprZyLuUyqhXj6aQ"
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
