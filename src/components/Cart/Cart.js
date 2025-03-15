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
    navigate("/buy", { state: { product: cartItems.length === 1 ? cartItems[0] : cartItems } });
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
          {/* Cart Items Section */}
          <Col md={8}>
            {cartItems.map((item) => (
              <div key={item.id} className="border mb-4 p-3 rounded">
                <Row className="align-items-center">
                  {/* Product Image */}
                  <Col xs={4} sm={3} className="text-center">
                    <img
                      src={item.images?.[0] || "https://via.placeholder.com/150"}
                      alt={item.name}
                      className="img-fluid rounded w-100"
                      style={{ maxWidth: "120px" }} // Increased size
                    />
                  </Col>
                  {/* Product Details */}
                  <Col xs={8} sm={9}>
                    <h6>{item.name}</h6>
                    <p className="mb-1">RAM | {item.specifications?.RAM || "N/A"}</p>
                    <p className="mb-1">Storage | {item.specifications?.Storage || "N/A"}</p>

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

                    {/* Quantity and Remove Buttons */}
                    <Row>
                      <Col xs={6} className="d-flex align-items-center">
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
                      <Col xs={6} className="text-end">
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

          {/* Price Summary Section */}
          <Col md={4}>
            <div className="border p-3">
              <h5>Price Details</h5>
              <Table borderless>
                <tbody>
                  <tr>
                    <td>Price ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})</td>
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
