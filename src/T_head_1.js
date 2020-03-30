import React, { Component } from 'react';
import { /*Container,CardImg,CardBody,CardSubtitle,*/ Row, Col, Card,  CardText, 
    CardTitle,  Button } from 'reactstrap';

class Head1 extends Component {
  render() {
    return (
      <section className="card flex-fill"> 
        <Row className="p-3">
            <Col sm="6" >
                <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body outline color="primary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="secondary">Button</Button>
                </Card>
            </Col>
        </Row>
      </section>
     );
  }
}

export default Head1;