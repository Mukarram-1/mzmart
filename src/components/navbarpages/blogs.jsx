import React,{useEffect} from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs | MZ"; 
  }, []); 
  return (
    <>
    <Navbar/>
    <div style={{fontSize:"5rem"}}>Blogs</div>
    <Footer/>
    </>
  )
}
