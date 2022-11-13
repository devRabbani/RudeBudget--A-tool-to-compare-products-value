import { useState } from 'react'
import { MdHelp, MdHelpOutline, MdHighlightOff, MdWest } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './modal'

export default function Nav({ isHome }) {
  const navigate = useNavigate()
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <nav>
        {!isHome ? <MdWest onClick={() => navigate(-1)} /> : <div />}
        <Link to="/">RudeBudget</Link>
        <MdHelpOutline onClick={() => setIsModal(true)} />
      </nav>
      {isModal ? <Modal setIsModal={setIsModal} /> : null}
    </>
  )
}
