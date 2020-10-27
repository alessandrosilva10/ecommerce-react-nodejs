import { API } from './config';

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


export const isAdmin = () => {
    if(JSON.parse(localStorage.getItem('token_jwt')) !== null){
        fetch(`${API}/secret/${JSON.parse(localStorage.getItem('token_jwt')).user._id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token_jwt')).token}`
        },
        //body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res => {             
            if(res.status === 403) {   
                return 403;
           }else{
                return 200;
            }
        })
    } 
}