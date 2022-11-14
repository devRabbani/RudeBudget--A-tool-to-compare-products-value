import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import homeAnimation from '../animations/productAnimation'
import { FcStatistics } from 'react-icons/fc'

export default function Home({ dispatch }) {
  const navigate = useNavigate()
  const [type, setType] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'RESET' })
    navigate(`/${type}`)
  }

  return (
    <div className="home">
      <div className="homeBox">
        <div className="modal">
          {isLoaded ? null : <FcStatistics className="modelIcon" />}
          <Lottie
            style={{ display: isLoaded ? 'block' : 'none' }}
            loop
            onLoadedImages={() => console.log('LoadedImg')}
            onDataReady={() => console.log('dataReady')}
            onDOMLoaded={() => setIsLoaded(true)}
            animationData={homeAnimation}
          />
        </div>
        <form onSubmit={handleSubmit} className="homeForm">
          <select
            required
            onChange={(e) => setType(e.target.value)}
            className="homeSelect"
          >
            <option value="">Choose Type</option>
            <option value="weight">Weight</option>
            <option value="volume">Volume</option>
            <option value="qty">Quantity (Eg: 2 bag)</option>
            <option value="distance">Distance</option>
            <option value="common">Common</option>
          </select>
          <button type="submit">
            Next
            <MdNavigateNext />
          </button>
        </form>
      </div>
    </div>
  )
}
