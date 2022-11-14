import { useRef, useState } from 'react'
import {
  MdAdd,
  MdCompareArrows,
  MdProductionQuantityLimits,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import { BiRupee } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { unitsMap } from './data'
import { AnimatePresence, motion } from 'framer-motion'

const mainVariant = {
  initial: {
    opacity: 0,
    x: '60vw',
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '-90vw',
    transition: { ease: 'easeInOut' },
  },
}
const btnDivVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '-90vw',
    transition: { ease: 'easeInOut' },
  },
}
const btnVariant1 = {
  tap: { backgroundColor: '#1141a9', y: -2 },
  hover: { backgroundColor: '#1e56cf', gap: '15px' },
}
const btnVariant2 = {
  tap: (isMax) => ({
    backgroundColor: '#525252',
    y: isMax ? 0 : -2,
    x: isMax ? [3, -3, 3, -3, 3, -3, 3, -3, 0] : 0,
   
  }),
  hover: { backgroundColor: '#6a6a6a', gap: '15px' },
}

export default function Compare({ data, dispatch }) {
  // Ref
  const btnRef = useRef()
  // Navigation
  const navigate = useNavigate()
  const { id } = useParams()
  // Checking max limit
  const isMax = data.length > 4
  // Adding one more
  const handleAdd = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_MORE' })
  }

  // Removing Data
  const handleRemove = (e, i) => {
    e.preventDefault()
    dispatch({ type: 'REMOVE', payload: i })
  }

  // Changing Fields
  const handleChange = (e, i) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', payload: { name, value, i } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('result', { state: data })
  }

  return (
    <>
      <motion.div
        variants={mainVariant}
        animate="animate"
        initial="initial"
        exit="exit"
        className="compare"
      >
        <h3>Add items to compare</h3>
        {console.log(data)}
        <motion.form onSubmit={handleSubmit}>
          <AnimatePresence initial={false}>
            {data.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, x: 100, height: 'auto' }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{
                  opacity: 0,
                  x: -100,
                  height: 0,
                  transition: { height: { delay: 0.4 } },
                }}
                key={item.item}
              >
                <div className="itemDiv">
                  <div className="twoCol">
                    <label>Item {i + 1}</label>{' '}
                    {item.item > 2 ? (
                      <button onClick={(e) => handleRemove(e, item.item)}>
                        Remove
                        <MdRemoveCircleOutline />
                      </button>
                    ) : null}
                  </div>
                  <div className="twoCol">
                    <div className="inputDiv">
                      <input
                        type="number"
                        name="quantity"
                        placeholder="Enter quantity"
                        value={item.quantity}
                        required
                        onChange={(e) => handleChange(e, i)}
                      />
                      <MdProductionQuantityLimits />
                    </div>
                    {id !== 'qty' ? (
                      <select
                        onChange={(e) => handleChange(e, i)}
                        required
                        name="unit"
                        value={item.unit}
                      >
                        <option value="">Unit</option>
                        {unitsMap[id].map((unit) => (
                          <option key={unit.name} value={unit.value}>
                            {unit.name}
                          </option>
                        ))}
                      </select>
                    ) : null}
                  </div>
                  {console.log(item.quantity, item.price)}
                  <div className="inputDiv">
                    <input
                      onChange={(e) => handleChange(e, i)}
                      required
                      type="number"
                      name="price"
                      placeholder="Enter price"
                      value={item.price}
                    />
                    <BiRupee />
                  </div>{' '}
                </div>
              </motion.div>
            ))}
            <button ref={btnRef} style={{ display: 'none' }} type="submit">
              Submit
            </button>
          </AnimatePresence>
        </motion.form>
      </motion.div>

      <motion.div
        variants={btnDivVariant}
        animate="animate"
        initial="initial"
        exit="exit"
        className="btnDivWrapper"
      >
        <div className="btnDiv">
          <motion.button
            variants={btnVariant2}
            whileHover="hover"
            whileTap="tap"
            custom={isMax}
            onClick={handleAdd}
            disabled={isMax}
          >
            {isMax ? (
              'Max'
            ) : (
              <>
                <MdAdd /> Add More
              </>
            )}
          </motion.button>
          <motion.button
            variants={btnVariant1}
            whileHover="hover"
            whileTap="tap"
            onClick={() => btnRef.current.click()}
          >
            <MdCompareArrows /> Compare
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
