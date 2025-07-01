import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Header from "./components/ui/Header";

const plexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Charles Sismondi | Technology Leader | Digital Transformation & Software Development",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexMono.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
