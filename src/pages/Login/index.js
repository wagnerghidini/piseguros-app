import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from '../../api/axios';
import jwtDecode from 'jwt-decode';
import { Col, Image, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useLocation } from "react-router-dom";

function Login() {

  const location = useLocation();
  const from = location.state?.from?.pathname;

  const LOGIN_URL = "/v1/Usuarios/Login";

  const { setAuth } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ usuario, senha }),
        {
          headers: { "Content-Type": "application/json" },
        });

      const token = response?.data.token;
      const role = jwtDecode(token).role;
      const expires = response?.data.expires;
      setAuth({ token, expires, role });
      // navigate(from, {replace: true})

    }
    catch (err) {
      alert(err.response.data.erros[0]);
    }
  }

  return (

    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Header>
            <h1>PI - Seguros</h1>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Image fluid src='../../logo-seguros.jpg'></Image>
              </Col>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="text" placeholder="Usuário" value={usuario} onChange={(e => setUsuario(e.target.value))} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" value={senha} onChange={(e => setSenha(e.target.value))} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
