import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import resultAnimation from '../animations/resultAnimation.json'
import Lottie from 'lottie-react'
import { unitDisplay, unitNorms } from './data'

export default function Result() {
  // Router
  const { state: data } = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  // States
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState([])

  // If quantity is qty
  const isQty = id === 'qty'
  // UseEffect if no state value found redirect
  useEffect(() => {
    if (!data) {
      navigate('/')
    }
  }, [data, navigate])

  // Handling the result
  useEffect(() => {
    const handleResult = () => {
      let newData
      if (isQty) {
        newData = data
          .map((item) => {
            return {
              ...item,
              rank: item.price / item.quantity,
            }
          })
          .sort((a, b) => a.rank - b.rank)
      } else {
        newData = data
          .map((item) => {
            return {
              ...item,
              rank: item.price / (item.quantity * unitNorms[item.unit]),
            }
          })
          .sort((a, b) => a.rank - b.rank)
      }
      setResult(newData)
      setIsLoading(false)
    }
    handleResult()
  }, [data])

  return (
    <div className="result">
      {console.log(isLoading, result)}
      {isLoading ? (
        <div className="loadingResult">
          <Lottie loop animationData={resultAnimation} />
          <p>Please Wait Calculating</p>
        </div>
      ) : (
        <div className="resultBox">
          <p className="mainText">
            <span className="bold">Item {result[0].item}</span> ,{' '}
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
                <tr>
                  <td>Item {item.item}</td>
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
      )}
    </div>
  )
}
