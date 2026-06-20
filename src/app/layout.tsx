import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Sai Sammeta | Software Engineer & AI Engineer",
  description: "Personal portfolio of Akhil Sai Sammeta, building software, AI systems, and scalable digital products that solve real-world problems.",
  keywords: ["Akhil Sai Sammeta", "Software Engineer", "AI Engineer", "Full Stack Developer", "Modern Portfolio", "Telugu Developer"],
  authors: [{ name: "Akhil Sai Sammeta" }],
  openGraph: {
    title: "Akhil Sai Sammeta | Portfolio",
    description: "Personal portfolio of Akhil Sai Sammeta, building software, AI systems, and scalable digital products.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
