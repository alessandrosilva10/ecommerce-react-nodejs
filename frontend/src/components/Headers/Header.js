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
import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { API } from '../../config';
import { getProducts } from '../../api/apiProduct';
import ShowImages from '../../api/apiImages';

const Header = () => {
   const [productsBySell, setProductsBySell] = useState([]);
   const [productsByArrival, setProductsByArrival] = useState([]);
   const [error, setError] = useState(false);
   
   const loadProductsBySell = () => {
      getProducts('sold').then((data,error) => {
       if(error) {
          setError(true);
        }else{
          setProductsBySell(data);
        }
      });
   };
   
   const loadProductsByArrival = () => {
    getProducts('createdAt').then((data, error) => {
      if(error) {
        setError(true);
      }else{
        setProductsByArrival(data);
      }
    });
 };

 useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
 }, []);

    return (
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <br/><br/><br/><br/><br/><br/>
              <Row>
                {productsByArrival.map((product, index) => (
                <Col lg="6" xl="3">              
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                        <p>Produto: {product.name}</p>
                        <hr/>
                        <ShowImages item={product._id} url="product"/>
                        <p>Descrição: {product.description}</p>
                        <p>Preço: R${product.price}</p>   
                        <p>Quantidade disponível: {product.quantity}</p>
                        <button onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}>Adicionar ao carrinho</button>
                    </CardBody>
                  </Card>
                </Col>))}
              </Row>
            </div>
          </Container>
        </div>
    );
}

export default Header;
