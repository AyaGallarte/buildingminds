import { Accordion, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


export default function Categories() {
    return (
        <>
        <Accordion className="accordion-categories" defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="accordion-item-custom-1">
                <Accordion.Header>GRADE 1</Accordion.Header>
                    <Accordion.Body>
                        <Row className="row-categories d-flex justify-content-center align-items-center">
                            <Col>
                                <ul>
                                    <li>Grade 1 English</li>
                                    <li>Grade 1 Math</li>
                                    <li>Grade 1 Science</li>
                                    <li>Grade 1 Arts</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Grade 1 History</li>
                                    <li>Grade 1 Music</li>
                                    <li>Grade 1 Computer</li>
                                    <li>Grade 1 Physical Education</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion-item-custom-2">
                <Accordion.Header>GRADE 2</Accordion.Header>
                    <Accordion.Body>
                        <Row className="row-categories d-flex justify-content-center align-items-center">
                            <Col>
                                <ul>
                                    <li>Grade 2 English</li>
                                    <li>Grade 2 Math</li>
                                    <li>Grade 2 Science</li>
                                    <li>Grade 2 Arts</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Grade 2 History</li>
                                    <li>Grade 2 Music</li>
                                    <li>Grade 2 Computer</li>
                                    <li>Grade 2 Physical Education</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordion-item-custom-3">
                <Accordion.Header>GRADE 3</Accordion.Header>
                    <Accordion.Body>
                        <Row className="row-categories d-flex justify-content-center align-items-center">
                            <Col>
                                <ul>
                                    <li>Grade 3 English</li>
                                    <li>Grade 3 Math</li>
                                    <li>Grade 3 Science</li>
                                    <li>Grade 3 Arts</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Grade 3 History</li>
                                    <li>Grade 3 Music</li>
                                    <li>Grade 3 Computer</li>
                                    <li>Grade 3 Physical Education</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="accordion-item-custom-4">
                <Accordion.Header>GRADE 4</Accordion.Header>
                    <Accordion.Body>
                        <Row className="row-categories d-flex justify-content-center align-items-center">
                            <Col>
                                <ul>
                                    <li>Grade 4 English</li>
                                    <li>Grade 4 Math</li>
                                    <li>Grade 4 Science</li>
                                    <li>Grade 4 Arts</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Grade 4 History</li>
                                    <li>Grade 4 Music</li>
                                    <li>Grade 4 Computer</li>
                                    <li>Grade 4 Physical Education</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="accordion-item-custom-5">
                <Accordion.Header>GRADE 5</Accordion.Header>
                    <Accordion.Body>
                        <Row className="row-categories d-flex justify-content-center align-items-center">
                            <Col>
                                <ul>
                                    <li>Grade 5 English</li>
                                    <li>Grade 5 Math</li>
                                    <li>Grade 5 Science</li>
                                    <li>Grade 5 Arts</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Grade 5 History</li>
                                    <li>Grade 5 Music</li>
                                    <li>Grade 5 Computer</li>
                                    <li>Grade 5 Physical Education</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="accordion-item-custom-6">
                <Accordion.Header>GRADE 6</Accordion.Header>
                    <Accordion.Body>
                        <Row className="row-categories d-flex justify-content-center align-items-center">
                            <Col>
                                <ul>
                                    <li>Grade 6 English</li>
                                    <li>Grade 6 Math</li>
                                    <li>Grade 6 Science</li>
                                    <li>Grade 6 Arts</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Grade 6 History</li>
                                    <li>Grade 6 Music</li>
                                    <li>Grade 6 Computer</li>
                                    <li>Grade 6 Physical Education</li>
                                </ul>
                            </Col>
                        </Row>
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        </>
    );
}

