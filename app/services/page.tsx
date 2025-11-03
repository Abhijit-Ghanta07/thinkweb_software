import React from "react";
import { TechStack } from "../(home)/_components/Tech";
import { Services } from "../(home)/_components/Services";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1">
            <section className="w-full py-20 lg:py-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-6 text-left">
                    <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                      Building Digital Solutions That Drive Growth
                    </h1>
                    <p className="text-base sm:text-lg">
                      We create custom web, mobile, and marketing solutions to
                      help your business thrive in the digital landscape.
                    </p>
                    <button className="flex min-w-[84px] max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                      <span className="truncate">Get a Free Quote</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    data-alt="Abstract gradient of blue and teal shapes, representing technology and innovation."
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTxl3rCbXHJTjCQIFHLXBGDkGVMqpTzTuslWJRuCrd6S8_gvishoszw55jYXeFoCww33kudOOsxjmLUeRI6lD7RECQXk5ZsZaREEJPsjgQdAYLLxkweN8OQSKww7nxVClTb0Nk39VR33EjJ0TI7XTQa-cFqC6ke7CWhv6S2vg5l_IgH9lvaXpMII4D4xgjcwHuZ_zGN2txiiadWsmFNNaeINcO9vj1CdVtqrt7GltowJSUliaVBUVGLMwVX9PrCIuv1VFH9UByUEc')",
                    }}
                  ></div>
                </div>
              </div>
            </section>
            <Services />
            <TechStack />

            <section className="w-full py-16 lg:py-24 bg-white dark:bg-background-dark/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                    Our Proven Process
                  </h2>
                  <p className="max-w-2xl mx-auto mt-4 text-base">
                    We follow a structured approach to ensure your project is a
                    success from start to finish.
                  </p>
                </div>
                <div className="relative mt-16">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"
                  ></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 size-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl">
                        1
                      </div>
                      <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold">
                          Discover &amp; Plan
                        </h3>
                        <p className="mt-2 text-sm">
                          We start by understanding your goals, audience, and
                          project requirements to create a detailed roadmap for
                          success.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 md:self-end md:flex-row-reverse md:text-right">
                      <div className="flex-shrink-0 size-12 rounded-full bg-primary/20 text-primary  flex items-center justify-center font-bold text-xl">
                        2
                      </div>
                      <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold">
                          Design &amp; Prototype
                        </h3>
                        <p className="mt-2 text-sm">
                          Our team creates intuitive UI/UX designs and
                          interactive prototypes to visualize the final product
                          and gather feedback.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 size-12 rounded-full bg-primary/20 text-primary  flex items-center justify-center font-bold text-xl">
                        3
                      </div>
                      <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold">
                          Develop &amp; Test
                        </h3>
                        <p className="mt-2 text-sm">
                          We write clean, efficient code and conduct rigorous
                          testing to ensure your application is secure,
                          scalable, and bug-free.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 md:self-end md:flex-row-reverse md:text-right">
                      <div className="flex-shrink-0 size-12 rounded-full bg-primary/20 text-primary  flex items-center justify-center font-bold text-xl">
                        4
                      </div>
                      <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold">
                          Deploy &amp; Support
                        </h3>
                        <p className="mt-2 text-sm">
                          We handle the launch process and provide ongoing
                          support and maintenance to ensure your product runs
                          smoothly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-primary dark:bg-primary/90 rounded-xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold text-white">
                    Have an Idea? Let&apos;s Build It Together.
                  </h2>
                  <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                    Ready to start your next project? Contact us today for a
                    free consultation and quote. We&apos;re excited to learn
                    about your vision.
                  </p>
                  <button className="mt-8 flex mx-auto min-w-[84px] max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white dark:bg-secondary text-primary dark:text-gray-900 text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                    <span className="truncate">Get a Free Quote</span>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}
