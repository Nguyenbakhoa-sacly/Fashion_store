
import React, { useEffect, useState } from 'react'
import { FeatureCard } from '../components'
import { baseURL } from '../Api'
const Category = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch(`${baseURL}/products/categories`);
      if (response.status === 200) {
        const res = await response.json();
        setCategory(res);
      }
      else {
        throw new Error('Unable to fetch data')
      }
    }
    getCategory()
  }, [])


  return (
    <FeatureCard
      cards={category}
    />
  )
}

export default Category