export const addToCart = (item) => {
    console.log(item)
    return {
      type: 'ADD_TO_CART',
      payload: item,
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    };
  };
  export const updateCart = (item,qty) => {
    return {
      type: 'UPDATE_FROM_CART',
      payload: [item,qty],
    };
  };
  export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };