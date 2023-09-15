import React from 'react';
import "./styles/ProductOrderForm.css"
import { Link,useNavigate } from "react-router-dom";
function ProductOrderForm() {
  const navigate=useNavigate();
  const [finalCost,setFinalCost]=React.useState(parseFloat(localStorage.getItem("TotalCost")));
  return (
    <div className='outer_wrapper'>
    <div className="payment_wrapper">
    <div className="payment_container">

        <form action="">
            <p style={{fontSize:"1vw !important",width:"100%"}}>
                <i className="fas fa-shipping-fast"></i>
                Shipping Details
            </p>
            

            <div className="name">
                <div>
                    <label for="f-name">First</label>
                    <input type="text" name="f-name"/>
                </div>
                <div>
                    <label for="l-name">Last</label>
                    <input type="text" name="l-name"/>
                </div>
            </div>
            <div className="street">
                <label for="name">Street</label>
                <input type="text" name="address"/>
            </div>
            <div className="address-info">
                <div>
                    <label for="city">City</label>
                    <input type="text" name="city"/>
                </div>
                <div>
                    <label for="state">State</label>
                    <input type="text" name="state"/>
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input type="text" name="zip"/>
                </div>
            </div>
            <p style={{fontSize:"1vw !important"}}>
              Payment Information
            </p>
            <div className="cc-num">
                 <p style={{lineHeight:"12px",fontSize:"1vw !important"}}>Total Amount:${finalCost.toFixed(2)}</p>
            </div>
              <div className="cc-num">
                <label for="card-num">Credit Card No.</label>
                <input type="text" name="card-num"/>
            </div>
            <div className="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="text" name="expire"/>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security"/>
                </div>
            </div>
            <div className="btns">
                <button>Purchase</button>
                <button onClick={()=>{
                  navigate("/");
                }}>Back</button>
            </div>
        </form>
    </div>
</div>
</div>
  );
}

export default ProductOrderForm;
