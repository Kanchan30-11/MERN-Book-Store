import React,{useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';

const SingleBook = () => {
  
    const [rating, setRating] = useState(0);
  
    const onStarClick = (nextValue) => {
      setRating(nextValue);
      // Handle sending the rating to the backend or perform other actions here
    }
    const {_id,bookTitle,category,imageUrl,authorName,bookDescription}=useLoaderData();
  return (
    <div className='mt-28 lg:pl-20  '>
      <div className='flex '>
        <div className=' lg:w-[550px] h-full grid place-items-start space-y-3'>
      <img src={imageUrl} alt='' className='h-96 w-full'/>
      <button className='bg-blue-950 px-4 w-72 rounded-xl py-3 text-white'>Buy Now</button>
      <div className=''>
      
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
        className="star-rating"
        
      />
      <p className='text-xl font-semibold'>Selected rating: {rating}</p>
      <button className='bg-yellow-400 px-4 lg:w-72 rounded-xl py-3 text-white'>Sumit</button>
    </div>
      </div>
      <div className='px-8 space-y-4 lg:pr-64'>
      <h2 className='font-bold text-4xl '>{bookTitle}</h2>
      <h2 className='font-semibold text-2xl '>
        {authorName}
      </h2>
      <p className='text-lg text-justify '>
       {bookDescription}
      </p>
       <div className='font-semibold text-3xl'>
        Book Category :{category}
       </div>
         
      </div>
    
      </div>
     
    </div>
  )
}

export default SingleBook
