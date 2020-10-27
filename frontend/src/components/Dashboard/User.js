import React, { useState, useEffect } from 'react';
import { getUser } from '../../api/apiUser';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import axios from 'axios';

const User = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    });
    const getUser = async() => {
        var token =  JSON.parse(localStorage.getItem('token_jwt')).token;
        var id = JSON.parse(localStorage.getItem('token_jwt')).user._id;
            
         await axios.get(`${API}/user/${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          .then(res => setUser({...user, name: res.data.name, email: res.data.email, role: res.data.role}))    
    }

    useEffect(() => {
        getUser()
    }, []);

        
    return(
        <>
        <div className="container">
        <div className="row" id="dashboard">
            <div className="col-3">
                <div className="card">
                    <h4 className="card-header">Admin Dashboard</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link className="nav-link" to="/card">
                                Criar Categoria
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/card">
                                Criar Produto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-3">
                <div className="card mb-5">
                    <h3 className="card-header">Informações</h3>
                        <ul className="list-group">
                            <li className="list-group-item">{user.name}</li>
                            <li className="list-group-item">{user.email}</li>
                            <li className="list-group-item">
                            {user.role === 1 ? "Administrador" : "Cliente"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default User;