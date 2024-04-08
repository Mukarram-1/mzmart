import React,{useEffect} from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import Predictform from '../predictform';

export default function Pricepredictor() {
  useEffect(() => {
    document.title = "Blogs | MZ"; 
  }, []); 
  return (
    <>
    <Navbar/>
    <h2 className="section-heading">Laptop Price Prediction</h2>
    <Predictform/>
    <Footer/>
    </>
  )
}
