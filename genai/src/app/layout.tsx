import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { pacifico, comicNeue } from "./fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My AI Assistant",
  description: "Ask me anything about my experience and skills!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${pacifico.variable} ${comicNeue.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
