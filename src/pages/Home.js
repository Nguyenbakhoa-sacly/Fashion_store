
import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../Api'
import { StartCard, Testimobial, ProductsHome, Category } from '../components'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${baseURL}/products?limit=12`);
      if (response.status === 200) {
        const res = await response.clone().json();
        setData(res);
      }
      else {
        throw new Error('Unable to fetch data')
      }
    }
    getProducts()
  }, [])

  return (
    <div className='w-1260 mx-auto my-0'>

      <section className="text-gray-600  body-font">
        <div className="container mx-auto flex pt-32 pb-14  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className=" text-6xl font-semibold">The Best And Trending</p>
            <p className='text-6xl font-semibold leading-relaxed'>Fashion Collextion</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show Now</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://bazaarvietnam.vn/wp-content/uploads/2023/07/HBVN-bst-Erudite-thuy-an-giai-ba-fashion-creation-2023.jpg" />
          </div>
        </div>
      </section>
      <Category />
      <ProductsHome
        data={data}
      />

      <StartCard />
      <Testimobial />

    </div>
  )
}

export default Home