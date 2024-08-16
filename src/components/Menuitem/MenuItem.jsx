import React from 'react';

import './MenuItem.css';

const MenuItem = ({Data}) => (
  <div>
    {Object.values(Data).map()}
      <img/>  
  </div>
);

export default MenuItem;