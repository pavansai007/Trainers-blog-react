import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Card} from 'react-bootstrap';

import "./img.css";


export class Img extends Component {

    render() {
        return (
            <div>
                <Container className="con">
                <Row xs={2} md={4} lg={6}>
                    <Col>
                    <Card className="card-1">
                    <Card.Img className="imgs" variant="top" src="images\3.gif" />
                 
                </Card>
                </Col>
                <Col>
                    <Card className="card-1">
                    <Card.Img className="imgs" variant="top" src="images\4.gif" />
                  
                </Card>
                </Col>
                <Col>
                    <Card className="card-1">
                    <Card.Img className="imgs" variant="top" src="images\1.gif" />
               
                </Card>
                </Col>
                <Col>
                    <Card className="card-1">
                    <Card.Img className="imgs-2" variant="top" src="images\2.gif" />
                  
                </Card>
                </Col>
                <Col>
                    <Card className="card-1">
                    <Card.Img className="imgs-2" variant="top" src="images\5.gif" />
                   
                </Card>
                </Col>
                <Col>
                    <Card className="card-1">
                    <Card.Img className="imgs-2" variant="top" src="images\6.gif" />
                    
                </Card>
                </Col>
                
                

                
                </Row>
                </Container>
                
            </div>
        )
    }
}

export default Img
