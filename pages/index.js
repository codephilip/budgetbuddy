import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";
import { Row, Card, Form, Button, Col } from "react-bootstrap";

function Home({ products }) {
  return (
    <div className="Home">
            <Row>
                <Col id="HomeBanner"/>
            </Row>
            <Row className="mt-3">
                <Col xs={4}>
                    <Card className="p-3">
                        <Button className="mb-3" href="/login">Login</Button>
                        <Button variant="secondary" href="/signup">Sign Up</Button>
                    </Card>
                </Col>
                <Col>
					<p>
                        Budget Buddy is for people like you. People who want control over their money choose us because we never ask for your bank account or credit card information. And best of all? It's completely free. You can make as many budgets as you want and we'll never charge you a cent.
					</p>
                </Col>
            </Row>
        </div>
  );
}

export default Home;
