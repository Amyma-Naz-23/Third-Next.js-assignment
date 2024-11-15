"use clint"
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div  className='bg-red-900 py-3 px-3 text-4xl text-fuchsia-50 flex justify-between items-center '>
          <div>
            <h1 className='text-7xl font-semibold'>Amyma Naz</h1>
            </div>
            <div>
                <ul className='flex space-x-4'>
                    <li><Link href='/'className='hover:text-gray-950'>Home</Link></li>
                     <li><Link href='/aboutus'className='hover:text-gray-950'>About</Link></li> 
                    <li><Link href='/contact'className='hover:text-gray-950'>Contact</Link></li>
                </ul>
         </div>
    </div>
  )
}

export default Navbar