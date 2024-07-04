import React from 'react'
import Bannercard from '../home/Bannercard'

const Banner = () => {
  return (
    <div className='px-6 lg:px-24 bg-blue-950 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
         {/* left side div */}
         <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-white'>Buy and Sell your Books<span className='text-blue-400'> for the best Prices</span></h2>
            <p className='md:w-4/5 text-white   '>"Welcome to <span className='text-blue-400 font-bold text-2xl'>Books</span>, where literary worlds come to life.
             Explore curated collections, discover hidden gems, and connect with fellow book lovers. 
             Immerse yourself in a diverse range of genres, from timeless classics to the latest releases.
              Your next captivating read is just a click away. Start your literary journey with us!</p>
            <input type='search' name='search' id='search' placeholder='Search a book' className='px-2 py-2 rounded-sm-s outline-none'></input>
            <button className='bg-blue-400 px-6 py-2 text-white font-medium hover:bg-black
            transition-all ease-in duration-200'>Search</button>
         </div>

         {/* right side div */}
         <div className='pr-24'><Bannercard/></div>
      </div>
    </div>
  )
}

export default Banner
