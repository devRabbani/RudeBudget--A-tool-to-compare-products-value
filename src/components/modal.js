import { MdCancel } from 'react-icons/md'
import { motion } from 'framer-motion'

const mainVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { ease: 'linear' } },
}

export default function Modal({ setIsModal }) {
  return (
    <motion.div
      variants={mainVariant}
      animate="animate"
      initial="initial"
      exit="exit"
      className="modalWrapper"
    >
      <div className="modalDiv">
        <div className="modalNav">
          <div></div>
          <p className="logo">RudeBudget</p>
          <motion.span
            whileTap={{ scale: 0.9, color: '#bc2929' }}
            className="navIcon navMarginLeft"
          >
            <MdCancel onClick={() => setIsModal(false)} />
          </motion.span>
        </div>
        <div className="modalBody">
          <h3>Info:</h3>
          <p>
            This app will help users to compare products value and quantity.
            Basically it will give you the best profitable products among the
            compared list. Eg: 255gm Butter for 20₹ or 1.2Kg Butter for 460₹
            which one is profitable??
          </p>
          <p>
            This app is developed by{' '}
            <a
              href="https://www.canwebe.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              CanWeBe!
            </a>
          </p>
          <p className="bugReport">
            For bug report or suggestion contact CanWeBe!
          </p>

          <h3>Steps:</h3>

          <ol>
            <li>First choose product type. (Like weight,distance)</li>
            <li>
              After that add item quantity ,price and unit . You can choose
              diffrent units from the select option.
            </li>
            <li>You can add or compare upto 5 items</li>
            <li>Now just click compare, Finish</li>
            <li>Enjoy.</li>
          </ol>

          <h3>Credits:</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lottiefiles.com/65251-product-hunt-lottie-animation"
              >
                Animation by S M Rony
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com/icon/14270/water"
              >
                Water
              </a>{' '}
              icon by{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com"
              >
                Icons8
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com/icon/0xW7diYXLEsn/numbers"
              >
                Numbers
              </a>{' '}
              icon by{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com"
              >
                Icons8
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com/icon/cXkRPiHClzjm/weight"
              >
                Weight
              </a>{' '}
              icon by{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://icons8.com"
              >
                Icons8
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
