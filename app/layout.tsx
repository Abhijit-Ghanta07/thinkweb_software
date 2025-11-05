import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { defaultSEO } from "@/lib/seo";
import Script from "next/script";
import { siteInfo } from "@/lib/data";
import { WhatsAppFloatingButton } from "@/components/flotingBtn/WpBtn";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.url,
    images: [
      {
        url: defaultSEO.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    siteName: defaultSEO.title,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: {
      url: defaultSEO.ogImage,
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-inter antialiased ${inter.variable} ${poppins.variable} overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        <Script id="organization-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteInfo.name,
            url: siteInfo.url,
            logo: siteInfo.logo,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: siteInfo.phone,
                contactType: "customer service",
              },
            ],
            sameAs: siteInfo.socialLinks,
          })}
        </Script>

        <Script id="website-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteInfo.name,
            url: siteInfo.url,
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteInfo.url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
      </body>
    </html>
  );
}
