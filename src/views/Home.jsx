import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      color:false,
    };
  }
  componentDidMount(){
     this.setState({
      color:this.props.user.color,
      nombre: this.props.user.nombre,
    })

  }


  render() {
    return (
      <>
       <section className="section section-lg section-shaped" >
          <div className="shape shape-style-1" style={{backgroundColor:this.state.color?this.state.color:"#8965e0"}}>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
     
          <Container className="">
          <h3 className="display-3 text-white">
                  Bienvenido  @{this.state.nombre}
                </h3>
            <Row className="row-grid justify-content-between">
              <Col lg="6">
                <p className="lead text-white" align="justify">
                  <small>
                    <b>¿Que es Estudeo UCM?</b>
                    <br/>
                    Es una plataforma que tiene como objetivo apoyar la interaccion entre alumnos para 
                    poder compartir material,
                    en Estudeo ayudas, te ayudan!
                    <br/><br/>
                    <b>¿Como lograr esto?</b>
                    <br/>
                    Cada vez que cursas una asignatura quedas con una gran cantidad de conocimiento en tus manos, 
                    estos pueden ser de gran ayuda a tus compañeros.
                    Mediante esta plataforma podrás compartir todos aquellos conocimientos, 
                    así como acceder a los que alumnos de otras generaciones entregaron
                    
                  </small> 
                </p>
              </Col>
              <Col lg="6">
                <p className="lead text-white" align="justify">
                  <small>
                    <b>¿Necesitas ayuda?</b>
                    <br/>
                    Si tienes dudas con respecto a las funcionalidades de la plataforma puedes presionar el icono
                    de ( <i className="fa fa-question fa-2x"></i> ) ubicado en la parte superior derecha.
                    <br/>  <br/>
                    <b>¿Deseas otro estilo?</b>
                    <br/>
                    Puedes modificar el color a tu gusto, solo tienes que presionar el icono de
                    ( <i className="fa fa-cogs fa-2x"></i> ) ubicado en la parte superior derecha y elegir tu color favorito.
                    
                    
                  </small> 
                </p>
              </Col>
            </Row>
          </Container>
          </section>
      </>
    );
  }
}

export default Home;
