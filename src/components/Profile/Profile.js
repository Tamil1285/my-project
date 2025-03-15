import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { FaUser, FaMapMarkerAlt, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import ProfileInformation from "./ProfileInformation";
import ManageAddresses from "./ManageAddresses";
import MyOrders from "./MyOrders";
import "./Profile.css";

const Profile = () => {
    const [selectedSection, setSelectedSection] = useState("Profile Information");
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogout = () => {
        setSelectedSection("Logout");
    };

    const handleLogoutConfirm = () => {
        // Perform logout logic (e.g., clearing user data)
        console.log("User logged out");
        
        // Redirect to home page
        navigate("/");
    };

    return (
        <Container>
            {/* User Info */}
            <Row className="justify-content-start" style={{ marginLeft: "60px" }}>
                <Col md={6} className="d-flex align-items-center p-3">
                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
                        style={{ width: "60px", height: "60px" }}>
                        <FaUser size={30} className="text-white" />
                    </div>
                    <h5 className="mb-0 ms-3">Tamilarasan A</h5>
                </Col>
            </Row>

            <Row className="justify-content-center gx-3">
                {/* Sidebar */}
                <Col md={3} className="p-3 bg-light profile-container d-flex flex-column justify-content-between">
                    <ListGroup className="profile-menu">
                        {[
                            { name: "Profile Information", icon: <FaUser /> },
                            { name: "Manage Addresses", icon: <FaMapMarkerAlt /> },
                            { name: "MY ORDERS", icon: <FaShoppingBag /> },
                        ].map((item, index) => (
                            <ListGroup.Item
                                key={index}
                                active={selectedSection === item.name}
                                onClick={() => setSelectedSection(item.name)}
                                className="profile-menu-item d-flex align-items-center"
                                style={{ cursor: "pointer", border: "none", borderRadius: "0" }}>
                                <span className="me-2">{item.icon}</span> {item.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    {/* Logout Button */}
                    <Button  
                        onClick={handleLogout} 
                        className="mt-3 ps-3 d-flex align-items-center logout-button">
                        <FaSignOutAlt className="me-2" /> Logout
                    </Button>
                </Col>

                {/* Content Section */}
                <Col md={8} className="p-4 bg-light">
                    {selectedSection === "Profile Information" && <ProfileInformation />}
                    {selectedSection === "Manage Addresses" && <ManageAddresses />}
                    {selectedSection === "MY ORDERS" && <MyOrders />}

                    {/* Logout Confirmation */}
                    {selectedSection === "Logout" && (
                        <div className="p-4">
                            <h5>Are you sure you want to logout?</h5>
                            <div className="d-flex mt-3">
                                <Button variant="danger" className="me-3" onClick={handleLogoutConfirm}>
                                    Confirm Logout
                                </Button>
                                <Button variant="secondary" onClick={() => setSelectedSection("Profile Information")}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
