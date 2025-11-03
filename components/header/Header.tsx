"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import primaryContact from "@/lib/contactData";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b">
      <div className="lg:container  mx-auto flex items-center justify-between h-16 px-4">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="">
            <div className="flex items-center">
              <Image
                src={"/logos/logo_icon.png"}
                alt="logo"
                width={50}
                height={50}
                className="aspect-square object-contain object-top"
              />

              <p className="font-medium text-lg">Thinkweb Software</p>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP MENUS */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-base font-medium text-foreground hover:text-cyan-500 transition-colors"
              >
                {item.title}
              </Link>
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
          <Button
            asChild
            className="font-medium bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90 transition shadow-lg"
          >
            <Link
              href={`https://wa.me/${primaryContact.phone}`}
              className="flex items-center"
            >
              <span>Get Quote</span>
              <span className="animate-bounce">
                <ArrowUpRight />
              </span>
            </Link>
          </Button>
        </motion.div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-foreground" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col gap-6 mt-8 px-5 pt-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-cyan-500 transition"
                  >
                    {item.title}
                  </Link>
                ))}

                <Button
                  asChild
                  className="mt-4 w-full font-medium bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90 shadow-lg"
                >
                  <Link
                    href={`https://wa.me/${primaryContact.phone}`}
                    className="flex items-center"
                  >
                    <span>Get Quote</span>
                    <span className="animate-bounce">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
