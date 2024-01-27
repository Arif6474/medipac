import 'react-toastify/dist/ReactToastify.css';
import './antopolis.css'
import './globals.css'
import { ToastContainer } from 'react-toastify';
import Footer from '@/partials/sections/footer/Footer'
import Navbar from '@/partials/sections/navbar/Navbar'

export const metadata = {
  title: 'Medipac | Home',
  description: 'Innovate Smarter, Invest Wiser',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
