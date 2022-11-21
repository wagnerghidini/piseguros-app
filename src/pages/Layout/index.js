import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

function Layout() {
    return (
        <main className="main">
            <Navigation links={[
                // {href: "/login", text: "Login"},
                {href: "/home", text: "Home"},
                {href: "/corretores", text: "Corretores"},
                {href: "/proponentes", text: "Proponentes"},
                {href: "/segurados", text: "Segurados"}
            ]}/>
            <Container>
                <Outlet />
            </Container>
        </main>
    );
}

export default Layout;
  