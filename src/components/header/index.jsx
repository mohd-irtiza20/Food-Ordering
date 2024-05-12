import React from 'react';
import './header.css';

const Header = () => {
  return (
   <div className='header'>
       <div className='header-contents'>
        <h2>Order your favouritr food here</h2>
        <p>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and satisfy your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
    </div>
   </div>
  )
}

export default Header;