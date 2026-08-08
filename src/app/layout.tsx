import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: "Skill-Mart",
    template: "%s | Skill-Mart",
  },
  description: "Skill-Mart is a modern marketplace where you can discover, buy, sell, and showcase skills, services, and digital products.",
  keywords: [
    "Skill-Mart",
    "skills marketplace",
    "digital marketplace",
    "freelance services",
    "online skills",
    "digital products",
  ],
  authors: [{ name: "Skill-Mart" }],
  creator: "Skill-Mart",
  applicationName: "Skill-Mart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="white"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}