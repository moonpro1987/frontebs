import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Button } from "react-bootstrap"
import {
  PaginationProvider,
  PaginationListStandalone,
} from "react-pagination-component";
import { PaginationFactory } from "react-pagination-component";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { request } from "../Eventos/eventos.buscar.js";
import Loading from "../loading/loading";

const { SearchBar } = Search;

export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      rows: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ Loading: true });
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({
          rows: response.data,
          Loading: false,
        });
      })
      .catch((error) => {
        this.setState({ Loading: false });
        console.error(error);
      });
  }

  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };

    return (
      <>
        <Loading show={this.state.Loading} />
        <ToolkitProvider>
          keyField="id" data={this.state.rows}
          columns={this.props.columns}
          search
          {">"}
          {(props) => (
            <>
              <PaginationProvider pagination={paginationFactory(options)}>
                {({ paginationProps, paginationTableProps }) => (
                  <>
                    <Row>
                      <Col>
                        <SizePerPageDropdownStandalone {...paginationProps} />
                      </Col>
                    </Row>

                    <Card>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    <PaginationListStandalone {...paginationProps} />
                  </>
                )}
              </PaginationProvider>
            </>
          )}
        </ToolkitProvider>
      </>
    );
  }
}
