import React from 'react'
import shoes from "../assets/shoes.jpg";
const CartCard = () => {
  return (
          <div className="flex flex-col  sm:flex-row sm:items-center justify-between border-t pt-5 mt-5 gap-4 sm:gap-0">
  {/* Product details */}
  <div className="flex items-center gap-3">
    <img 
      src={shoes} 
      alt="Running Shoes" 
      className="h-20 w-24 sm:h-28 sm:w-28 object-cover rounded-lg" 
    />
    <div>
      <h2 className="font-semibold">Product Name</h2>
      <p className="text-gray-600">$99.00</p>
    </div>
  </div>

  {/* Quantity */}
  <input 
    type="number" 
    min="1" 
    defaultValue="1" 
    className="w-16 sm:w-20 border text-center rounded-md p-1 sm:max-h10"
  />

  {/* Action Button */}
  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
    Remove
  </button>
</div>
  )
}

export default CartCard