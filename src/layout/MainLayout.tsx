import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Analytics } from "@vercel/analytics/react"

const MainLayout = () => {
  
  return (
    <>
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
    <Analytics />
    </>
  )
}

export default MainLayout
