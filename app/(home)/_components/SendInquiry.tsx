"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import primaryContact from "@/lib/contactData";
import Script from "next/script";

export function SendInquiry() {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <section className="py-24 bg-background px-5 dark:bg-gray-900">
        <div className="lg:container mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to build your next big idea?
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Let&apos;s turn your vision into a reality. Contact us today to
              discuss your project and get a free, no-obligation quote.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <Mail className="w-5 h-5 text-primary" />
                <span>{primaryContact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                <Phone className="w-5 h-5 text-primary" />
                <span>{primaryContact.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <div className="wrap">
            <div
              className="calendly-inline-widget w-full h-[800px]"
              data-url="https://calendly.com/thinkwebsoftwaresolutions/contact-us"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
