"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background">
      <h1 className="text-6xl font-bold text-accent-pink">404</h1>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-pink rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}