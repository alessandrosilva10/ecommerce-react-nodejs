import { Redirect } from 'react-router-dom';

export const authenticate = (res, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem('token_jwt', JSON.stringify(res));
        next();
    }
}

export const isAuthenticated = () => {
    if(localStorage.getItem('token_jwt')){
        return JSON.parse(localStorage.getItem('token_jwt'));
    }else{
        return false;
    }
}