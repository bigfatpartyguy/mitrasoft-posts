import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import photo from '../../assets/images/profile-photo.jpg';
import './About.css';

export default function About() {
  return (
    <Container
      fluid="md"
      style={{
        paddingTop: '25px',
      }}
    >
      <Row
        style={{
          marginBottom: '50px',
        }}
      >
        <Col sm={12} md={6} className="d-flex justify-content-center">
          <Image src={photo} rounded="true" width="250px" />
        </Col>
        <Col>
          <Row>
            <Col>
              <h2>
                Hi! I&apos;m Maksim Morozov, I&apos;m an aspiring Frontend
                developer.
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                My dream is to become a professional in this field and make the
                world a better place.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <p>Get to know more about me:</p>
      </Row>
      <Row>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Skills:</Accordion.Header>
            <Accordion.Body
              className="d-flex flex-wrap justify-content-start"
              style={{
                fontSize: '1.4em',
              }}
            >
              <Badge className="m-1" bg="success">
                HTML
              </Badge>
              <Badge className="m-1" bg="success">
                CSS
              </Badge>
              <Badge className="m-1" bg="success">
                JavaScript
              </Badge>
              <Badge className="m-1" bg="success">
                React
              </Badge>
              <Badge className="m-1" bg="success">
                React-Bootstrap
              </Badge>
              <Badge className="m-1" bg="success">
                TypeScript
              </Badge>
              <Badge className="m-1" bg="success">
                Redux
              </Badge>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Certificates:</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a
                    href="https://www.codecademy.com/profiles/maxmorozov/certificates/60198396cd6fb3000e88e8e4"
                    target="_blanc"
                  >
                    Create an Advanced Web App with React and Redux Skill Path
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codecademy.com/profiles/maxmorozov/certificates/13ffe064f6504262a9e9e3cf76be9bf3"
                    target="_blanc"
                  >
                    Learn Advanced React Course
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codecademy.com/profiles/maxmorozov/certificates/56fb1e71303e37b643bb1905f31c8a09"
                    target="_blanc"
                  >
                    Learn TypeScript Course
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codecademy.com/profiles/maxmorozov/certificates/5c9ce0b45f1de879ebcad4fd"
                    target="_blanc"
                  >
                    Create a Front-End App with React
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codecademy.com/profiles/maxmorozov/certificates/5c9ce0b45f1de879ebcad4fd"
                    target="_blanc"
                  >
                    Create a Front-End App with React
                  </a>
                </li>
                <li>
                  <a
                    href="https://certificates.cs50.io/b4886bd8-53cb-4e60-9048-d286206b996f.pdf?size=letter"
                    target="_blanc"
                  >
                    Harvards&apos;s CS50
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/certification/bigfatpartyguy/javascript-algorithms-and-data-structures"
                    target="_blanc"
                  >
                    JavaScript Algorithms and Data Scructures
                  </a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}
