import React,{useEffect} from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

export default function Pricepredictor() {
  useEffect(() => {
    document.title = "Blogs | MZ"; 
  }, []); 
  return (
    <>
    <Navbar/>
    <div style={{fontSize:"5rem"}}>Laptop Price Prediction</div>
    <Footer/>
    </>
  )
}
