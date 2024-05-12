import React, { useContext } from 'react';
import './order.css';
import { StoreContext } from '../../context';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    // "Making Form to the Placing Order Section"
  <form  className="place-order" id="place-order">
    {/* place order left-side */}
    <div className="place-order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
      </div>
      <input type="email" placeholder='Email address' />
      <input type="text" placeholder='street'/>
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
           <b>Total</b>
           <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
    </div>
  </form>
  )
}

export default PlaceOrder;