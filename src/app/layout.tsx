import './globals.css'
import type { Metadata } from 'next'

import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import NavList from '../../Components/NavList'



export const metadata: Metadata = {
  title: 'Plumbers | Plumber Services | Plumbing Work | Bathroom',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className="relative">
        <Nav/>
        <NavList/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
