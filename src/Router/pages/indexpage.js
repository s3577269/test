import React, { Component, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../css/skin.css"

function IndexPage() {

  const[clicked,setClicked] = useState(false)

  
  function windowUp(){
    setClicked(!clicked)
    console.log(clicked)
  }
    
    
  const settings = {
      centerMode:true,
      variableWidth:true,
      dots:false,
      infinite:true,
      speed:10,
      slidesToShow:1,
      slidesToScroll:1
  }

  const window = {
      height:clicked?'90vh':'5vh',
      width:'100%'
  }

    return (
      <div className='background'>
        
        <div className='container'>
        
        <Slider {...settings}>
          <div >
            <h3 className='first'>1</h3>
          </div>
          <div >
            <h3 className='second'>2</h3>
          </div>
          <div >
            <h3 className='third'>3</h3>
          </div>
          <div >
            <h3 className='fourth'>4</h3>
          </div>
          <div >
            <h3 className='fifth'>5</h3>
          </div>
          <div >
            <h3 className='sixth'>6</h3>
          </div>
        </Slider>

        <a className="footer" style={window} onClick={windowUp}> 
          
        </a>
        </div>
      </div>
    )
}

export default IndexPage
