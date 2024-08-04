import { Button, CardGroup, Card, Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Categories from '../components/Categories';
import logo from '../images/logo.png'; 
import learn2 from '../images/learn2.jpeg';
import learn13 from '../images/learn13.jpg'; 
import learn6 from '../images/learn6.jpg';
import learn15 from '../images/learn15.jpg';
import learn9 from '../images/learn9.jpg';
import learn11 from '../images/learn11.webp';


const cardData = [
  {
    id: 1,
    imgSrc: learn6,
    title: "English",
    description: "Grade 6 English"
  },
  {
    id: 2,
    imgSrc: learn15, 
    title: "Math",
    description: "Grade 5 Math"
  },
  {
    id: 3,
    imgSrc: learn9, 
    title: "Science",
    description: "Grade 7 Science"
  },
  {
    id: 4,
    imgSrc: learn11, 
    title: "Arts",
    description: "Grade 1 Arts"
  }
];

export default function Home() {
    return (
        <>
        <section>
            <Navbar expand="lg" className="navbar">
                <Container className="container-navbar">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            width="150"
                            height="40"
                            className="d-inline-block"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#categories">CATEGORIES</Nav.Link>
                            <Nav.Link href="">RESOURCES</Nav.Link>
                            <Nav.Link href="#featured">FEATURED</Nav.Link>
                            
                        </Nav>                   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>

        <section id="home">
            <div className="page-container">
                <div className="content-wrapper">
                    <div id="introduction">
                        <Row>
                            <Col lg={4} xs={12} className="order-xs-1 order-lg-1">
                                <h1>Providing high-quality learning materials to children, anywhere.</h1>
                            </Col>
                            <Col lg={8} xs={12} className="order-xs-2 order-lg-2">
                                <img src={learn13} className="d-block img-fluid" alt="Introduction Image" />
                            </Col>
                        </Row>
                    </div>
                    <div id="featured" className="container-cards">
                        <h1 className="featured-caption">Featured Section</h1>
                        <Row className="g-4">
                          {cardData.map((card) => (
                            <Col key={card.id} lg={3} xs={12} className="mb-4">
                              <Card className="card h-100">
                                <Card.Img 
                                  variant="top" 
                                  src={card.imgSrc} 
                                  className="product-image" 
                                  alt={card.title} 
                                />
                                <Card.Body className="cardBody">
                                  <Card.Title className="custom-card-title">{card.title}</Card.Title>
                                  <Card.Text className="custom-card-description">{card.description}</Card.Text>
                                  <Card.Text className="custom-card-price">{card.price}</Card.Text>
                                  <Button className="btn" variant="primary" size="sm">Details</Button>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                        </Row>
                    </div>
                </div>
            </div>
        </section>

        <section id="categories">
            <div>
                <h1 className="categories-caption">Categories Section</h1>
                <Categories />
            </div>
        </section>

        <section>
            <div className="about-contact" id="about">

            </div>
            <div className="footer-container">

            </div>
        </section>
        
        </>
    );
}

