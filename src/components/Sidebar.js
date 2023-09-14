import React from 'react'
import "./styles/Sidebar.css"

import CartProduct from './CartProduct'
const Sidebar = (props) => {
  let {closeCart}=props;
  return (
    <div className="side_bg">
       <div className='sidebar'>
        <div onClick={()=>{
          closeCart();
        }} className="close_btn">
         X
        </div>

         <div className='cart_products'>
            <CartProduct  productName="black shirt" productImage="https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F6f8c3f7f-985c-4e3d-9dd9-21540b7766e2%2Fessential-sweatshirt-black-1.jpg?alt=media&token=e3126aae-48b7-4dfc-a63f-329fea819fdd"/>
            <CartProduct  productName="black shirt" productImage="https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F6f8c3f7f-985c-4e3d-9dd9-21540b7766e2%2Fessential-sweatshirt-black-1.jpg?alt=media&token=e3126aae-48b7-4dfc-a63f-329fea819fdd"/>
         </div>
         <div className="cart_controls">
            <div className="cart_pricing"> TOTAL: $122&nbsp;|&nbsp;2 Items</div>
            <button id="bag" className='cart_btns'>
                your bag
            </button>
            <button id="check" className='cart_btns'>
                checkout
            </button>
         </div>
       </div>
    </div>
  )
}

export default Sidebar