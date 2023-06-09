import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="light" bg="primary">
      <Container
        fluid
        className="d-flex flex-row bg-primary justify-content-between"
      >
        <Navbar.Brand>
          <Link
            to="/"
            className="text-white font-bold text-lg text-decoration-none"
          >
            OlimFarms
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="px-3" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-3 justify-content-end">
          <ListGroup className="listgroup d-flex flex-column flex-lg-row list-unstyled ml-auto">
            <ListGroupItem className="bg-primary border-0">
              <Link
                to="/about"
                className="text-white text-decoration-none cursor-pointer hover:border"
              >
                About
              </Link>
            </ListGroupItem>
            <ListGroupItem className="bg-primary border-0">
              <Link
                to="/portfolio"
                className="text-white text-decoration-none cursor-pointer hover:border"
              >
                Portfolio
              </Link>
            </ListGroupItem>
            <ListGroupItem className="bg-primary border-0">
              <Link
                to="/project"
                className="text-white text-decoration-none cursor-pointer hover:border"
              >
                Project
              </Link>
            </ListGroupItem>
            <ListGroupItem className="bg-primary border-0">
            <Button variant="dark">
              <Link
                to="/contact"
                className="text-white text-decoration-none cursor-pointer hover:border"
              >
                Contact
              </Link>
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
