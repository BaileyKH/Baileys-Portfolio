import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BaileyKH | Portfolio",
  description: "Bailey is a Front-End Developer who specializes in JavaScript, TypeScript, React, Next and Tailwind CSS",
  openGraph: {
    title: "BaileyKH | Portfolio",
    description: "Bailey is a Front-End Developer who specializes in JavaScript, TypeScript, React, Next and Tailwind CSS",
    url: 'https://www.baileykh.dev/',
    siteName: "BaileyKH",
    images: [
      {
        url: '/mywebsite.png', //kinda like a thumnail I think
        width: 1260, //average size to use
        height: 800 // average size to use
      }
    ],
    locale: "en-En"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
