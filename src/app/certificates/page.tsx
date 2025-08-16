"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const certificates = [
  {
    title: "PT Lauwba Techno Indonesia",
    src: "/certificate/s_lauwba.jpg",
  },
  {
    title: "Google Developers",
    src: "/certificate/s_gd.png",
  },
  {
    title: "Webinar Cyber Security",
    src: "/certificate/s_c.png",
  },
  {
    title: "Google Developers",
    src: "/certificate/s_gd2.png",
  },
  {
    title: "Samsung Inovation",
    src: "/certificate/s_s.jpg",
  },
];

export default function CertificatesPage() {
  const router = useRouter();

  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        {" "}
        ← Back{" "}
      </button>

      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        My Certificate
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-card-bg border border-border rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={cert.src}
              alt={cert.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center text-white font-semibold">
              {cert.title}
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-12 text-center">
        <a
          href="https://drive.google.com/drive/folders/1j_uSXCGaSjx0OPMzc9R0SWSwqpYsO2G-?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          All Certificate →
        </a>
      </div>
    </main>
  );
}