import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './passwordreset.css';
import PropTypes from 'prop-types';
export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email, password }) => {
    return (
        <Container className="login-form">
            <Row>
                <Col>
                    <h1>
                        Reset Password
                    </h1>
                    <hr />
                    <Form onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label> Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter your Email'

                            >
                            </Form.Control>
                            <Form.Label> </Form.Label>
                        </Form.Group>

                        <Button type="submit">Reset Password</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("login")}>Logging now</a>
                </Col>
            </Row>
        </Container>
    )
}
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
