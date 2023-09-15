import React , {useEffect,useState}from 'react'
import "./styles/Sidebar.css"
import { useSelector } from "react-redux";
import CartProduct from './CartProduct'
import { Link , useNavigate} from "react-router-dom";
const Sidebar = (props) => {
  const navigate=useNavigate();
  let {closeCart}=props;
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const [tc, setTc] = useState(0);
  const [tqty, setTqty] = useState(0);
  useEffect(() => {
    // Calculate total cost and total quantity when cartProducts change
    let totalCost = 0;
    let totalQuantity = 0;

    for (let i = 0; i < cartProducts.length; i++) {
      totalCost += cartProducts[i].price * cartProducts[i].qty;
      totalQuantity += cartProducts[i].qty;
    }

    // Update the state variables
    setTc(totalCost);
    setTqty(totalQuantity);
  }, [cartProducts]);

  return (
    <div className="side_bg">

       <div className='sidebar'>
        <div onClick={()=>{
          closeCart();
        }} className="close_btn">
         X
        </div>

         <div className='cart_products'>
          {cartProducts && cartProducts.map((cart)=>{
            return  <CartProduct  cart={cart} />
          })
           
          }         
            </div>
         <div className="cart_controls">
            <div className="cart_pricing"> TOTAL: ${tc.toFixed(2)}&nbsp;|&nbsp;{tqty===1?tqty+" Item":tqty+" Items"}</div>
            <button id="bag" className='cart_btns'>
                your bag
            </button>
            <button id="check" onClick={()=>{
              closeCart();
              localStorage.setItem("TotalCost",tc);
              navigate("/payment");
            }}className='cart_btns'>
                checkout
            </button>
         </div>
       </div>
    </div>
  )
}

export default Sidebar