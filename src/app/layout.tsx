import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  description: "Software Engineer II at Tutort Academy, building SEO-optimized Next.js experiences, scalable LMS platforms, and cloud-native video delivery pipelines on AWS.",
  keywords: ["K. Shri Hari", "Shri Hari", "Software Engineer", "Tutort", "Tutort Academy", "Software Developer", "MERN stack", "Next.js", "portfolio", "web developer", "projects", "backend systems", "frontend developer", "ec2", "ecs", "sqs", "ses", "aws", "video transcoding", "lms development", "serverless", "mongodb"],
  authors: [
    {
      name: "K. Shri Hari",
      url: "https://linkedin.com/in/shari003"
    }
  ],
  alternates: {
    canonical: 'https://shri.is-a.dev',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_HOST_URI ?? "",
    siteName: "Shri Hari | Software Engineering Portfolio",
    title: "Shri Hari | Portfolio",
    description: "Full-stack engineer focused on Next.js, Node.js, and AWS, building LMS, content pipelines, and performant web platforms.",
    images: {
      url: "/assets/og/og_image.png",
      width: 1200,
      height: 630,
      alt: "Shri Hari | Portfolio",
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Hari | Portfolio",
    description: "Full-stack engineer focused on Next.js, Node.js, and AWS, building LMS, content pipelines, and performant web platforms.",
    creator: "https://x.com/nolimitshri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1BGM9930GG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BGM9930GG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
