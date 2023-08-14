

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    // case 'ADDITEM':
    // //kiem tra san pham da co chua
    // const exist = state.find((x) => x.id === product.id)
    // if (exist) {
    //   //tang so luong san  pham
    //   return state.map((x) =>
    //     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
    //   )
    // } else {
    //   const product = action.payload
    //   return [...state, { ...product, qty: 1 }]
    // }
    case "ADDITEM": return [
      ...state,
      action.payload
    ]
      break;
    case "DELITEM":
      return state = state.filter((x) => {
        return x.id !== action.payload.id
      })
    default:
      return state;
      break;
  }
}

export default handleCart