import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
const [allBooks,setAllBooks]=useState([])

useEffect(()=>{
fetch("http://localhost:5000/allBooks").then(res=>res.json()).then(data=>setAllBooks(data))
},[])

//delete book
const handleDelete=(id)=>{
  fetch(`http://localhost:5000/book/${id}`,{
    method:"DELETE",

  }).then(res=>res.json()).then(data=>{
    alert("Book is deleted successfully!")
    // setAllBooks(data)
  })
}

  return (
    <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span >Edit or manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book,index)=><Table.Body className='divided-y' key={book._id}><Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index+1}
          </Table.Cell>
          <Table.Cell>{book.bookTitle}</Table.Cell>
          <Table.Cell>{book.authorName}</Table.Cell>
          <Table.Cell>{book.category}</Table.Cell>
          <Table.Cell>$10.00</Table.Cell>
          <Table.Cell>
            <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </Link>
            <button onClick={()=>handleDelete(book._id)} className='bg-red-600 py-1 px-4 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
          </Table.Cell>
        </Table.Row></Table.Body>)
        }
      
      </Table>
    </div>
  )
}

export default ManageBooks
