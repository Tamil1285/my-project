import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Track whether to show login or signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API request here (e.g., fetch or axios to backend)
    console.log(formData);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup form
  };

  return (
    <Container fluid className=" d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4} className="border p-4 rounded shadow">
          <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                />
              </Form.Group>
            )}
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>

          <Nav className="mt-3" style={{ justifyContent: "center" }}>
            <Nav.Item>
              <Nav.Link onClick={toggleForm}>
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
