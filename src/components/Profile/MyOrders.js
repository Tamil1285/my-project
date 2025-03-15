import React from "react";
import { Container, Table, Badge } from "react-bootstrap";
import "./MyOrders.css";

const MyOrders = () => {
    // Sample order data (replace with actual API data)
    const orders = [
        { id: "ORD1234", date: "2025-03-10", status: "Delivered", total: "$120.00" },
        { id: "ORD5678", date: "2025-02-28", status: "Shipped", total: "$75.50" },
        { id: "ORD9101", date: "2025-02-15", status: "Pending", total: "$200.00" },
    ];

    return (
        <Container>
            <h4 className="mb-4">My Orders</h4>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>
                                <Badge bg={order.status === "Delivered" ? "success" : order.status === "Shipped" ? "info" : "warning"}>
                                    {order.status}
                                </Badge>
                            </td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrders;
