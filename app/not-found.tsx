"use client";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 py-20">
      <div className="text-center max-w-lg">
        {/* Emoji/Icon */}
        <div className="text-7xl mb-4">😕</div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or no longer exists.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Go Back button */}
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>

          {/* View Services button */}
          <Link
            href="/services"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
