import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import img1 from "../../image/empty_cart.png";
import { CartContext } from "../../App";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + (item.price - item.discount) * item.quantity,
      0
    );

  const isCartEmpty = cartItems.length === 0;

  const handleBuyNow = () => {
    if (cartItems.length === 0) return;
  
    if (cartItems.length === 1) {
      navigate("/buy", { state: { product: cartItems[0] } }); // Single item
    } 
    else {
      navigate("/buy", { state: { product: cartItems } }); // Multiple items
    }
  };
  return (
    <Container className="mt-4 mb-5">
      {isCartEmpty ? (
        <Row className="text-center">
          <Col>
            <img src={img1} alt="Empty Cart" className="img-fluid w-25" />
            <h3>Your cart is empty!</h3>
            <p>Add items to it now.</p>
            <Link to="/">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={8}>
            {cartItems.map((item) => (
              <div key={item.id} className="border mb-4 p-3 rounded">
                <Row className="align-items-center">
                  <Col md={2}>
                    <img
                      src={item.images?.[0] || "https://via.placeholder.com/150"}
                      alt={item.name}
                      className="img-fluid rounded-start"
                    />
                  </Col>
                  <Col md={10}>
                    <h6>{item.name}</h6>
                    <p>RAM | {item.specifications?.RAM || "N/A"}</p>
                    <p>Storage | {item.specifications?.Storage || "N/A"}</p>

                    <div className="d-flex align-items-center mb-2">
                      <strong>
                        ₹{item.price - item.discount}{" "}
                        <span className="text-muted text-decoration-line-through">
                          ₹{item.price}
                        </span>{" "}
                        <span className="text-success">
                          ({Math.round((item.discount / item.price) * 100)}% Off)
                        </span>
                      </strong>
                    </div>

                    <Row>
                      <Col xs={6}>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </Button>
                      </Col>
                      <Col xs={6}>
                        <Button variant="outline-danger" size="sm" onClick={() => handleRemove(item.id)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>

          <Col md={4}>
            <div className="border p-3">
              <h5>Price Details</h5>
              <Table borderless>
                <tbody>
                  <tr>
                    <td>Price ({cartItems.length} item)</td>
                    <td className="text-end">
                      ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td className="text-end text-success">
                      -₹{cartItems.reduce((total, item) => total + item.discount * item.quantity, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total Amount</strong>
                    </td>
                    <td className="text-end">
                      <strong>₹{calculateTotal()}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                variant="warning"
                className="w-100 mt-2"
                onClick={handleBuyNow}
              >
                Proceed to Buy
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
