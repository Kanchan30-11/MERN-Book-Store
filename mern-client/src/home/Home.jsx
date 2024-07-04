import React from 'react'
import Banner from '../components/Banner'
import BestSellerbook from './BestSellerbook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'


const Home = () => {
  return (
    <div ><Banner/>
    <BestSellerbook/>
    <FavBook/>
    <PromoBanner/>
    <OtherBook/>
    <Review/>
    </div>
  )
}

export default Home
