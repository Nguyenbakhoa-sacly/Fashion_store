import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { buttonClick } from '../assets/styles'
import { baseURL } from '../Api'
import { FaSearch } from '../assets/icon'
import '../assets/scss/ListProduct.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${baseURL}/products`);
      if (response.status === 200) {
        const res = await response.clone().json();
        setData(res);
        setFilter(await response.json());
      }
      else {
        throw new Error('Unable to fetch data')
      }
    }
    getProducts()
  }, [])


  const filterProduct = (cat) => {
    console.log(cat);
    const uploadList = data.filter((i) => i.category === cat)
    console.log(uploadList)
    setFilter(uploadList)
  }

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));

  }
  return (
    <div className='pt-16 w-1260 mx-auto my-0'>
      <div className=' flex justify-between w-1000 mx-auto py-16'>
        <div className=' flex items-center  '>
          <input
            className=' h-full outline-none text-lg border border-slate-400 font-medium px-4'
            placeholder='Search ...'
          />
          <motion.button
            {...buttonClick}

            className='inline-flex items-center rounded-md bg-blue-50 py-3 px-6 ml-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
          >
            <FaSearch className=' text-xl' />
          </motion.button>
        </div>

        <div className=' flex gap-2'>
          <motion.button
            {...buttonClick}
            onClick={() => setFilter(data)}
            type='button'
            className='inline-flex items-center rounded-md bg-blue-50 py-3 px-6 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
          >
            All
          </motion.button>
          <motion.button
            {...buttonClick}
            onClick={() => filterProduct("men's clothing")}
            type='button'
            className='inline-flex items-center rounded-md bg-blue-50 py-3 px-6 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
          >
            Men's clothing
          </motion.button>
          <motion.button
            {...buttonClick}
            onClick={() => filterProduct("electronics")}
            type='button'
            className='inline-flex items-center rounded-md bg-blue-50 py-3 px-6 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
          >
            Electronics
          </motion.button>
          <motion.button
            {...buttonClick}
            onClick={() => filterProduct("jewelery")}
            type='button'
            className='inline-flex items-center rounded-md bg-blue-50 py-3 px-6 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
          >
            Jewelery
          </motion.button>
          <motion.button
            {...buttonClick}
            onClick={() => filterProduct("women's clothing")}
            type='button'
            className='inline-flex items-center rounded-md bg-blue-50 py-3 px-6 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
          >
            Women's clothing
          </motion.button>
        </div>
      </div>


      <div className=''>
        <div className=' grid grid-cols-4 gap-4'>
          {filter && filter.length > 0 && filter.map((data) => {
            return (
              <div
                key={data.id}
                className=" p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <Link
                  to={`/product/${data.id}`}
                  className='w-full overflow-hidden '>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className=" rounded-t-lg w-full h-64 object-container object-center  "
                    src={data.image} alt="product image"
                  />
                </Link>
                <div className="pt-3">
                  <a href="#">
                    <h5 className=" h-56.1 title_product text-xl font-semibold tracking-tight text-gray-900"> {data.title}</h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">{`$ ${data.price}`}
                    </span>

                    <motion.button
                      {...buttonClick}
                      to='/cart'
                      onClick={() => addProduct(data)}
                      href="#"
                      className='hover:bg-indigo-600 hover:text-primary inline-flex items-center rounded-md bg-blue-50 py-3 px-6 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
                    >
                      Add to cart
                    </motion.button>
                  </div>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>

    </div>
  )
}

export default Products