import React from "react";
import Headings from "../Components/Headings";
import shoes from "../assets/shoes.jpg";
import CartCard from "../Components/CartCard";
import Button from "../Components/Button";
const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto sm:py-10 py-5 px-2 text-primary">
      {/* Heading of the page */}
      <div className="py-3">
        <Headings text1={"Your"} text2={"Cart"} lineBreak={false} />
      </div>

      {/* Cart Items Section   */}
      <CartCard/>
      <CartCard/>
      <CartCard/>
      <CartCard/>

      <div className="sm:flex sm:justify-end">
 <div className="mt-10 ">

        <div className="py-5">
          <Headings text1={"Cart"} text2={"Totals"} lineBreak={false} />
        </div>
          

          {/* Cost Section */}
          <div className="">
              <div className="flex justify-between py-2 border-t">
                <p>Subtotal</p>
                <p>$123</p>
              </div>

              <div className="flex justify-between py-2 border-t">
                <p>Shipping fee</p>
                <p>$123</p>
              </div>


              <div className="flex justify-between py-2 border-t">
                <p>Total</p>
                <p>$123</p>
              </div>

              <div className="mt-5 max-w-50">
                <Button>Proceed To Checkout</Button>
              </div>
              
          </div>
      </div>
      </div>
     
    </div>
  );
};

export default Cart;
