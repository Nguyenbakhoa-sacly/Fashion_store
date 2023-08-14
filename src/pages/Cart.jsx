
import React from 'react'
import { CiSquareRemove, AiOutlinePlus, AiOutlineMinus } from '../assets/icon'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { delCart } from '../redux/action/index'
import '../assets/scss/style.scss'
const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()
  console.log(state)

  const cartItems = (cartItem) => {

    return (
      <div className=''>
        <div
          key={cartItem.id}
          className=' snap-start flex items-center justify-evenly w-full  border-y py-6 mb-5 '>
          <img
            className=' w-10 h-10 rounded-md'
            src={cartItem.image}
            alt='image product'
          />

          <p className='text-xl title-cart w-375'>
            {cartItem.title}
          </p>

          <div>
            <motion.button
              className='inline-flex items-center rounded-md bg-blue-50 py-2 px-3 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
            >
              <AiOutlineMinus />
            </motion.button>
            <input
              type='number'
              className='outline-none input-quantity w-10 mx-1 px-1 rounded-md border border-blue-300'
              value='1'

            />
            <motion.button
              className='inline-flex items-center rounded-md bg-blue-50 py-2 px-3 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'
            >

              <AiOutlinePlus />
            </motion.button>
          </div>
          <p className='text-xl'> {`$ ${cartItem.price}`} </p>

          <CiSquareRemove
            onClick={() => handleButtonClose(cartItem)}
            className='text-3xl text-blue-500' />
        </div>
      </div>

    )
  }


  const emptyCart = () => {
    return (
      <div className="flex items-center justify-center">
        <h3 className='text-2xl'>Your Cart is Empty</h3>
      </div>

    );
  }

  const handleButtonClose = (item) => {
    dispatch(delCart(item))
  }
  return (
    <div className='pt-16 '>
      <div className='w-1260 mx-auto my-0 flex  gap-8  shadow-md px-6'>
        <div className='w-3/4'>
          <div className=' pt-14 pb-6 flex justify-between border-b  mb-5'>
            <p className='text-2xl font-semibold'>
              Shoping Cart
            </p>
            <p className='text-2xl font-semibold'>
              {state.length} items
            </p>
          </div>
          {state.length !== 0 && state.map(cartItems)}
          {state.length === 0 && emptyCart()}
        </div>
        <div className='w-1/4'>
          <div className=' pt-14 pb-6 border-b'>
            <p className='text-2xl font-semibold'>
              Order Summary
            </p>
          </div>
          <div className=' py-4 flex justify-between items-center font-semibold text-sm'>
            <p>ITEM {state.length}</p>
            <p>590$</p>
          </div>
          <div>
            <p className='text-sm font-medium uppercase'>shipping</p>
            <select className='text-sm text-gray-600 w-full p-2'>
              <option >Standard shipping</option>
            </select>
          </div>
          <div className='py-6'>
            <p className=' text-sm font-medium uppercase'>promo code</p>
            <input type='text' className=' py-2 w-full text-sm outline-none' placeholder='Enter your code' />
          </div>

          <button className=' border-none bg-red-600 text-primary py-2 px-6 block mb-10'>
            Apply
          </button>
          <hr />

          <div className=' py-6 uppercase flex justify-between items-center font-semibold text-sm'>
            <p>total cost</p>
            <p>590$</p>
          </div>

          <button className=' mb-6 uppercase w-full py-3 text-sm text-primary bg-blue-600'>
            Check out
          </button>
        </div>

      </div>

    </div >
  )
}

export default Cart