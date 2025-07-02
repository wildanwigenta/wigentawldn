import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildan Wigenta",
  description: "Portfolio website of Wildan Wigenta, a passionate Computer Science student specializing in Web Development and Graphic Design.",
  keywords: ["Web Developer", "Graphic Designer", "Portfolio", "Next.js", "React", "Tailwind CSS"],
  authors: [{ name: "Wildan Wigenta" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Wildan Wigenta",
    description: "Portfolio website of Wildan Wigenta, a passionate Computer Science student specializing in Web Development and Graphic Design.",
    url: "https://wildanwigenta.vercel.app",
    siteName: "Wildan Wigenta Portfolio",
    images: [
      {
        url: "https://wildanwigenta.vercel.app/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Wildan Wigenta Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
