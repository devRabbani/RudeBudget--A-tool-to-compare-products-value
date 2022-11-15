import { useState } from 'react'
import {  MdHelpOutline, MdWest } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './modal'
import { AnimatePresence, motion } from 'framer-motion'

const btnVariant = {
  hover: {
    color: '#f51919',
  },
  tap: {
    x: -10,
  },
}

export default function Nav({ isHome }) {
  const navigate = useNavigate()
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <nav>
        {!isHome ? (
          <motion.span
            variants={btnVariant}
            whileHover="hover"
            whileTap="tap"
            className="navIcon"
          >
            <MdWest onClick={() => navigate(-1)} />
          </motion.span>
        ) : (
          <div />
        )}
        <Link to="/">RudeBudget</Link>
        <motion.span
          whileTap={{ scale: 0.9 }}
          className="navIcon navMarginLeft"
        >
          <MdHelpOutline onClick={() => setIsModal(true)} />
        </motion.span>
      </nav>
      <AnimatePresence initial={false}>
        {isModal ? <Modal setIsModal={setIsModal} /> : null}
      </AnimatePresence>
    </>
  )
}
