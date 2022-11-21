import { useEffect, useState } from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
import axios from "../../api/axios";

const baseURL = "/v1/Proponentes";

function Proponentes() {
  const [proponentes, setProponentes] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      setProponentes(response.data.resultado);
    });
  }, []);

  return (
    <Card>
      <Card.Header><h3>Proponentes</h3></Card.Header>
      <Card.Body>
        <Card.Text>
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {proponentes.map(({ id, nome, cnpj, email }) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{cnpj}</td>
                    <td>{email}</td>
                    <td><Button variant="success" size="small">Editar</Button></td>
                    <td><Button variant="danger" size="small">Excluir</Button></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
            <Button variant="primary" size="small">Novo</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Proponentes;
