import React, { Component } from 'react';
import { /*Container,CardImg,CardBody,CardSubtitle,*/ Row, Col, /*Card,  CardText, CardTitle,  Button */} from 'reactstrap';

var i=1;
var time = 2500;
class Head3 extends Component {               //Definimos el componente de REACT
  
  constructor(props) {                        //Definimos un constructor de clase para definir propiedades
    super(props);                             //Declaramos super para adaptar las propiedades en React
    this.state = {                            //Declaramos los estados de las propiedades
      date: new Date(),                       //Declaramos una propierdad "date" la cual manda a llamar la funcion Date de JS para el tiempo
      Prop1: 1
    };          
  }

  componentDidMount() {                       //Metodo de REACT encargada de mandar llamar una funcion antes de montar el componente de REACT
    this.timerID = setInterval(               //Declata una variable "timerID" que se usara para enlazar la funcion "setInterval" con "clearinterval"
      () => this.tick(),                      //Con la estructura de tipo flecha mando llamar a la funcion tick
      time                                    //Esta cambia cada segundo
    );
   // this.getAlgo();
  /* fetch('')
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/
  }
/*
  getAlgo = () =>{
    fetch('./T_connDB.js')
    .then(response => response.json())
    .then(({data}) =>{
      console.log(data)
    })
    .catch(err => console.log(err))
  }
*/
  componentWillUnmount() {                    //Metodo de REACT encargado de mandar llamar una fucnion despues de montar el componente de REACT
    clearInterval(this.timerID);              //Detiene o limpia a la funcion "timerID"
  }

  tick() {
    i++;                                      //Funcion tick
    this.setState({                           //En la funcion seteo o asigno estados a las propiedades
      date: new Date(),                       //La propiedad a setear es date y el valor a asignar a la propiedad es el tiempo tomado por la funcion Date de JS
      Prop1: i
    });
  }


  

  render() {
    return (
      <section className="card flex-fill"> 
        <Row className="p-3">
            <Col sm="3" >
              <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </Col>
            <Col sm="3">
               <h1>{this.state.Prop1}</h1>   
            </Col>
            <Col sm="3">
               <h1>{i+1000}</h1>   
            </Col>
            <Col sm="3">
               <h1>{}</h1>   
            </Col>
        </Row>
      </section>
     );
  }
}

export default Head3;