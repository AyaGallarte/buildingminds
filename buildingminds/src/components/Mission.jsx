import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import mission from '../images/logo-color.png';


export default function Mission() {
    return (
        <div className="mission-img">
            <h2><img src={mission}></img></h2>
            <p>Building Minds is here to provide a high-level quality of learning resources to anyone, anywhere.</p>
        </div>
    );
}

