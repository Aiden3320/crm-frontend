import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.comp.css';
import PropTypes from 'prop-types';
export const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, password }) => {
    return (
        <Container className="login-form">
            <Row>
                <Col>
                    <h1>
                        Client Login
                    </h1>
                    <hr />
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label> Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter your Email'
                                required
                            >
                            </Form.Control>
                            <Form.Label> </Form.Label>
                            <Form.Label> Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Enter your Password'
                                required
                            >
                            </Form.Control>
                            <Form.Label> </Form.Label>
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("reset")}>Forgt Password</a>
                </Col>
            </Row>
        </Container>
    )
}
LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}
