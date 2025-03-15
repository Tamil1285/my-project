import React, { useState } from "react";
import { Container, Button, Form, Dropdown, Row, Col, ListGroup } from "react-bootstrap";
import "./ManageAddresses.css";

const ManageAddresses = () => {
    const [showAddressContainer, setShowAddressContainer] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [addresses, setAddresses] = useState([
        { id: 1, name: "Tamil", phone: "7503094800", type: "Home", details: "123, XYZ Street, City, State - 123456", pincode: "123456", city: "City", state: "State", landmark: "Near Park" },
        { id: 2, name: "Tamil", phone: "7503094800", type: "Work", details: "456, ABC Road, Another City, State - 654321", pincode: "654321", city: "Another City", state: "State", landmark: "Opposite Mall" }
    ]);

    const [newAddress, setNewAddress] = useState({
        id: null,
        name: "",
        phone: "",
        type: "Home",
        details: "",
        pincode: "",
        city: "",
        state: "",
        landmark: ""
    });

     // Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Allow only numeric input for phone and pincode
        if (name === "phone" || name === "pincode") {
            if (!/^\d*$/.test(value)) return; // Prevent non-numeric input
        }

        // Limit phone to 10 digits and pincode to 6 digits
        if ((name === "phone" && value.length > 10) || (name === "pincode" && value.length > 6)) {
            return;
        }

        setNewAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleAddOrUpdateAddress = () => {
        if (!newAddress.name || !newAddress.phone || !newAddress.pincode || !newAddress.city || 
            !newAddress.state || !newAddress.details || !newAddress.type) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (newAddress.id) {
            setAddresses(addresses.map(addr => (addr.id === newAddress.id ? newAddress : addr)));
        } else {
            setAddresses([{ id: addresses.length + 1, ...newAddress }, ...addresses]);
        }

        setNewAddress({
            id: null, name: "", phone: "", type: "Home", details: "", pincode: "", city: "", state: "", landmark: ""
        });
        setShowAddressContainer(false);
        setErrorMessage(""); // Clear error message on success
    };

    const handleEditAddress = (address) => {
        setNewAddress(address);
        setShowAddressContainer(true);
        setErrorMessage(""); // Clear any previous error
    };

    const handleDeleteAddress = (id) => {
        setAddresses(addresses.filter(address => address.id !== id));
    };

    
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <h4>Manage Addresses</h4>
                {!showAddressContainer && (
                    <Button variant="primary" size="sm" onClick={() => setShowAddressContainer(true)}>
                        + Add New Address
                    </Button>
                )}
            </div>

            {!showAddressContainer && (
                <ListGroup className="mt-3">
                    {addresses.map((address) => (
                        <ListGroup.Item key={address.id} className="d-flex justify-content-between align-items-start mb-2 p-2">
                            <div>
                                <h6 className="mb-1"><strong>{address.type}</strong></h6>
                                <p className="mb-1"> {address.name} &nbsp; | &nbsp; {address.phone}</p>
                                <p className="mb-1"> {address.details},&nbsp;
                                    {address.landmark || "N/A"},&nbsp;
                                    {address.city},&nbsp;
                                    {address.state} - {address.pincode}
                                </p>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="span" className="cursor-pointer small-toggle" id="dropdown-custom">
                                    ⋮
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="small-dropdown">
                                    <Dropdown.Item onClick={() => handleEditAddress(address)}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleDeleteAddress(address.id)} className="text-danger">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            {showAddressContainer && (
                <Container className="p-3 bg-light ManageAddresses">
                    <h5>{newAddress.id ? "Edit Address" : "Add New Address"}</h5>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    value={newAddress.name} 
                                    onChange={handleChange} 
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    name="phone" 
                                    placeholder="10-digit mobile number" 
                                    value={newAddress.phone} 
                                    onChange={handleChange} 
                                    inputMode="numeric" 
                                    pattern="[0-9]*" 
                                    maxLength="10"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={6}>
                                <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    name="pincode" 
                                    placeholder="Pincode" 
                                    value={newAddress.pincode} 
                                    onChange={handleChange} 
                                    inputMode="numeric" 
                                    pattern="[0-9]*" 
                                    maxLength="6" 
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    name="city" 
                                    placeholder="City/District/Town" 
                                    value={newAddress.city} 
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Row>
                        <Form.Control 
                            size="sm" 
                            className="mt-2" 
                            as="textarea" 
                            rows={2} 
                            name="details" 
                            placeholder="Address (Area and Street)" 
                            value={newAddress.details} 
                            onChange={handleChange} 
                        />
                        <Row className="mt-2">
                            <Col md={6}>
                                <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    name="state" 
                                    placeholder="State" 
                                    value={newAddress.state} 
                                    onChange={handleChange} 
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Control 
                                    size="sm" 
                                    type="text" 
                                    name="landmark" 
                                    placeholder="Landmark (Optional)" 
                                    value={newAddress.landmark} 
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Row>
                        <div className="mt-2">
                            <Form.Check 
                                inline 
                                type="radio" 
                                label="Home" 
                                name="type" 
                                value="Home" 
                                checked={newAddress.type === "Home"} 
                                onChange={handleChange} 
                            />
                            <Form.Check 
                                inline 
                                type="radio" 
                                label="Work" 
                                name="type" 
                                value="Work" 
                                checked={newAddress.type === "Work"} 
                                onChange={handleChange} 
                            />
                            {errorMessage && <p className="text-danger">{errorMessage}</p>}
                        </div>
                    </Form>
                    <div className="mt-3">
                        <Button variant="primary" className="w-25 me-3" onClick={handleAddOrUpdateAddress}>SAVE</Button>
                        <Button variant="secondary" className="w-25" onClick={() => setShowAddressContainer(false)}>CANCEL</Button>
                    </div>
                </Container>
            )}
        </Container>
    );
};

export default ManageAddresses;
