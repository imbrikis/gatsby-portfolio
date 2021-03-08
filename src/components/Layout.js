import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={sidebarIsOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
