export const Token = (data, next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('token', JSON.stringify(data));
        next();
    }
};