import React from 'react'
import {BiSun} from 'react-icons/bi'
const Nav = () => {
  return (
    <>
     <nav className="px-10 py-10 mb-12 flex justify-evenly">
          <h1 className="text-xl font-Jost">developedby</h1>
          <ul className="flex items-center">
            <li className='mr-2 cursor-pointer font-Jost space-x-2 tracking-wide '>
              Home
            </li>
            
            <li className='mr-2 cursor-pointer font-Jost space-x-2 tracking-wide '>About me</li>
            <li className='mr-2 cursor-pointer font-Jost space-x-2 tracking-wide '>Portfolio</li>
            <li className='mr-2 cursor-pointer font-Jost space-x-2 tracking-wide '>Contact me</li>
                
          </ul>
          <div className='border-solid border-2 border-black rounded-full w-10 h-10 flex justify-center items-center group hover:shadow-yellow-500 shadow-lg'>
            <button className='text-2xl p-2 font-bold group-hover:animate-spin'>
                <BiSun/>
            </button>
          </div>
        </nav>
    </>
  )
}

export default Nav