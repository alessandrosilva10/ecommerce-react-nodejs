import React, { useState, useEffect } from 'react';
import { getUser } from '../../api/apiUser';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import axios from 'axios';
import Example from './Modal';

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
        <div style={{paddingTop: '50px', backgroundColor: 'aquamarine'}} className="container">
        <div className="row" id="dashboard">
            <div className="col-3">
                <div className="card">
                    <h4 className="card-header"><center>Análise de Negócios</center></h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link className="nav-link" to="/card">
                            <i className="fas fa-search"/> Consultar
                            </Link>
                        </li>                 
                    </ul>
                </div>
            </div>
            <div className="col-3">
                <div className="card">
                    <h4 className="card-header"><center>Cadastro</center></h4>
                    <ul className="list-group">
                       <Example category="Criar Categoria" icon="fas fa-plus-circle" save="Categoria" title="Cadastro de Categoria" label="Nome da Categoria" placeholder="Qual o nome da Categoria?"/>
                       <Example category="Criar Produto" icon="fas fa-plus" save="Produto" title="Cadastro de Produto" label="Nome do Produto" placeholder="Qual o nome do Produto?"/>
                    </ul>
                </div>
            </div>
                <div className="col-4">
                    <div className="card mb-5">
                    <h3 className="card-header"><center>Informações do {user.role === 1 ? "Administrador" : "Cliente"}</center></h3>
                        <ul className="list-group">
                            <li className="list-group-item"><i className="fas fa-address-card"/> {user.name}</li>
                            <li className="list-group-item"><i className="fas fa-at"/> {user.email}</li>
                            <li className="list-group-item">
                            <i className="fas fa-key"/> {user.role === 1 ? "Administrador" : "Cliente"}
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