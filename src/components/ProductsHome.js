import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { buttonClick } from '../assets/styles'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import '../assets/scss/ListProduct.scss'
const Products = (props) => {
  const { data } = props
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));

  }

  return (
    <div className='py-10 w-1260 mx-auto my-0'>
      <div className='text-3xl pb-16 flex justify-center text-gray-600  font-semibold'>
        All Products
      </div>
      <>
        <div className=''>
          <div className=' grid grid-cols-4 gap-4'>
            {data && data.length > 0 && data.map((data) => {
              return (
                <div
                  key={data.id}
                  className=" max-w-sm bg-white border border-gray-200 p-2 rounded-lg shadow">
                  <Link
                    to={`/product/${data.id}`}
                    className='w-full overflow-hidden '>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      className=" rounded-t-lg w-full h-64 object-container object-center  "
                      src={data.image} alt="product image"
                    />
                  </Link>
                  <div className=" pt-3">
                    <a href="#">
                      <h5 className="h-56.1 title_product text-xl font-semibold tracking-tight text-gray-900"> {data.title}</h5>
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
      </>

    </div>
  )
}

export default Products