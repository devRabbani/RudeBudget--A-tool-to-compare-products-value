import Lottie from 'lottie-react'
import { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import homeAnimation from '../animations/productAnimation'
import { motion } from 'framer-motion'

const mainVariant = {
  initial: {
    opacity: 0,
    y: '50vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { ease: 'easeInOut' },
  },
}

const lottieVariant = {
  initial: {
    opacity: 0,
  },
  animate: (isLoaded) => ({
    opacity: isLoaded ? 1 : 0,
  }),
}

const btnVariant = {
  tap: { backgroundColor: '#1141a9', gap: '12px' },
  hover: { backgroundColor: '#1e56cf', y: 2 },
}

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
    <motion.div
      variants={mainVariant}
      animate="animate"
      initial="initial"
      exit="exit"
      className="home"
    >
      <div className="homeBox">
        <div className="modal">
          <motion.span
            variants={lottieVariant}
            animate="animate"
            initial="initial"
            custom={isLoaded}
          >
            <Lottie
              loop
              className="modelSvg"
              onDOMLoaded={() => setIsLoaded(true)}
              animationData={homeAnimation}
            />
          </motion.span>
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
            <option value="pieces">Pieces (Eg: 2 bag)</option>
            <option value="distance">Distance</option>
            <option value="common">Common</option>
          </select>
          <motion.button
            variants={btnVariant}
            whileTap="tap"
            whileHover="hover"
            type="submit"
          >
            Next
            <MdNavigateNext />
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}
