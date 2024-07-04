import React, { useEffect, useState } from 'react'
import Bookcard from '../components/Bookcard'

const BestSellerbook = () => {
const [books,setBooks]=useState([])

useEffect( ()=>{
 fetch("http://localhost:5000/allBooks").then(res=> res.json()).then(data=> setBooks(data.slice(0,8)))
},[])

  return (
    <div>
    <Bookcard books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerbook
