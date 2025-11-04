"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  AppWindowMacIcon,
  ChartColumn,
  Code,
  FileBracesCornerIcon,
  FileSearchCornerIcon,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "high-performance websites that provide an exceptional user experience and drive engagement",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    desc: "Developing native and cross-platform mobile apps for iOS and Android that are intuitive, engaging, and feature-rich.",
    icon: AppWindowMacIcon,
  },
  {
    title: "Web App Development",
    desc: "Building powerful, scalable, and secure web applications tailored to your specific business requirements and objectives.",
    icon: FileBracesCornerIcon,
  },
  {
    title: "SEO Ranking",
    desc: "Boost visibility & rank on Google with professional SEO.",
    icon: ChartColumn,
  },
  {
    title: "Social Media Marketing",
    desc: "Grow brand presence & reach audience through SMM.",
    icon: FileSearchCornerIcon,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white px-5 dark:bg-gray-950">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          We provide complete digital solutions that scale with your business.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className=" bg-background border-gray-200 hover:shadow-xl transition rounded-lg h-auto min-h-52 pt-8 px-8">
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <Button
                      variant={"default"}
                      size={"icon"}
                      className="rounded-full bg-primary/10 hover:bg-primary/20"
                    >
                      <service.icon className="h-10 w-10 text-primary" />
                    </Button>

                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                      {service.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
