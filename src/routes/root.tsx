// import logo from "../logo.svg"
// import { Counter } from "../features/menu/Counter"
import { Outlet } from 'react-router-dom'
import Footer from '@/components/layout/Footer'

import { appConfig } from '@config/app.config'
import { Navbar } from '@components/navbar/Navbar'

const Root = () => {
  return (
    <>
      <Navbar title={appConfig.title} subtitle={appConfig.subtitle} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
