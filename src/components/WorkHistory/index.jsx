import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import css from "./WorkHistory.module.scss";
import workHistory from "../../services/workHistory.json";
import DOMPurify from "dompurify";

export default function Experience() {
  return (
    <div className={css.root} id="history">
      <Container>
        <h4 className={css.title}>Work History</h4>
        <div className={css.colorLine}></div>
        {workHistory.map((item, index) => {
          return (
            <Row className={css.record} key={index}>
              <Col>
                <Card className={css.card}>
                  <Card.Header as="h4">{item.role}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.company}</Card.Title>
                    <p>{item.year}</p>
                    {/* <Card.Text>{item.description}</Card.Text> */}
                    <ListGroup as="ol" numbered>
                      {item.descriptionList.map((desc) => (
                        <ListGroup.Item key={`desc-${desc.trim()}`}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(desc),
                            }}
                          />
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}
