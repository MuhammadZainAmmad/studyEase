import { Container, Button, Card, Row, Col } from "react-bootstrap"

const QuizMain = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col >
                        <Card>
                            <Card.Img variant="top" height={200} src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                            <Card.Body>
                                <Card.Title>Mathematics</Card.Title>
                                <Button variant="primary" href="/quizparticular">View Quizzes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" height={200} src="https://images.unsplash.com/photo-1559757175-0828e13882ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" />
                            <Card.Body>
                                <Card.Title>Biology</Card.Title>
                                <Button variant="primary" href="/quizparticular">View Quizzes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <Container fluid className="mt-2 p-2 bg-danger">
                <Row className="text-start">
                    <Col>Maths</Col>
                    <Col><Button variant="primary" href="/quizparticular">View</Button></Col>
                </Row>
                <Row>
                    <Col>Biology</Col>
                    <Col><Button variant="primary" href="/quizparticular">View</Button></Col>
                </Row>
            </Container> */}
        </>
    )
}

export default QuizMain
