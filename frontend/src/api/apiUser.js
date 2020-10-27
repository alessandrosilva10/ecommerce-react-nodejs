import { API } from '../config';
import axios from 'axios';

export const getUser = async() => {
    var token =  JSON.parse(localStorage.getItem('token_jwt')).token;
    var id = JSON.parse(localStorage.getItem('token_jwt')).user._id;
    var values = [];

    await axios.get(`${API}/user/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      .then(res => {
          values = res.data;
          console.log(values);
          return values;
      }) 
}