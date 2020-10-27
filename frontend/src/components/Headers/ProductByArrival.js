import React, { useState, useEffect } from 'react';
import ShowImages from '../../api/apiImages';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { getProducts } from '../../api/apiProduct';

const ProductByArrival = () => {
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

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
    }, []);

    return(
        <><br/>
            <h1 style={{color: 'white', paddingTop: '40px'}}>Últimos produtos cadastrados</h1>
            <Row>
            {productsByArrival.map((product, index) => (
            <Col lg="6" xl="3">              
                <Card className="card-stats mb-3 mb-xl-0" style={{height: "100%"}}>
                <CardBody>
                    <p class="card-header" style={{textAlign:"center"}}><strong>{product.name}</strong></p>
                    <ShowImages item={product._id} url="product"/><br />
                    <div style={{display: 'inline-block;', float: 'center'}}>
                        <p><strong>{product.description}</strong></p>
                        <p><strong>Preço:</strong> R${product.price}</p> 
                        <p><strong>Disponível:</strong> {product.quantity} unidades</p>
                    </div>
                    <div style={{float: "center"}}>
                        <button
                        style={{
                        cursor: "pointer",
                        bottom: "28px",
                        height: "35px",
                        background: "cornflowerblue",
                        color: "white",
                        borderRadius: "4px",
                        borderColor: "cornflowerblue",
                        border: "1px solid cornflowerblue",
                        fontWeight: "700",
                        fontSize: ".8em",
                        marginLeft: '40px',
                        marginTop: '20px',
                        }}
                        onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}><i class="far fa-money-bill-alt"></i> Comprar</button>
    
                        <button 
                        style={{
                        cursor: "pointer",
                        bottom: "28px",
                        height: "35px",
                        background: "cornflowerblue",
                        color: "white",
                        borderRadius: "4px",
                        borderColor: "cornflowerblue",
                        border: "1px solid cornflowerblue",
                        fontWeight: "700",
                        fontSize: ".8em",
                        marginLeft: '60px',
                        marginTop: '20px',
                        }}
                        onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}><i class="far fa-eye"></i> Detalhes</button>
                    </div>          
                </CardBody>
                </Card>
            </Col>))}
            </Row>
        </>      
    );
}

export default ProductByArrival;