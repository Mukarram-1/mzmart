import React,{useEffect} from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import Carousel2 from './carousel'
import Categorycard from './categorycard'
import CategorySlider from './slider'

export default function Shop() {
  useEffect(() => {
    document.title = "Shop | MZ "; 
  }, []); 
  return (
    <>
    <Navbar/>
    <Carousel2/>
    <div style={{fontSize:"50px",textAlign:'center'}}>Categories</div>
    {/* <div className="category-cards">
      <Categorycard
      imageSrc="./images/shield.png"
      heading="Garments"
      />
      <Categorycard
      imageSrc="./images/suitcase.png"
      heading="Suitcases"
      />
      <Categorycard
      imageSrc="./images/transaction.png"
      heading="transactions"
      />
      <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
      <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
      <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
           <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
           <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
           <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
           <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
           <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />
           <Categorycard
      imageSrc="./images/transaction.png"
      heading="Electronics"
      />

    </div> */}
    <CategorySlider/>
    <Footer/>
    </>
  )
}
