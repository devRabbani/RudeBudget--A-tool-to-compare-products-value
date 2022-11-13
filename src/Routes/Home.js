import Lottie from 'lottie-react'
import { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import homeAnimation from '../animations/productAnimation'

export default function Home() {
  const navigate = useNavigate()
  const [type, setType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${type}`)
  }

  return (
    <div className="home">
      <div>
        <Lottie loop animationData={homeAnimation} />
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
          <button type="submit">Next<MdNavigateNext/></button>
        </form>
      </div>
    </div>
  )
}
