import MyCard from "./Card"
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container fluid="xl">
        <Row className="my-3" xl={3} lg={2} md={2} xs={2}>
          <Col>
            <MyCard />
          </Col>
          <Col>
            <MyCard />
          </Col>
          <Col>
            <MyCard />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
