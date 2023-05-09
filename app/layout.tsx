import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navigation/Navbar'
import Container from './components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Charles Cole',
  description: 'Software Engineer and Political Economist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-marble-tall lg:bg-marble h-screen lg:bg-cover">
          <Container>
            <Navbar />
            {children}
          </Container>
        </main>
      </body>
    </html>
  )
}
