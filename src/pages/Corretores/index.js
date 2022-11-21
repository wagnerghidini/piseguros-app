import { useEffect, useState } from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
import axios from "../../api/axios";

const baseURL = "/v1/Corretores";

function Corretores() {
  const [corretores, setCorretores] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      setCorretores(response.data.resultado);
    });
  }, []);

  return (
    <Card>
      <Card.Header><h3>Corretores</h3></Card.Header>
      <Card.Body>
        <Card.Text>
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Corretagem</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {corretores.map(({ id, nome, telefone, corretagem }) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{telefone}</td>
                    <td>{corretagem * 100}%</td>
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

export default Corretores;
