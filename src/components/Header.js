

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiShoppingCart, GrFormNextLink, AiOutlineBell } from '../assets/icon'
import { useSelector } from 'react-redux'
import '../assets/scss/Header.scss'
const Header = () => {

  const state = useSelector((state) => state.handleCart)

  const cart = () => {
    return (
      <p className=' text-sm w-6 h-6 flex items-center justify-center text-primary rounded-full bg-blue-600 py-1 px-1 absolute -top-2 -right-3'>{state.length}</p>
    )
  }

  return (
    <>
      < div >
        <nav className="  bg-cardOverlay border-b  dark:border-gray-300 fixed z-50 w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-2">
            <NavLink to='/' className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Shop</span>
            </NavLink>
            <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <NavLink
                  to='/'
                  className='
                  first-letter:block py-2 pl-3 pr-4  text-xl md:hover:text-blue-700 md:dark:hover:text-blue-500 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:bg-transparent'
                  aria-current="page">
                  Home
                </NavLink>
                <NavLink to='/product' className="block py-2 pl-3 pr-4 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Products
                </NavLink>
                <NavLink to='/services' className="block py-2 pl-3 pr-4   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-xl  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</NavLink>
                <NavLink to='/pricing' className="block py-2 pl-3 pr-4    rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-xl md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</NavLink>
                <NavLink to='/contact' className="block py-2 pl-3 pr-4   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-xl  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
              </ul>
            </div>
            <div className='flex gap-6'>

              <NavLink
                to="/cart"
                className='relative' >
                <AiOutlineBell
                  className=' hover:text-blue-600  text-3xl'
                />
                <p className=' text-sm w-6 h-6 flex items-center justify-center text-primary rounded-full bg-blue-600 py-1 px-1 absolute -top-2 -right-3'>10</p>
              </NavLink>
              <NavLink
                to="/cart"
                className='relative' >
                <GiShoppingCart
                  className=' hover:text-blue-600 text-3xl'
                />
                {state.length > 0 && cart()}

              </NavLink>


            </div>

            <NavLink to='/login'

              className='flex items-center'>
              <p className='text-xl '>Login</p>
              <GrFormNextLink className='text-2xl' />
            </NavLink>

          </div>
        </nav >
      </div >
    </>
  )
}

export default Header