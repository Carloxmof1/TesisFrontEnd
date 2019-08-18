import React from "react";
import UploadFile from "components/Upload/UploadFile";
import MiNavbar from "components/Navbars/MiNavbar.jsx";
import Select from 'react-select';
import * as Constants from 'services/Constantes'
import { archivo } from 'services/archivos';
import { categoria } from 'services/categoria';
import { ramo } from 'services/ramos';

// reactstrap components

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  CardHeader,
  Container,
  Col,
  Row
} from "reactstrap";


class FormUpload extends React.Component {

  
  constructor(props) {
    super(props);

    this.state = {
      categoria:'', ramo: '', descripcion: '', files:[],
      categorias:[], ramos: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.dataFromDropZone = this.dataFromDropZone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 

  }
  componentDidMount() {

      ramo.getRamosbyRamos()
        .then(res => {
          this.setState({
            ramos: res
          })
      });

      categoria.getAllCategoriasbyCarrera()
      .then(res => {
          this.setState({
            categorias: res
          })
      })
   }

  //cambios en input
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({
      [name]: value
    });
 
  }
  //cambios en input select
  handleSelectChange(value,name) { 
    this.setState({
      [name]: value.value
    });  
  }

  //enviar formulario
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    this.state.files.map((file,index)=>{
        return formData.append(`file${index}`, file);
      })
    //formData.append('cod_usuario', usuario.id);
    formData.append('cod_categoria', this.state.categoria);
    formData.append('cod_ramo', this.state.categoria);
    formData.append('descripcion', this.state.descripcion);

    archivo.Upload(formData)
 
  }

  //recibir files 
  dataFromDropZone = (fileData) => {
    this.setState({
      files: fileData
    });
};

  render() {
     return (
      <>
          <MiNavbar></MiNavbar>
              <Container>
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-4">
                        <div className="text text-center">
                            <strong><big>Compartir Archivos </big></strong>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form onSubmit={this.handleSubmit}>
                          <Row>
                           
                              <Col>
                              <FormGroup>
                                <Select
                                    closeMenuOnSelect={true}
                                    placeholder="Seleccione una categoria"
                                    options={this.state.categorias}
                                    styles={Constants.colourStyles}     
                                    onChange={(value) => this.handleSelectChange(value, "categoria")}                      
                                    />
                                </FormGroup>
                              </Col>
        
                              <Col md="6">
                              <FormGroup>
                                <Select
                                closeMenuOnSelect={true}
                                placeholder="Ramo   COD-1111"
                                options={this.state.ramos}
                                styles={Constants.colourStyles}
                                onChange={(value) => this.handleSelectChange(value, "ramo")}
                                />
                              </FormGroup> 
                              </Col>
                              <Col md="12">     
                                <FormGroup>
                                  <Input
                                    name="descripcion"
                                    placeholder="Describa los archivos para ayudar a la busqueda de estos."
                                    rows="1"
                                    type="textarea"
                                    maxLength="200"
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                                </Col>

                            </Row>
                           
                          <UploadFile 
                            dataFromDropZone = {this.dataFromDropZone}
                          />

                          <div className="text-center"> 
                              <Button className="my-4" color="primary" type="submit"> Compartir</Button>
                          </div>
                        </Form>
                    </CardBody>
                </Card>
              </Container>
         
      </>
    );
  }
}

export default FormUpload;
