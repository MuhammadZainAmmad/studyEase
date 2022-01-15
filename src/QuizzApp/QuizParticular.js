import { Container, Row, Col, Button } from "react-bootstrap"

const QuizParticular = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>Quiz1</Col>
                    <Col><Button variant="primary" href="/startquiz">Take Quiz</Button></Col>
                </Row>
                <Row>
                    <Col>Quiz2</Col>
                    <Col><Button variant="primary" href="/startquiz">Take Quiz</Button></Col>
                </Row>
                <Row>
                    <Col>Quiz3</Col>
                    <Col><Button variant="primary" href="/startquiz">Take Quiz</Button></Col>
                </Row>
                <Row>
                    <Col>Quiz4</Col>
                    <Col><Button variant="primary" href="/startquiz">Take Quiz</Button></Col>
                </Row>
                <Row>
                    <Col>Quiz5</Col>
                    <Col><Button variant="primary" href="/startquiz">Take Quiz</Button></Col>
                </Row>
            </Container>
        </>
    )
}

export default QuizParticular
