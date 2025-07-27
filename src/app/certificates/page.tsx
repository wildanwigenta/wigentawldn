'use client';

import Image from 'next/image';

const certificates = [
  {
    title: 'Frontend Web Development',
    src: '/certificates/frontend.jpg',
  },
  {
    title: 'UI/UX Design',
    src: '/certificates/uiux.jpg',
  },
  
];

export default function CertificatesPage() {
  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        My Certificates
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
    </main>
  );
}
