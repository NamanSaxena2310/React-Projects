import React from 'react'
import shoes from '../assets/shoes.jpg'
import Button from './Button'

const ProductCard = () => {
  return (
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-primary to-secondary 
                    transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="text-primary bg-neutral-900 rounded-2xl p-4 flex flex-col h-full">
        
        {/* Image */}
        <div>
          <img src={shoes} className="h-60 w-full object-cover rounded-xl" />
        </div>

        {/* Content */}
        <div className="my-4 flex-1">
          <h3 className="text-lg font-semibold">Product Name</h3>
          <p className="text-sm text-gray-400">Shipped in 3-4 days</p>
          <p className="text-base font-bold">$50</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button>Cart++</Button>
          <Button>Buy</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
