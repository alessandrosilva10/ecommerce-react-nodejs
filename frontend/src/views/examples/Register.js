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
  //CardHeader,
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

const Register = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  const { name, email, password } = values;

  const handleChange = name => event => {
      setValues({...values, error: false, [name]: event.target.value, success: true});
  }

  const formValidation = (name, email, password) => {
    if(name.length === 0){
      toast.error(`O nome não pode estar vazio`);
      setValues({
        ...values,
        error: true,
        success: false
      });
    }
    if(password.length === 0){
      toast.error(`A senha não pode estar vazia`);
      setValues({
        ...values,
        error: true,
        success: false
      });
    }
    if(email.length === 0){
      toast.error(`O email não pode estar vazio`);
      setValues({
        ...values,
        error: true,
        success: false
      });
    }
    if(typeof email !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        toast.error("Por favor informe um email válido.");
        setValues({
          ...values,
          error: true,
          success: false
        });
      }
    }
    if(typeof password !== "undefined") {
      var pattern_two = new RegExp(/[^A-Za-z0-9]+/g);      
      if(!pattern_two.test(password)) {
        toast.error("A senha precisa conter letras e números.");
        setValues({
          ...values,
          error: true,
          success: false
        });
      }
    }
} 

const formSuccessMessage = () => {
  toast.success("Usuário cadastrado com sucesso!");
  setValues({
    ...values, 
    name: "",
    password: "",
    email: "",
    error: false,
    success: true
  });
}

const signup = (user) => {
  //console.log(name, email, password)
  fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((response) => {
    if(response.ok){
      formSuccessMessage();
    }else{
      formValidation(name, email, password);
    }
  })
  .catch((err) => {

  })
}

const onSubmit = event => {
  event.preventDefault();
  signup({
    name: name, email: email, password: password
  })
}

  return (
    <Col lg="6" md="8">
      <Card className="bg-secondary shadow border-0">{/*
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-4">
            <small>Sign up with</small>
          </div>
          <div className="text-center">
            <Button
              className="btn-neutral btn-icon mr-4"
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
            <span className="btn-inner--text">Github</span>*
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
            <small>Cadastre-se com as suas informações abaixo</small>
          </div>
          <Form role="form">
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input onChange={handleChange('name')} value={name} name="name" placeholder="Nome" type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input onChange={handleChange('email')} value={email} name="email" placeholder="Email" type="email" autoComplete="new-email"/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input onChange={handleChange('password')} value={password} name="password" placeholder="Senha" type="password" autoComplete="new-password"/>
              </InputGroup>
            </FormGroup>
            <div className="text-muted font-italic">
              <small>
                A senha deve conter letras e números
                {/*<span className="text-success font-weight-700">strong</span>*/}
              </small>
            </div>
            <Row className="my-4">
              <Col xs="12">
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckRegister"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckRegister"
                  >
                    <span className="text-muted">
                      Eu concordo com os {" "}
                      <a href="#" onClick={e => e.preventDefault()}>
                        Termos de Privacidade
                      </a>
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
            <div className="text-center">
              <Button onClick={onSubmit} className="mt-4" color="primary" type="button">
                Criar conta
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card><ToastContainer />
    </Col>
  );
}

export default Register;
