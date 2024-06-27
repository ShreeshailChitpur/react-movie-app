import React from 'react'
import Logo from '../assets/pngegg.png' 
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt="" />
        <Link to="/" className='text-blue-500 font-bold text-2xl'>Home</Link>
        <Link to="/watchlist" className='text-blue-500 font-bold text-2xl'>WatchList</Link>
    </div>
  )
}

export default Navbar