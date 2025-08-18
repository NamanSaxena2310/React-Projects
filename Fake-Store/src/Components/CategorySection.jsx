import React from 'react'
import CategoryCard from './CategoryCard'
import clothes from '../assets/clothes.jpg'
import electronics from '../assets/electronics.jpg'
import furniture from '../assets/furniture.jpg'
import grocery from '../assets/grocery.jpg'

const CategorySection = () => {
  const categories = [
    { name:'Clothes', source:clothes },
    { name:'Electronics', source:electronics },
    { name:'Grocery', source:grocery },
    { name:'Furniture', source:furniture },
  ]

  return (
    <div className='flex justify-around gap-x-4 sm:gap-x-6 overflow-x-auto px-4 py-6'>
      {categories.map((category,index) => (
        <CategoryCard 
          key={index} 
          categoryName={category.name} 
          alt={category.name} 
          source={category.source} 
        />
      ))}
    </div>
  )
}

export default CategorySection
