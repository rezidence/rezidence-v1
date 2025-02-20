import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/app/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rezidence",
  description: "A platform for property owners and renters to connect and manage properties.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
