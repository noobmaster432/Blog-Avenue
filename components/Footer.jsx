import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black bg-opacity-40 mt-2 p-8'>
        <h6 className='text-center text-white text-lg font-semibold'>
            Made with ❤️ by 
            <Link href="https://github.com/noobmaster432" className='text-red-500'> Noobmaster</Link>
        </h6>
    </div>
  )
}

export default Footer