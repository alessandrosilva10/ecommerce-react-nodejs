import React, { useState, useEffect } from 'react';
import ShowImages from '../../api/apiImages';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { getProducts } from '../../api/apiProduct';

const ProductBySell = () => {
    const [productsBySell, setProductsBySell] = useState([]);
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

    useEffect(() => {
        loadProductsBySell();
    }, []);

    return(
        <>
            <br/><br/>
            <h1 style={{color: 'white'}}>Produtos mais vendidos</h1>
            <Row>
            {productsBySell.map((product, index) => (
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
                        background: "#11cdef",
                        color: "white",
                        borderRadius: "4px",
                        borderColor: "#11cdef",
                        border: "1px solid #11cdef",
                        fontWeight: "700",
                        fontSize: ".8em",
                        marginLeft: '5px',
                        marginTop: '20px',
                        }}
                        onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}><i class="far fa-money-bill-alt"></i> Adicionar no Carrinho</button>
    
                        <button 
                        style={{
                        cursor: "pointer",
                        bottom: "28px",
                        height: "35px",
                        background: "#11cdef",
                        color: "white",
                        borderRadius: "4px",
                        borderColor: "#11cdef",
                        border: "1px solid #11cdef",
                        fontWeight: "700",
                        fontSize: ".8em",
                        marginLeft: '15px',
                        marginTop: '20px',
                        }}
                        onClick={() => alert("Produto " + product.name + " adicionado ao carrinho!")}><i class="far fa-eye"></i> Ver o Produto</button>
                    </div>          
                </CardBody>
                </Card>
            </Col>))}
            </Row>
        </>      
    );
}

export default ProductBySell;