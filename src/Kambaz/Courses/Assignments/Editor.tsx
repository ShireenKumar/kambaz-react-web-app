import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import assignments from '../../Database/assignments.json';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();

    // Find the selected assignment
    const assignment = assignments.find((a: any) => a._id === aid);

    // If assignment is not found
    if (!assignment) {
        return <h3>Assignment not found</h3>;
    }

    return (
        <Container id="wd-assignments-editor">
            <h2>Edit Assignment: {assignment.title}</h2>

            <Form>
                {/* Assignment Name */}
                <Row className="align-items-center">
                    <Col xs={3}><Form.Label>Assignment Name</Form.Label></Col>
                    <Col><Form.Control type="text" defaultValue={assignment.title} /></Col>
                </Row>

                {/* Description */}
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Description</Form.Label></Col>
                    <Col><Form.Control as="textarea" rows={4} defaultValue="Describe the assignment here..." /></Col>
                </Row>

                {/* Points */}
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Points</Form.Label></Col>
                    <Col><Form.Control type="number" defaultValue="100" /></Col>
                </Row>

                {/* Assignment Group */}
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Assignment Group</Form.Label></Col>
                    <Col>
                        <Form.Control as="select" defaultValue="Assignment">
                            <option>Assignment</option>
                            <option>Project</option>
                            <option>Quiz</option>
                        </Form.Control>
                    </Col>
                </Row>

                {/* Display Grade As */}
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Display Grade As</Form.Label></Col>
                    <Col>
                        <Form.Control as="select" defaultValue="Percentage">
                            <option>Percentage</option>
                            <option>Letter</option>
                            <option>Fraction</option>
                        </Form.Control>
                    </Col>
                </Row>

                {/* Submission Type */}
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Submission Type</Form.Label></Col>
                    <Card className="mt-3 p-3">
                        <Card.Body>
                            <Form.Control as="select" defaultValue="Online">
                                <option>Online</option>
                                <option>Paper</option>
                            </Form.Control>

                            <Form.Group controlId="wd-online-entry-options" className="mt-2">
                                <Form.Label>Online Entry Options</Form.Label>
                                <div>
                                    <Form.Check type="checkbox" label="Text Entry" />
                                    <Form.Check type="checkbox" label="Website URL" defaultChecked />
                                    <Form.Check type="checkbox" label="Media Recordings" />
                                    <Form.Check type="checkbox" label="Student Annotation" />
                                    <Form.Check type="checkbox" label="File Uploads" />
                                </div>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Row>

                {/* Assign Section */}
                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Assign</Form.Label></Col>
                    <Card className="mt-3 p-3">
                        <Card.Body>
                            {/* Assign To */}
                            <Row className="align-items-center mt-2">
                                <Col xs={3}><Form.Label>Assign to</Form.Label></Col>
                                <Col><Form.Control type="text" defaultValue="Everyone" /></Col>
                            </Row>

                            {/* Due Date */}
                            <Row className="align-items-center mt-2">
                                <Col xs={3}><Form.Label>Due Date</Form.Label></Col>
                                <Col><Form.Control type="date" defaultValue="2025-02-21" /></Col>
                            </Row>

                            {/* Available From and Until */}
                            <Row className="align-items-center mt-2">
                                <Col xs={6}><Form.Label>Available from</Form.Label></Col>
                                <Col xs={6}><Form.Label>Until</Form.Label></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col xs={6}><Form.Control type="date" defaultValue="2025-02-20" /></Col>
                                <Col xs={6}><Form.Control type="date" defaultValue="2025-03-20" /></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>

                <div className="mt-3">
                    <Link to={`/courses/${cid}/assignments`} className="btn btn-primary me-2">Save</Link>
                    <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary">Cancel</Link>
                </div>
            </Form>
        </Container>
    );
}
