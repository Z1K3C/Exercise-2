import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Head1 from './T_head_1.js';
//import Head2 from './T_head_2.js';
import Head3 from './T_head_3.js';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
      return (
         <div>
         <Container fluid>
            <Row>
               <Col xs="12" className="d-flex px-0">
                  <Head1/>
               </Col>
               <Col xs="12" className="d-flex px-0">
                  <Head3/>
               </Col>
            </Row>
         </Container>

         </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
