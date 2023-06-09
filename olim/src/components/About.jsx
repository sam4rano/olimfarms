import aboutImage from "../assets/about.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container className="flex flex-row justify-between h-[400px] p-[30px] mb-[40px]">
      <Row className="w-1/2 flex justify-center flex-col justify-items-center content-center">
        <Col>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h1>
            Itaque architecto mollitia deleniti soluta perferendis facilis
            reiciendis,
          </h1>
          <h1>dicta aspernatur dolore iure, voluptatem quia enim.</h1>
        </Col>
        <Col className="col-6">
          <img src={aboutImage} alt="about us image" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
