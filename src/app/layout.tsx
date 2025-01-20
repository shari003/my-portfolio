import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URI ?? ""),
  title: "Shri Hari | Portfolio",
  description: "Explore the portfolio of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
  keywords: ["K. Shri Hari", "Shri Hari", "Software Engineer", "Tutort", "Tutort Academy", "Software Developer", "MERN stack", "Next.js", "portfolio", "web developer", "projects", "backend systems", "frontend developer"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shri Hari | Portfolio",
    description: "Explore the portfolio of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
    type: "website",
    url: process.env.NEXT_PUBLIC_HOST_URI ?? "",
    images: {
      url: "/assets/og/og_image.png",
      width: 1200,
      height: 630,
      alt: "Shri Hari | Portfolio",
    }
  },
  twitter: {
    title: "Shri Hari | Portfolio",
    description: "Explore the portfolio of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
