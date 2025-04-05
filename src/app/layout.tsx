import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo - Full Stack Developer",
  description:
    "Portfolio of Rodrigo, a Full Stack Developer with over 5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-fixed relative`}>{children}</body>
    </html>
  );
}
