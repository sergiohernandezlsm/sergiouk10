import React from 'react';
import css from './Footer.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <div className={css.footer}>
      <Container>
        <Row>
          <Col>
            <p className={css.footerText}>"Success in life could be defined as the continued expansion of happiness and the progressive realization of worthy goals".<span>Deepak Chopra</span></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}