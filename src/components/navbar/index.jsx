import { Container, Navbar } from "react-bootstrap";

export const NavHeader = () => {

    return (
      <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Redux-ReativeCake!</Navbar.Brand>
        </Container>
      </Navbar>
    );
};