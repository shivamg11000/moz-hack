import React from 'react';
import './Cart.css';

class Cart extends React.Component{
  render(){
    return(
      <div class="cart">
          <div id= "product">
            <div id="border"></div>
            <div id="product-img"><img src="https://images-eu.ssl-images-amazon.com/images/I/41MEwa8a3CL._SS100_.jpg" />
            </div>
          <div id= "desc">
              <h2 class = "product-name"> Product Name: iphone</h2>
              <span>
              Price:9999</span>
                              
          </div>
          <div id="border"></div>
          
      </div>
        <div id ="checkpay">
            <div>
                <h2 id="checkbox">subtotal</h2>
                <button id="proceed">Proceed to checkout</button>
            </div>          
        </div>
      </div>
    );
  }
}

export default Cart;
