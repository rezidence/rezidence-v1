import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/app/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rental App",
  description: "Find your perfect rental property",
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
