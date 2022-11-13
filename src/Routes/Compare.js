import { useState } from 'react'
import {
  MdAdd,
  MdCompareArrows,
  MdProductionQuantityLimits,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import { BiRupee } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { unitsMap } from './data'

export default function Compare() {
  // Navigation
  const navigate = useNavigate()
  const { id } = useParams()

  const [data, setData] = useState([
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
  ])

  const handleClick = (e) => {
    e.preventDefault()
    setData((prev) => [
      ...prev,
      {
        item: data.length + 1,
        quantity: '',
        unit: '',
        price: '',
      },
    ])
  }

  const handleRemove = (e, i) => {
    e.preventDefault()
    const newData = data.filter((product) => product.item !== i)
    console.log(newData)
    setData(newData)
  }

  const handleChange = (e, i) => {
    const { name, value } = e.target
    const newData = [...data]
    newData[i][name] = value
    setData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('result', { state: data })
  }

  return (
    <div className="compare">
      <h3>Add items to compare</h3>
      <form onSubmit={handleSubmit}>
        {data.map((item, i) => (
          <div key={item.item} className="itemDiv">
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
            </div>
          </div>
        ))}
        <div className="btnDivWrapper">
          <div className="btnDiv">
            <button onClick={handleClick}>
              <MdAdd /> Add More
            </button>
            <button type="submit">
              <MdCompareArrows /> Compare
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
