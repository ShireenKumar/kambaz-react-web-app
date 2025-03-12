import { Form, Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import assignments from '../../Database/assignments.json';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const assignment = assignments.find((a: any) => a._id === aid);

    if (!assignment) {
        return <h3>Assignment not found</h3>;
    }

    return (
        <Container id="wd-assignments-editor">
            <h2>Edit Assignment: {assignment.title}</h2>

            <Form>
                <Row className="align-items-center">
                    <Col xs={3}><Form.Label>Assignment Name</Form.Label></Col>
                    <Col>
                        <Form.Control type="text" defaultValue={assignment.title} disabled={!isFaculty} />
                    </Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Description</Form.Label></Col>
                    <Col>
                        <Form.Control as="textarea" rows={4} defaultValue="Describe the assignment here..." disabled={!isFaculty} />
                    </Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Points</Form.Label></Col>
                    <Col>
                        <Form.Control type="number" defaultValue="100" disabled={!isFaculty} />
                    </Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Assignment Group</Form.Label></Col>
                    <Col>
                        <Form.Control as="select" defaultValue="Assignment" disabled={!isFaculty}>
                            <option>Assignment</option>
                            <option>Project</option>
                            <option>Quiz</option>
                        </Form.Control>
                    </Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Display Grade As</Form.Label></Col>
                    <Col>
                        <Form.Control as="select" defaultValue="Percentage" disabled={!isFaculty}>
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
                            <Form.Control as="select" defaultValue="Online" disabled={!isFaculty}>
                                <option>Online</option>
                                <option>Paper</option>
                            </Form.Control>

                            <Form.Group controlId="wd-online-entry-options" className="mt-2">
                                <Form.Label>Online Entry Options</Form.Label>
                                <div>
                                    <Form.Check type="checkbox" label="Text Entry" disabled={!isFaculty} />
                                    <Form.Check type="checkbox" label="Website URL" defaultChecked disabled={!isFaculty} />
                                    <Form.Check type="checkbox" label="Media Recordings" disabled={!isFaculty} />
                                    <Form.Check type="checkbox" label="Student Annotation" disabled={!isFaculty} />
                                    <Form.Check type="checkbox" label="File Uploads" disabled={!isFaculty} />
                                </div>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs={3}><Form.Label>Assign</Form.Label></Col>
                    <Card className="mt-3 p-3">
                        <Card.Body>
                            <Row className="align-items-center mt-2">
                                <Col xs={3}><Form.Label>Assign to</Form.Label></Col>
                                <Col><Form.Control type="text" defaultValue="Everyone" disabled={!isFaculty} /></Col>
                            </Row>

                            <Row className="align-items-center mt-2">
                                <Col xs={3}><Form.Label>Due Date</Form.Label></Col>
                                <Col><Form.Control type="date" defaultValue="2025-02-21" disabled={!isFaculty} /></Col>
                            </Row>

                            <Row className="align-items-center mt-2">
                                <Col xs={6}><Form.Label>Available from</Form.Label></Col>
                                <Col xs={6}><Form.Label>Until</Form.Label></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col xs={6}><Form.Control type="date" defaultValue="2025-02-20" disabled={!isFaculty} /></Col>
                                <Col xs={6}><Form.Control type="date" defaultValue="2025-03-20" disabled={!isFaculty} /></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>

                {isFaculty ? (
                    <div className="mt-3">
                        <Link to={`/courses/${cid}/assignments`} className="btn btn-primary me-2">Save</Link>
                        <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary">Cancel</Link>
                    </div>
                ) : (
                    <div className="mt-3">
                        <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary">Back</Link>
                    </div>
                )}
            </Form>
        </Container>
    );
}