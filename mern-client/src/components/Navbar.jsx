import React, { useContext, useEffect, useState } from 'react'
import { FaBook } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';




const Navbar = () => {
  const[isMenuOpen,setIsMenuOpen]= useState(false);
  const[isSticky,setIsSticky]=useState(false);

  const{user}=useContext(AuthContext)
  console.log(user)

  //toggle menu
  const toggleMenu = ()=>{
     setIsMenuOpen(!isMenuOpen)
  }
  
  useEffect(()=>{
     const handleScroll=()=>{
        if(window.scrollY >100){
            setIsSticky(true)
        }else{
            setIsSticky(false)
        }
     }
       window.addEventListener("scroll",handleScroll)

       return()=>{
       window.addEventListener("scroll",handleScroll)
  }

  },[])
  const navItems=[
    {link:"Home",path:"/"},
    {link:"About",path:"/about"},
    {link:"Shop",path:"/shop"},
    {link:"Sell-your-book",path:"/admin/dashboard"},
    {link:"Blog",path:"/blog"}
  ]
  
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0  backdrop-blur-md  text-black":""}`}>
        <div className='flex justify-start space-x-28'>
        <Link to='/' className='text-2xl font-bold text-blue-400 flex items-center  gap-2'>< FaBook className='inline-block'/>Books</Link>
        {/*nav items for larger device*/ }
        <ul className='md:flex space-x-12 hidden  items-center justify-center'>
          {
            navItems.map(({link,path}) =><Link key={path} to={path} className="block text-base text-blue-400 font-semibold  uppercase cursor-pointer
             hover:text-blue-600">{link}</Link>)}
        </ul>

        {/*button for lg  device */}
        

        {/* menu btn for mobile devices */}
        <div className='md:hidden'>
           <button onClick={toggleMenu} className='text-blue-400 focus:outline-none'>
            {
              isMenuOpen?<FaXmark className='w-5 h-5 text-blue-400'/>:<FaBarsStaggered className='w-5 h-5 text-blue-400'/>
            }
           </button>
        </div>
        </div>

        {/*nav items for sm devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen?"block fixed  top-0 right-0 left-0":"hidden"}`}>
        {
            navItems.map(({link,path}) =><Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer">{link}</Link>)}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
