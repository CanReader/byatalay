"use client";
import React from 'react';
import SubHeading from '@/app/components/Subheading/Subheading';
import MenuItem from '@/app/components/MenuItem/MenuItem';
import data from '@/app/constants/data';
import "./Menu.css";

function ListCategory(index,category, products){
	return (
    <div key={index}>
      <h1 className="app__specialMenu-title headtext__cormorant">
        {category}
      </h1>
      <div className="app_items_div">
      
	  {
		products.map((d,i) => {
		  return <MenuItem key={i} Data={d}/>;
		})
	  }

      </div>
    </div>
    );
}

export default function({refer}){
  return <div ref={refer} className="app__specialMenu flex__center section__padding" id="menu">
      <SubHeading title="Hayalinizdeki lezzetler" isForkCenter={true}/>
      {
        Object.keys(data).map((item,index) => {
			 return ListCategory(index,item,data[item]);
        }
      )
      }

  </div>
    }

