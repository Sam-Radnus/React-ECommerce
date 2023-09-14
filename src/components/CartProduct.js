import React from 'react'
import Number from './Number';
import "./styles/CartProduct.css"
const CartProduct = (props) => {;
    const {productName,productImage}=props;
  return (
    <div className="cart_product_container">
    <div className="cart_product">
            <div><h4>{productName}</h4> <br/><span>M</span><br/><span>$56.00</span> </div>
            <div><img src={productImage} height="114" width="81"/></div>
    </div>
    <div className="cart_product_price">
         <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></div>
         <div style={{marginTop:'-6px'}}><Number/></div>
         <div>$122.00</div>
    </div>
    </div>
  )
}

export default CartProduct