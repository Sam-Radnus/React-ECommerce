import React from 'react';
import "./styles/ProductOrderForm.css"
function ProductOrderForm() {
  return (
    <div className="payment_container">
      <div className="title">
        <h2>Product Order Form</h2>
      </div>
      <div className="d-flex">
        <form action="" method="">
          <label>
            <span className="fname">First Name <span className="required">*</span></span>
            <input type="text" name="fname" />
          </label>
          <label>
            <span className="lname">Last Name <span className="required">*</span></span>
            <input type="text" name="lname" />
          </label>
        
          <label>
            <span>Country <span className="required">*</span></span>
            <select name="selection">
              <option value="select">Select a country...</option>
              {/* Add the rest of the options here */}
            </select>
          </label>
          <label>
            <span>Street Address <span className="required">*</span></span>
            <input type="text" name="houseadd" placeholder="House number and street name" required />
          </label>
          <label>
            <span>&nbsp;</span>
            <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)" />
          </label>
          <label>
            <span>Town / City <span className="required">*</span></span>
            <input type="text" name="city" />
          </label>
          <label>
            <span>State / County <span className="required">*</span></span>
            <input type="text" name="state" />
          </label>
          <label>
            <span>Postcode / ZIP <span className="required">*</span></span>
            <input type="text" name="postcode" />
          </label>
          <label>
            <span>Phone <span className="required">*</span></span>
            <input type="tel" name="phone" />
          </label>
          <label>
            <span>Email Address <span className="required">*</span></span>
            <input type="email" name="email" />
          </label>
        </form>
        <div className="Yorder">
          <table>
            <tr>
              <th colSpan="2">Your order</th>
            </tr>
            <tr>
              <td>Product Name x 2(Qty)</td>
              <td>$88.00</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>$88.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free shipping</td>
            </tr>
          </table>
          <br />
          <div>
            <input type="radio" name="dbt" value="dbt" checked /> Direct Bank Transfer
          </div>
          
          <div>
            <input type="radio" name="dbt" value="cd" /> Cash on Delivery
          </div>
          
          <button type="button">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default ProductOrderForm;
