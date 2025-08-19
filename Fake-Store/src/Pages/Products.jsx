import React from 'react'
import Headings from '../Components/Headings'
import ProductCard from '../Components/ProductCard'

const Products = () => {
  return (
    <div className='max-w-7xl mx-auto text-primary lg:flex md:flex gap-20 py-10 px-4'>
      {/* filters section */}
      <div className=' flex flex-col  gap-5 min-w-50 py-5 '>
        <h3 className='text-xl font-bold'>Filters</h3>
        {/* Categories */}
        <div className='border border-gray-300 p-3'>
            <h3>Categories</h3>
            <div className="">
              <p className='flex gap-2'><input type='checkbox'></input>Men</p>
              <p className='flex gap-2'><input type='checkbox'></input>Women</p>
              <p className='flex gap-2'><input type='checkbox'></input>Kids</p>
            </div>
        </div>

         <div className='border border-gray-300 p-3'>
            <h3>Categories</h3>
            <div className="">
              <p className='flex gap-2'><input type='checkbox'></input>Men</p>
              <p className='flex gap-2'><input type='checkbox'></input>Women</p>
              <p className='flex gap-2'><input type='checkbox'></input>Kids</p>
            </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex flex-col gap-y-10 ' >
        <div className='text-center md:text-left'>
            <Headings text1={"All"} text2={"Collections"} lineBreak={false}/>
        </div>
        
        {/* Products */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default Products