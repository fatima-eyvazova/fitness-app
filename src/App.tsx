import { useEffect, useState } from 'react'
import Navbar from "@/components/Navbar"
import Home from '@/components/Home/Home'
import Benefits from '@/components/Benefits/Benefits'
import { SelectedPage } from '@/shared/types'
import './App.css'
import OurClasses from './components/OurClasses/OurClasses'
import ContactUs from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setisTopOfPage] = useState<boolean>(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setisTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) (setisTopOfPage(false))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />

    </div>
  )
}

export default App
