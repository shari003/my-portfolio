import Home from "@/ui/components/pages/home";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
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
      // url: "https://shrihari.dev",
      // images: {
      //   url: "https://shrihari.dev/images/og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Shri Hari | Portfolio",
      // }
    },
    twitter: {
      title: "Shri Hari | Portfolio",
      description: "Explore the portfolio of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
    },
    // icons: {
    //   icon: "",
    //   apple: "",
    //   shortcut: ""
    // }
  };

}

export default function App() {
  return <Home />;
}
