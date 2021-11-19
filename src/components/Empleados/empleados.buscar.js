import React from "react";
import { request } from "../helper/helpers";
import { Container, Row } from "react-bootstrap";

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { empleados: [] };
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Buscar Empleado</h1>
        </Row>
      </Container>
    );
  }
}
