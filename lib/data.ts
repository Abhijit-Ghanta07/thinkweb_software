// lib/site-data.ts

export const siteInfo = {
  name: "Thinkweb Software Solutions",
  tagline: "Digital Solutions for Modern Businesses",

  url: "https://www.thinkweb.co.in/", // Update live domain when ready
  logo: "/logos/logo.png", // Light & dark versions recommended
  logoLight: "/logo-light.svg",

  email: "contact@thinkweb.co.in",
  phone: "+91 7478143203",
  whatsapp: "+917001456849",

  address: {
    street: "Medinipur, West Bengal ",
    city: "Medinipur",
    state: "West Bengal",
    country: "India",
    pincode: "721232",
  },

  serviceAreas: ["India", "USA", "UK", "Canada", "UAE", "Australia"],

  socialLinks: [
    "https://www.linkedin.com/company/devsymedia",
    "https://www.instagram.com/devsymedia",
    "https://github.com/devsymedia",
    "https://facebook.com/devsymedia",
  ],

  // Use in Footer
  shortDescription:
    "We build websites, apps & digital marketing strategies to help businesses grow online.",

  // Schema.org opening hours example
  hours: [
    {
      day: "Mon-Fri",
      time: "10:00 AM - 07:00 PM",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 04:00 PM",
    },
    {
      day: "Sunday",
      time: "Closed",
    },
  ],

  copyright: `© ${new Date().getFullYear()} Thinkweb Software Solutions. All Rights Reserved.`,
};
