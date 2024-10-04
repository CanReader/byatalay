"use client";
import React, { useState } from 'react';

import './MenuItem.css';
import Image from 'next/image';

function MenuItem({Data}) {

const [showDetail, setShowDetail] = useState(false);

const handleMouseEnter = () => {
	setShowDetail(true);
};

const handleMouseLeave = () => {
	setShowDetail(false);
};
	return (
		<div className="ItemWrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
  		  <div className="ItemDetail" style={{opacity: showDetail ? 1 : 0}}>
    	    <span className="ItemDetail_Title">{Data.name}</span>
    	    <hr/>
    	    <p className="ItemDetail_Desc">{Data.desc}</p>
    	    <p className="ItemDetail_Price">{Data.price} TL</p>
    	    <button className='BuyBtn'>Sepete ekle</button>
  		  </div>
 	      <img src={Data.url} alt={`[IMG-${Data.name}]`}/>
		</div>
		);
}



export default MenuItem;
