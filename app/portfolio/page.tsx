import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="font-display bg-background-light dark:bg-background-dark text-[#111318] dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-1 justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1 gap-8 md:gap-12">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <p className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] dark:text-white">
                    Innovative Solutions, Proven Results
                  </p>
                  <p className="text-[#616f89] dark:text-gray-400 text-base md:text-lg font-normal leading-normal">
                    A selection of web and mobile projects we&apos;re proud to
                    have built.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <div className="flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    All
                  </p>
                </div>
                <div className="flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 pl-4 pr-4 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
                  <p className="text-sm font-medium leading-normal">Web Apps</p>
                </div>
                <div className="flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 pl-4 pr-4 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
                  <p className="text-sm font-medium leading-normal">
                    Mobile Apps
                  </p>
                </div>
                <div className="flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 pl-4 pr-4 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors">
                  <p className="text-sm font-medium leading-normal">
                    UI/UX Design
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="flex flex-col gap-4 group">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      data-alt="Screenshot of an e-commerce dashboard."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAExuSOsJbzXnxG5VxA_BehYQeiTc8-DILdjo0vUTck3jLHJpUIxaosDopWu1wxv38miU3CakoETELycX_yLpTqM6Dg2L0MmGPPqta2BqR39mWSnfpSplj_s9M2X1pAR4vXo3teNn8X12UXbIfXwwpUDSYwnfi7uRfsAm6FZ7SnKJ7oixrKio6wNbs-sc4ttwosRAkF0fJ3Ui6Q5OuTDttCs6H1U0v2GYJHctda7o8shvq3zKsRVwZuJECoQ4wx_xypdHYjhIZCaUo')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-normal dark:text-white">
                      Zenith Commerce Platform
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      A scalable e-commerce solution designed to streamline
                      online sales and inventory management.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        React
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        GraphQL
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Stripe API
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 group">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      data-alt="Mockup of a mobile app on a phone."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhyOU_5SzIEsS2rkpI_DSnsuS08X1xnpckuC_2Eq2cP5Hguj6ney-lB20Of46ESexJCPWy7PNCeDKL-bKtbxManqSjocdgUBPQgC4vQ6dohiQB4eGwrNUV6isutYNG0m_1-1p2a-O9gESPec_SPk1LpSgwfqINHYkzXGDESn9fHEDxv8FCLxGz52hQyy9rTAbBJygF6n0-vKPYd8sxk0IWGpQtv1qJw9eln4zrL_1wpffzGanr4V-Gw-z0fXY0D-g6YtC2gakQ6Yg')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-normal dark:text-white">
                      ConnectApp Mobile
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      A cross-platform social networking app for iOS and Android
                      focused on real-time connections.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        React Native
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Firebase
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 group">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      data-alt="An enterprise-level data visualization dashboard."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEVKKTZ7cK7ORiDWSAYUSifix2pC7tlB51CRqFokTtTnBZFXoMxF66tuCZ2o0u-Tlct1GY4qkCR8PzNe9UviTqES1PlebwD8ACFkVP8oZJlDTN3E_brlBq49oBdf74zTLS9o1QrZhiIPwQjkvTh82K3LGCnw7mdRdAzGVXCZLh6DWhD40XMKVWPBg-MwKKLjiIwNDohzg2DSSt2q-kucUV9EvTxNlveJjcCCe9DGYiea2kpEZKWhw714J5O_O3ybGwgqP-bMOQmvU')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-normal dark:text-white">
                      DataViz Dashboard
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      An enterprise-level data visualization tool for real-time
                      business intelligence and reporting.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Vue.js
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        D3.js
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        AWS
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 group">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      data-alt="A modern, user-friendly travel booking platform."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWKbfPgENF2TqDiLG4CPX6HXf1BSNq5bx-dDHbVSbVu0af_ZDY5HAGiEb6vlMDvghNa2zl78sYHupbFMW1RK6WTWJ51z0YYFDxvignykYE_-8hw34n_izc2CD4hqHZr6aX1KfzdnjZfcztUHOPoHXR71iyZ483QGJu8IA9y78eakmuRSAcAharwiPoqw1elGkHkqRdYqCqrSMe-f-lHsKB0vfo8AuDFuqVE8abV7gUT6udYzakg11J_BxXvK78ZwILJn_GNn1MVuM')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-normal dark:text-white">
                      Wanderlust Bookings
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      A modern, user-friendly travel booking platform with
                      integrated payment gateways.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Angular
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Node.js
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        PayPal API
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 group">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      data-alt="A motivational fitness app interface showing activity tracking."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMul0klKCNFjb6Op9_sAZWXu36TSu3oxN9QwWf7VRFo93wgZkO-0RT3q3TvhlJbD1XAwFryOGR1A_33B3Xo6BM6RPEjpR6B1h5OZmnBa-_1eR-w5cCMIVUM_WKHrJpICFWwDF6TaspH7pqshh0pb9t3_36I7EPcO9fX6naVF_oI25dJPDkZlVBBN4wyNRbgI9hHG5gsTx6zeHcw1eRdAQMiCO4KHjwFtkw4cZ5gkH6R_gnm0cokYTmbVLYgUROXgnDmMTqxUTVwpc')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-normal dark:text-white">
                      FitTrack Mobile App
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      A motivational fitness app for tracking workouts, setting
                      goals, and sharing progress.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Swift
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Kotlin
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Google Fit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 group">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      data-alt="A professional and secure website for a financial services company."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBu4-5tCrZZfZUQ-R8Jq5p39BifD9gz-rqDkb45UU7yrJSLoXexGpu3AbuS1xz-nq1oYTwkqMaJGXr2AHjq8IbftQwVBGPj8jsel22i1lTM7ApeYFHa-M0Kcuj1YJv7Ka1ZAIDfO6QCSTdqc_iES6IhaWG5h6tECU5grkRHj8nHdfepuJctJbUxTG7yxZ4Hw6uk4Ib_o68lO1Zo-2bn9k94FzwiInPQ3x3yd2Il7MvfETc70GLfJDz_NubMDkSPZ5cASHgoG3W6zXU')",
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold leading-normal dark:text-white">
                      FinSecure Corporate Site
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      A professional and secure web presence for a leading
                      financial services company.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Next.js
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 dark:text-blue-200 rounded-full px-2.5 py-1">
                        Contentful
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center pt-4">
                <a
                  className="flex size-10 items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">
                    <ChevronLeft />
                  </span>
                </a>
                <a
                  className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white bg-primary rounded-full"
                  href="#"
                >
                  1
                </a>
                <a
                  className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  href="#"
                >
                  2
                </a>
                <a
                  className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  href="#"
                >
                  3
                </a>
                <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full">
                  ...
                </span>
                <a
                  className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  href="#"
                >
                  8
                </a>
                <a
                  className="flex size-10 items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">
                    <ChevronRight />
                  </span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
