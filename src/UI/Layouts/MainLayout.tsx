import { Suspense } from 'react'
import { Footer } from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { Overlay } from '../Components/Overlay/Overlay'
import { mainLayout } from './LayoutRecipes.css'
type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={`${mainLayout()}`}>
      <Overlay />
      <Header />
      <main>{children}</main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}

export default MainLayout
