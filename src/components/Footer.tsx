
import React from 'react'
import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-200 py-8 px-10 text-gray-800 flex justify-around'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div>
                <h3 className=' text-xl font-bold mb-4'>Core Course</h3>
                    <ul className='space-y-2 text-lg'>
                        <li>Programming Fundanental</li>
                        <li>Web2 using NextJs</li>
                        <li>Earn as your Learn</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className=' text-xl font-bold mb-4'>Advance Cousre</h3>
                    <ul className='space-y-2 text-lg'>
                        <li>Web 3 and Metaverse</li>
                        <li>Cloud-Native computing</li>
                        <li>Ambient Computing of It</li>
                        <li>Artifical Intelligency</li>
                        <li>Genomic and bioinformatics</li>
                        <li>Network PROGRAMMING</li>
                    </ul>
                    </div>
                    <div>
                    <h3 className=' text-xl font-bold mb-4'>Social Links</h3>
                    <div className='flex space-x-4 mb-4'>
                        <Link href ='#!'><FaFacebookF className='h-6 w-6 rounded-full bg-blue-800 text-white pt-1 pb-1' /></Link>
                        <Link href ='#!'><FaInstagram className='h-6 w-6 rounded-full bg-pink-600 text-white pt-1 pb-1'/></Link>
                        <Link href ='#!'><FaTiktok className='h-6 w-6 rounded-full bg-black text-white pt-1 pb-1'/></Link>
                        <Link href ='#!'><FaTwitter className='h-6 w-6 rounded-full bg-blue-500 text-white pt-1 pb-1'/></Link>
                        <Link href ='#!'><FaYoutube className='h-6 w-6 rounded-full bg-red-600 text-white pt-1 pb-1'/></Link>
                    </div>
                    <div className='flex space-x-4 mb-4'>
                    <a href='mailto:education@govnorsindth.com' className='text-blue-600 underline flex items-center gap-3 '>
                    <MdOutlineMail className='size-8'/>
                        education@govnorsindth.com</a>
                        </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer