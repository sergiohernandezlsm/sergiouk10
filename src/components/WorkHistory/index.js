import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import css from './WorkHistory.module.scss';
import workHistory from '../../services/workHistory.json'


export default function Experience() {
  return (
    <div className={css.root}>
      <Container>
      <h4 className={css.title}>Work History</h4>
      <div className={css.colorLine}></div>
        {workHistory.map((item, index) => {
          return (
            <Row className={css.record}>
              <Col>
                <Card className={css.card} key={index}>
                  <Card.Header as="h5">{item.year}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.company}</Card.Title>
                    <p>{item.role}</p>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )
        })}
        </Container>
    </div>
  );
}
