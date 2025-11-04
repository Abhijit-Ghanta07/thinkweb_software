"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";
import primaryContact from "@/lib/contactData";

export function Hero() {
  return (
    <section className="w-full py-32 flex items-center justify-center text-center bg-background">
      <div className="max-w-3xl px-4 mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl font-bold leading-tight tracking-tighter"
        >
          Build, Launch, and Scale Your Digital Vision
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-muted-foreground text-lg md:text-xl"
        >
          We are Thinkweb Software Solutions. We turn complex ideas into
          powerful, elegant, and scalable web and mobile applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Button
            asChild
            className="font-medium bg-primary shadow-lg hover:opacity-90"
          >
            <Link
              href="https://calendly.com/thinkwebsoftwaresolutions/30min"
              className="flex items-center gap-1"
            >
              <span>
                <Calendar />
              </span>
              <span> Book Consultation</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-primary text-foreground hover:bg-cyan-50"
          >
            <Link href={`https://wa.me/${primaryContact.phone}`}>
              Get Free Quote
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
