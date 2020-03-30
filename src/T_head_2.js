import React, { Component } from 'react';
import { /*Container,NavItem,Card, NavLink*/ Row, Col,  Button ,Nav,  Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Container} from 'reactstrap';

console.log("ALGO");

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function Micomponente(props){
  const mivariable = props.xpropiedad;
  const variableamapear = mivariable.map((renglones) =>
  <div className="card" key={renglones.toString()}>
    {renglones}
  </div>
  );
  return(
    <div className="col-12">{variableamapear}</div>
  );

}


class Head2 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.mifuncion = this.mifuncion.bind(this);
    //this.perro = this.perro.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
     // dropdownOpen: false
      titleB: 'Nombre de mi boton',
      colorB: 'danger',
      unapropiedad: false
    };
    
  }
  

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
      
    });
    console.log('this is:', this)
  }

  perro(){
    console.log("estas tecleandome perro")
  }

  handleClick(){
    console.log('this is:', this);
  }

  mifuncion(){
    console.log("imprimirme en la consola");
   this.setState({
      unapropiedad: true,
      colorB: 'warning',
      titleB: 'otra cosa'
    });
    
  }

  misegundafuncion(){
   return <div>Un HTML</div>;
  }

  render() {
    console.log(this);
    var unavariableXD;
    const numbers = [1, 2];
    const arraydedatos = ["undato","dosdatos","tresdatos","cuatrodatos","cincodatos"];
    for(var i=0;i<3;i++){
      unavariableXD = <div>Otro HTML {i}</div>
    }

    return (
      <section className="card flex-fill"> 
        <Row className="p-3">
            <Col xs="2" >
    
              <Nav tabs>

                <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Perro</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </Nav>


            </Col>
            <Col xs="2">
              <Button color={this.state.colorB} onClick={this.handleClick}>{this.state.titleB}</Button>
              <Button onClick={this.perro}>{"PERRO"}</Button>
            </Col>
            <Col xs="2">
              <Dropdown isOpen={this.state.unapropiedad} toggle={this.mifuncion}>
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Perro</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col xs="2">
              {this.misegundafuncion()}
              {unavariableXD}
              <NumberList numbers={numbers}/>
            </Col>
            <Col xs="4">
              
              <Container fluid>
                <Row>
                  <Micomponente xpropiedad={arraydedatos}></Micomponente>
                </Row>
              </Container>

            </Col>
        </Row>
      </section>
     );
     
  }
  
}

export default Head2;