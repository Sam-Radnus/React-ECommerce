// reducers/cartReducer.js
const initialState = {
    cartItems: [], // An array to store cartItems in the cart
  };
  
export const cartReducers = (state = initialState, action) => {

    console.log("hello")
    switch (action.type) {
      case 'ADD_TO_CART':
        console.log(state);
        console.log(action.payload);
        action.payload.qty=1;
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.title !== action.payload.title),
        };
      case 'UPDATE_FROM_CART':
        let updItem=action.payload[0];
        let updQty=action.payload[1];
        const itemIndex=state.cartItems.findIndex((item)=>item.title===updItem.title);
        if(itemIndex!==-1){
           const UpdatedCartItems=[...state.cartItems];
           UpdatedCartItems[itemIndex]={
            ...UpdatedCartItems[itemIndex],
            qty:updQty
           }
           return {
            ...state,
           cartItems:[...UpdatedCartItems]
           }
        }
        return {
          ...state,
          cartItems:[...state.cartItems]
        }
      case 'CLEAR_CART':
        return {
          ...state,
          cartItems: [],
        };
      default:
        return state;
    }
  };
  

  