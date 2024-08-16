import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title, isForkCenter }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" style={{marginLeft: isForkCenter ? '40%' : 0}}/>
  </div>
);

export default SubHeading;