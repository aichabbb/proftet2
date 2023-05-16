import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

function Footer() {
  return (
    <div style={{top:'70%'}}>
    <footer className="footer mt-auto py-3" >
      <Container>
        <Row>
          <Col sm={6}>
            <p>My Awesome App &copy; 2023</p>
          </Col>
          <Col sm={6}>
            <p className="float-end"><a href="/privacy-policy">Privacy Policy</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
