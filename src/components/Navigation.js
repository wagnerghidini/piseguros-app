import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";

function Navigation(props) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  console.log(auth)
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav activeKey={location.pathname}
        // onSelect={(selectedKey) => alert('selected ${selectedKey}')}
        >
          {props.links.map(({href, text}) => {
            return (
              <Nav.Item>
                <Nav.Link href={href}>{text}</Nav.Link>
              </Nav.Item>
              )
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
