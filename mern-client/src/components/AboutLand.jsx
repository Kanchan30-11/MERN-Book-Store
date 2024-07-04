import React from 'react'
import  bookBg from '../assets/book-1.png'

const AboutLand = () => {
  return (
    <div>
      <div className='p-4 bg-blue-200 flex items-center justify-center'>
        <img src={bookBg} className='h-screen'/>
        <div className=' flex flex-col justify-center item-center'>
          <h1 className='text-6xl font-bold text-blue-950'>Unlock Worlds of Knowledge:</h1>
          <div className='text-4xl font-bold'> Your Premier Destination for E-Books
        </div>
          </div>
         
      </div>
    </div>
  )
}

export default AboutLand
