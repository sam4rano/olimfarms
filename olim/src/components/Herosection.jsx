import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImage from "../assets/about.png";
import Typewriter from "typewriter-effect";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Container fluid className="bg-success-subtle">
      <Row className=" ">
        <Col
          className="d-flex justify-content-center align-items-center text-center font-weight-bold"
          style={{ fontSize: "50px" }}
          md={6} // Adjust the column width for medium-sized screens
        >
          <Typewriter
            options={{
              strings: [
                "Hi, i am Samuel Oyerinde a Project Manager"
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <div>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitterSquare />

          </div>
        </Col>

        <Col className="col-md-6">
          <img src={aboutImage} alt="about us image" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
