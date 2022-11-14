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

export default function Compare({ data, dispatch }) {
  // Navigation
  const navigate = useNavigate()
  const { id } = useParams()

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

  console.log('yeh data hai', data)

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
            <button onClick={handleAdd}>
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
