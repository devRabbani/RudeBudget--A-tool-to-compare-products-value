import { Route, Routes, useLocation } from 'react-router-dom'
import Compare from './Routes/Compare'
import Footer from './components/footer'
import Nav from './components/nav'
import Home from './Routes/Home'
import Result from './Routes/Result'

export default function Pages() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return (
    <>
      <Nav isHome={isHome} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Compare />} />
          <Route path="/:id/result" element={<Result />} />
        </Routes>
      </main>
      {isHome ? <Footer /> : null}
    </>
  )
}
