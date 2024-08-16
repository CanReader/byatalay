import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

function ListCategory(index,title, data){
  return (
    <div key={index}>
      <h1 className="app__specialMenu-title headtext__cormorant">
        {title}
      </h1>
      <div className="app_items_div">
    
      <MenuItem Data={data}/>

      </div>
    </div>
    );
}

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
      <SubHeading title="Hayalinizdeki lezzetler" isForkCenter={true}/>
      {
        Object.keys(data).map((title,index) => {
          return ListCategory(index,title,data[title]);
        }
      )
      }

  </div>
);

export default SpecialMenu;
