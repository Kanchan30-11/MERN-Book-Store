import React,{useEffect,useState} from 'react'
import Bookcard from '../components/Bookcard'

const OtherBook = () => {
    const [books,setBooks]=useState([])

    useEffect( ()=>{
     fetch("http://localhost:5000/allBooks").then(res=> res.json()).then(data=> setBooks(data.slice(0,9)))
    },[])
    
      return (
        <div>
        <Bookcard books={books} headline="Other Books"/>
        </div>
      )
}

export default OtherBook
