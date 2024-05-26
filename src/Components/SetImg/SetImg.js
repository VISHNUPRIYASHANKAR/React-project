import React from 'react'
import'./SetImg.css';
export default function SetImg() {
  return (
    <div>
      <img 
        src = './Img1.png' 
        style={{width:1512}}
        required className="imgfluid"
      />
    </div>
  )
}
