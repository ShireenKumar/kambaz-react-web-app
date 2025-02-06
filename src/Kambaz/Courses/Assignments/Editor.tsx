import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function AssignmentEditor() {
    return (
        <Container id="wd-assignments-editor">
            <h2>Assignment Editor</h2>
            <Form>
                <Row className="align-items-center">
                    <Col xs={3}><Form.Label>Assignment Name</Form.Label></Col>
                    <Col><Form.Control type="text" defaultValue="A1 - ENV + HTML" /></Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Description</Form.Label></Col>
                    <Col><Form.Control as="textarea" rows={4} defaultValue=
                        "Feel free to use the following starter code to implement the Assignments component. If you prefer to build your own version from scratch, feel free to ignore the code provided..."
                    /></Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Points</Form.Label></Col>
                    <Col><Form.Control type="number" defaultValue="100" /></Col>
                </Row>
                
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Assignment Group</Form.Label></Col>
                    <Col>
                        <Form.Control as="select">
                            <option>Assignment</option>
                            <option>Project</option>
                            <option>Quiz</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Display Grade As</Form.Label></Col>
                    <Col>
                        <Form.Control as="select">
                            <option>Percentage</option>
                            <option>Letter</option>
                            <option>Fraction</option>
                        </Form.Control>
                    </Col>
                </Row>
                
                <Row className="align-items-center mt-2">
                <Col xs={3}><Form.Label>Submission Type</Form.Label></Col>
                <Card className="mt-3 p-3">
                    <Card.Body>
                    
                    <Col>
                        <Form.Control as="select">
                            <option>Online</option>
                            <option>Paper</option>
                        </Form.Control>
                        <Form.Group controlId="wd-online-entry-options">
                            <Form.Label>Online Entry Options</Form.Label>
                            <div>
                                <Form.Check type="checkbox" label="Text Entry" />
                                <Form.Check type="checkbox" label="Website URL" defaultChecked />
                                <Form.Check type="checkbox" label="Media Recordings" />
                                <Form.Check type="checkbox" label="Student Annotation" />
                                <Form.Check type="checkbox" label="File Uploads" />
                            </div>
                        </Form.Group>
                    </Col>
                    </Card.Body>
                </Card>
                    
                </Row>

                <Row className="align-items-center mt-2">
                <Col xs={3}><Form.Label>Assign</Form.Label></Col>
                <Card className="mt-3 p-3">
                    <Card.Body>
                    
                    <Col>
                    <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Assign to</Form.Label></Col>
                    <Col><Form.Control type="text" defaultValue="Everyone" /></Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Due Date</Form.Label></Col>
                    <Col><Form.Control type="date" defaultValue="2025-01-21" /></Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={6}><Form.Label>Available from</Form.Label></Col>
                    <Col xs={6}><Form.Label>Until</Form.Label></Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs={6}><Form.Control type="date" defaultValue="2025-02-20" /></Col>
                    <Col xs={6}><Form.Control type="date" defaultValue="2025-03-20" /></Col>
                </Row>
                    
                    </Col>
                    </Card.Body>
                </Card>
                    
                </Row>

                

                <Button variant="primary" type="submit" className="mt-3">Save</Button>
                <Button variant="secondary" className="ms-2 mt-3">Cancel</Button>
            </Form>
        </Container>
    );
}