import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { LocaleProvider } from "@/hooks/use-locale"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "ExpressMaroc - خدمة التوصيل السريع في المغرب",
  description: "منصة التوصيل الرائدة في المغرب - سريع، موثوق، وبأسعار معقولة",
  generator: "ExpressMaroc",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
