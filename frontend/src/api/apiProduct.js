import { API } from '../config';

export const getProducts = async(sortBy) => {
    
    return await fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch((err) => {
    
      })
}