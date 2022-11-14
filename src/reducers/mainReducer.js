export default function MainReducer(state, action) {
  switch (action.type) {
    case 'ADD_MORE':
      return [
        ...state,
        {
          item: state.length + 1,
          quantity: '',
          unit: '',
          price: '',
        },
      ]
    case 'REMOVE':
      const newData = state.filter((product) => product.item !== action.payload)
      return newData
    case 'CHANGE':
      const changeData = [...state]
      changeData[action.payload.i][action.payload.name] = action.payload.value
      return changeData
    case 'RESET':
      return [
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
      ]

    default:
      return state
  }
}
