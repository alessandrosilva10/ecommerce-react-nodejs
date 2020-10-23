/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../config';
import { authenticate } from '../../authenticate';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../authenticate';

const Login = () =>{
  //const { name, email, password } = values;

const [values, setValues] = useState({
  email: '',
  password: '',
  error: '',
  success: false,
  isTokenValid: false,
  token: ''
});

  const { email, password } = values;

  const handleChange = email => event => {
      setValues({...values, error: false, [email]: event.target.value, success: true});
  }

const formValidation = (email, password) => {
  if(password.length === 0){
    toast.error(`A senha não pode estar vazia`);
    setValues({
      ...values,
      error: true,
      success: false,
      isTokenValid: false
    });
  }
  if(email.length === 0){
    toast.error(`O email não pode estar vazio`);
    setValues({
      ...values,
      error: true,
      success: false,
      isTokenValid: false
    });
  }
  /*if(typeof email !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    /*if (!pattern.test(email)) {
      toast.error("Por favor informe um email válido.");
      setValues({
        ...values,
        error: true,
        success: false,
        redirect: false
      });
    }
  }*/
  if(typeof password !== "undefined") {
    var pattern_two = new RegExp(/[^A-Za-z0-9]+/g);      
    if(!pattern_two.test(password)) {
      toast.error("A senha precisa conter letras e números.");
      setValues({
        ...values,
        error: true,
        success: false,
        redirect: false
      });
    }
  }
} 

const formSuccessMessage = () => {
  toast.success("Usuário logado com sucesso!");
  setValues({
    ...values, 
    name: "",
    password: "",
    email: "",
    error: false,
    success: true,
    redirect: true
  });
  //window.location.pathname = '/admin/index';
}

const signin = async (user) => {
  await fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(res => {
    
    if(res.status === 200) {
      formSuccessMessage(); 
      window.location.href = "/admin/index";
      authenticate(res);
      
    }else{
      formValidation(email, password);
    }
  })
  .catch((err) => {

  })
}

const onSubmit = event => {
  event.preventDefault();
  signin({
    email: email, password: password
  })
}
    return (
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {/*<CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/github.svg")}
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
    </CardHeader>*/}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Faça o login com as suas credenciais</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input value={email} onChange={handleChange('email')} placeholder="Email" type="email" autoComplete="new-email"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input value={password} onChange={handleChange('password')} placeholder="Senha" type="password" autoComplete="new-password"/>
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Lembrar</span>
                </label>
              </div>
              <div className="text-center">
                <Button onClick={onSubmit} className="my-4" color="primary" type="button">
                  Entrar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row><ToastContainer />
      </Col>
      );
}

export default Login;
