import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { unitDisplay, unitNorms } from './data'
import { motion } from 'framer-motion'

const mainVariant = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '90vw',
    transition: { ease: 'easeInOut' },
  },
}

export default function Result({ data }) {
  // Router
  const { id } = useParams()
  const navigate = useNavigate()

  // States
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState([])

  // If quantity is qty
  const isQty = id === 'pieces'
  // UseEffect if no state value found redirect
  useEffect(() => {
    if (!data[0].price) {
      navigate('/')
    }
  }, [data, navigate])

  // Handling the result
  useEffect(() => {
    const handleResult = () => {
      let newData
      if (isQty) {
        newData = data
          .map((item, i) => {
            return {
              ...item,
              item: i,
              rank: item.price / item.quantity,
            }
          })
          .sort((a, b) => a.rank - b.rank)
      } else {
        newData = data
          .map((item, i) => {
            return {
              ...item,
              item: i,
              rank: item.price / (item.quantity * unitNorms[item.unit]),
            }
          })
          .sort((a, b) => a.rank - b.rank)
      }
      setResult(newData)
      setIsLoading(false)
    }
    if (data[0].price) {
      handleResult()
    }
  }, [])

  return (
    <motion.div
      variants={mainVariant}
      animate="animate"
      initial="initial"
      exit="exit"
      className="result"
    >
      {console.log(result)}
      {isLoading ? (
        <p className="loadingResult">Please Wait Calculating</p>
      ) : result.length > 0 ? (
        <div className="resultBox">
          <p className="mainText">
            <span className="bold">Item {result[0].item + 1}</span> ,{' '}
            <span className="bold">
              {result[0].quantity}
              {isQty ? 'Units' : unitDisplay[result[0].unit][id]}
            </span>{' '}
            for price <span className="bold color1">{result[0].price}₹</span>{' '}
            will be profitable
          </p>

          <p className="rate">
            Giving Rate/Rank :{' '}
            <span className="color2">
              {result[0].rank.toFixed(4)} ₹/{isQty ? 'unit' : unitDisplay.u[id]}
            </span>
          </p>
          <p className="allList">All lists :</p>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.item}>
                  <td>Item {item.item + 1}</td>
                  <td>
                    {item.quantity}
                    {isQty ? 'Unit' : unitDisplay[item.unit][id]}
                  </td>
                  <td>{item.price}₹</td>
                  <td>{item.rank.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </motion.div>
  )
}
