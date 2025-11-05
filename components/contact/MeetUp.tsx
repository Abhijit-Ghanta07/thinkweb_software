"use client";

import Script from "next/script";
import { useEffect } from "react";

export function MeetUp() {
  useEffect(() => {
    // Force Calendly refresh on spa navigation
    const interval = setInterval(() => {
      const container = document.getElementById("calendly-container");
      if (window.Calendly && container && !container.querySelector("iframe")) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/thinkwebsoftwaresolutions/contact-us",
          parentElement: container,
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div
        id="calendly-container"
        className="w-full"
        style={{ height: "800px" }}
      ></div>
    </>
  );
}
