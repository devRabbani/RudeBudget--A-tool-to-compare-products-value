import { Route, Routes, useLocation } from 'react-router-dom'
import Compare from './Routes/Compare'
import Footer from './components/footer'
import Nav from './components/nav'
import Home from './Routes/Home'
import Result from './Routes/Result'
import Border from './components/border'
import { useReducer } from 'react'
import MainReducer from './reducers/mainReducer'

const INITIAL_STATE = [
  {
    item: 1,
    quantity: '',
    unit: '',
    price: '',
  },
  {
    item: 2,
    quantity: '',
    unit: '',
    price: '',
  },
]

export default function Pages() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  // States and reducer
  const [state, dispatch] = useReducer(MainReducer, INITIAL_STATE)

  return (
    <>
      <Border />
      <Nav isHome={isHome} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home dispatch={dispatch} />} />
          <Route
            path="/:id"
            element={<Compare data={state} dispatch={dispatch} />}
          />
          <Route
            path="/:id/result"
            element={<Result data={state} dispatch={dispatch} />}
          />
        </Routes>
      </main>
      {isHome ? <Footer /> : null}
    </>
  )
}
