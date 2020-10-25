import React from 'react';
import { API } from '../config';

const ShowImages = ({item, url}) => (
    <div className="product-img">
        <img src={`${API}/${url}/photo/${item}`} alt={item.name} className="mb-3"  style={{display: 'inline-block;', float: 'left', maxHeight: "40%", maxWidth: "40%"}} />
    </div>
);

export default ShowImages;