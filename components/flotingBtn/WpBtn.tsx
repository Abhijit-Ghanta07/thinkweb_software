"use client";

import primaryContact from "@/lib/contactData";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppFloatingButton() {
  const whatsappNumber = primaryContact.phone; // ✅ Replace with your number (without +)
  const message = "Hello! I want to inquire about your services."; // default msg

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all"
      >
        <img src="/icons/whatsapp.png" className="w-full aspect-auto" />
      </Link>
    </motion.div>
  );
}
