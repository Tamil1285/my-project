import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Accordion, Modal } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    name: "Tamilarasan",
    phone: "7502101285",
    email: "example@example.com",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Tamilarasan",
      type: "WORK",
      phone: "7502101285",
      address: "Uthukuli, Uthukuli bus stop, Tiruppur District, Tamil Nadu",
      pincode: "638751",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    type: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { product } = location.state || {};
  const products = Array.isArray(product) ? product : [product]; // Ensure it's always an array

  const [quantities, setQuantities] = useState(
    products.reduce((acc, prod) => ({ ...acc, [prod.id]: 1 }), {})
  );

  

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, (prevQuantities[id] || 1) + change);
      return { ...prevQuantities, [id]: newQuantity };
    });
  };
  

  const totalPrice = products.reduce((total, product) => {
    return total + (product.price - product.discount) * (quantities[product.id] || 1);
  }, 0);
  

  if (!product) {
    return <div>No product found</div>;
  }

  const handleLoginChange = () => {
    const newName = prompt("Enter your name:", loginInfo.name);
    const newPhone = prompt("Enter your phone number (or leave blank):", loginInfo.phone);
    const newEmail = prompt("Enter your email address (or leave blank):", loginInfo.email);

    if (newName && (newPhone || newEmail)) {
      setLoginInfo({ name: newName, phone: newPhone || "", email: newEmail || "" });
    } else {
      alert("Please provide either a phone number or email address.");
    }
  };

  const handleAddressSelect = (id) => {
    const address = addresses.find((address) => address.id === id);
    setSelectedAddress(address);
  };

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      {
        ...newAddress,
        id: addresses.length + 1,
      },
    ]);
    setNewAddress({ name: "", type: "", phone: "", address: "", pincode: "" });
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <div className="border p-3 mb-3">
            <h6>1. LOGIN</h6>
            <p className="mb-1">
              <strong>{loginInfo.name}</strong> &nbsp;
              {loginInfo.phone && <span className="text-muted">+{loginInfo.phone}</span>}
              {loginInfo.email && <span className="text-muted ms-2">({loginInfo.email})</span>}
              <Button variant="link" className="p-0 ms-3" onClick={handleLoginChange}>
                Change
              </Button>
            </p>
          </div>

          <div className="border p-3 mb-3">
            <h6>2. DELIVERY ADDRESS</h6>
            {addresses.map((address) => (
              <div
                key={address.id}
                className={`p-3 mb-2 ${selectedAddress.id === address.id ? "border-primary" : "border"}`}
              >
                <Form.Check
                  type="radio"
                  id={`address-${address.id}`}
                  label={
                    <>
                      <strong>{address.name}</strong> &nbsp;
                      <span className="badge bg-light text-dark">{address.type}</span>{" "}
                      <span>{address.phone}</span>
                      <p className="mb-0">{address.address} - {address.pincode}</p>
                    </>
                  }
                  name="deliveryAddress"
                  checked={selectedAddress.id === address.id}
                  onChange={() => handleAddressSelect(address.id)}
                />
                {selectedAddress.id === address.id && (
                  <Button variant="warning" className="mt-2">
                    Deliver Here
                  </Button>
                )}
              </div>
            ))}
            <Button variant="link" className="p-0" onClick={() => setShowModal(true)}>
              + Add a new address
            </Button>
          </div>

          <div className="border p-3">
            <h6>3. ORDER SUMMARY</h6>
            {products.map((product) => (
            <Row className="align-items-center">
              <Col xs={2} md={3} className="d-flex align-items-center mb-3 mb-md-0">
                <img
                  src={product.images[0]}
                  alt={product.name || "Product Image"}
                  className="img-fluid rounded-start"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </Col>
              <Col xs={10} md={9}>
                <h6 className="mb-1">{product.name}</h6>
                <h6>RAM | {product.specifications?.RAM || "Not Available"}</h6>
                <p className="text mb-1">
                  Storage | {product.specifications?.Storage || "Not Available"}
                </p>
                <div className="d-flex align-items-center">
                <Button variant="secondary" size="sm" onClick={() => handleQuantityChange(product.id, -1)}>-</Button>
                <span className="mx-2">{quantities[product.id]}</span>
                <Button variant="secondary" size="sm" onClick={() => handleQuantityChange(product.id, 1)}>+</Button>

                </div>
                <div className="d-flex align-items-center mb-2">
                  <p className="mb-0">
                     <p className="mt-2">
                      <strong>₹{product.price - product.discount}</strong> <span className="text-muted text-decoration-line-through">₹{product.price * quantity}</span>
                      <span className="text-success">
                        ({Math.round((product.discount / product.price) * 100)}% OFF)
                      </span>
                    </p>
                    {/* <strong>
                      ₹{product.price - product.discount}{" "}
                      <span className="text-muted text-decoration-line-through">
                        ₹{product.price}
                      </span>{" "}
                      <span className="text-success">
                        ({Math.round((product.discount / product.price) * 100)} OFF)
                      </span>
                    </strong> */}
                  </p>
                </div>
              </Col>
            </Row>
            ))}
              </div>


          <div className="border p-3">
            <h6>4. PAYMENT OPTIONS</h6>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Credit/Debit Card</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter card number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expiry">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="Enter CVV" />
                    </Form.Group>
                    <Button variant="success">Pay ₹702</Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Net Banking</Accordion.Header>
                <Accordion.Body>
                  <p>Select your bank and proceed to payment.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>UPI</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="upiId">
                      <Form.Label>UPI ID</Form.Label>
                      <Form.Control type="text" placeholder="Enter your UPI ID" />
                    </Form.Group>
                    <Button variant="success">Pay ₹702</Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="border p-3">
            <h5>PRICE DETAILS</h5>
            <hr />
            <p className="d-flex justify-content-between">
  <span>Price ({products.length} item{products.length > 1 ? 's' : ''})</span>
  <span> ₹{products.reduce((total, product) => total + product.price * (quantities[product.id] || 1), 0)}</span>
</p>
<p className="d-flex justify-content-between">
  <span>Discount</span>
  <span className="text-success">- ₹{products.reduce((total, product) => total + product.discount * (quantities[product.id] || 1), 0)}</span>
</p>
<p className="d-flex justify-content-between">
  <span>Delivery Charges</span>
  <span className="text-success"> Free</span>
</p>
<hr />
<h6 className="d-flex justify-content-between">
  <span>Total Payable</span>
  <span>₹{totalPrice}</span>
</h6>

            <hr />
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Address Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Home, Work"
                value={newAddress.type}
                onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                value={newAddress.phone}
                onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={newAddress.address}
                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pincode"
                value={newAddress.pincode}
                onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddAddress}>
            Save Address
          </Button>
          
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PaymentPage;
