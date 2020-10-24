import React from 'react';
import { API } from '../config';

const ShowImages = ({item, url}) => (
    <div className="product-img">
        <img src={`${API}/${url}/photo/${item}`} alt={item.name} className="mb-3"  style={{maxHeight: "100%", maxWidth: "100%"}} />
    </div>
);

export default ShowImages;