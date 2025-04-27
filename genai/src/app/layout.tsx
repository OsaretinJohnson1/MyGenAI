import type { Metadata } from "next";
import { Inter, Pacifico, Comic_Neue } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});
const comicNeue = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-comic-neue",
});

export const metadata: Metadata = {
  title: "Osaretin Johnson",
  description: "This is my portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/avatar.png" type="image/png" />
      </Head>
      <body
        className={`${inter.className} ${pacifico.variable} ${comicNeue.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
