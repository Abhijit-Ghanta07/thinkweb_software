"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, StartupX",
    content:
      "They transformed our startup idea into a scalable digital platform. Highly professional and creative!",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Priya Patel",
    role: "CEO, FitWell",
    content:
      "Exceptional quality and communication. Our web app performance and UI improved drastically.",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "James Wilson",
    role: "Tech Lead, CloudHub",
    content:
      "Delivered our product faster than expected with cutting-edge tech. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Amit Verma",
    role: "Entrepreneur",
    content:
      "User-friendly UI, smooth performance & solid branding. Perfect tech partner for businesses.",
    img: "https://i.pravatar.cc/150?img=14",
  },
];

export function Testimonials() {
  // Duplicate array for seamless infinite scroll
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 px-2">
      <div className="lg:container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Trusted by clients worldwide for high-quality results & reliable
          delivery.
        </p>

        {/* Scroll Container */}
        <div className="overflow-hidden mt-12 relative">
          <motion.div
            className="flex gap-6 py-5"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {loopTestimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[380px] bg-gray-50 dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col justify-between"
              >
                <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed italic">
                  “{t.content}”
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={t.img} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
