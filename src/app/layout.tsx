import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientInit from "@/components/ClientInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nemesis - Affordable Web Development Services",
  description: "Professional and affordable web development services based in the Philippines. We specialize in modern design and development solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ClientInit />
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
