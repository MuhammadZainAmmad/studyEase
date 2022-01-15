import { Container, Row, Col, Button } from "react-bootstrap"

const QuizMain = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>Maths</Col>
                    <Col><Button variant="primary" href="/quizparticular">Check</Button></Col>
                </Row>
                <Row>
                    <Col>Biology</Col>
                    <Col><Button variant="primary" href="/quizparticular">Check</Button></Col>
                </Row>
            </Container>
        </>
    )
}

export default QuizMain
