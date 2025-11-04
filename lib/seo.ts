export const defaultSEO = {
  title: "Thinkweb Software Solutions - Web & App Development Agency",
  description:
    "We build responsive web apps, mobile apps, and provide SEO & digital marketing solutions to scale your business.",
  keywords: [
    "web development",
    "mobile app development",
    "nextjs agency india",
    "seo services",
    "digital marketing",
  ],
  url: "https://www.thinkweb.co.in",
  ogImage: "/og-image.png",
};

export const generateSEO = ({
  title,
  description,
  keywords = [],
  image,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}) => ({
  title: title || defaultSEO.title,
  description: description || defaultSEO.description,
  keywords: [...defaultSEO.keywords, ...keywords],
  openGraph: {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    url: defaultSEO.url,
    images: [
      {
        url: image || defaultSEO.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
});
