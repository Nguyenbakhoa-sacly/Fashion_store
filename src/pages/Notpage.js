

import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonClick } from '../assets/styles'
const Not_page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col space-y-4 text-center">
        <div className="text-blue-600 text-xl font-medium">Shop</div>
        <div className="text-5xl font-medium">Page not found</div>
        <div className="text-gray-500">Sorry, the page you're looking for isn't available.</div>
        <div className="flex items-center justify-center">
          <NavLink to='/'>
            <motion.button
              {...buttonClick}
              className="bg-blue-600  py-4 text-white font-medium rounded-lg">Come back Homepage
            </motion.button>
          </NavLink>
        </div>
      </div>
    </div >
  )
}

export default Not_page