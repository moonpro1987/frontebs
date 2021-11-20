import React from "react";
import { request } from "../helper/helpers";
import { Container, Row } from "react-bootstrap";

export default class EventosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventos: [] };
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Buscar Eventos</h1>
        </Row>
      </Container>
    );
  }
}
