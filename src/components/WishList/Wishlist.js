import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { WishListContext } from "../../App";
import { Row, Col, Button } from "react-bootstrap";
import img2 from "../../image/wish.jpg";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishItems, setWishItems } = useContext(WishListContext);
  console.log(wishItems);

  if (!Array.isArray(wishItems)) {
    console.error("wishItems is not an array:", wishItems);
    return <p>Error: Wishlist data is invalid.</p>;
  }

  const handleRemoveItem = (e, id) => {
    e.preventDefault();
    setWishItems(wishItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-2">
      <h3 className="mb-2 mt-0">My Wishlist</h3>
      <h5 className="mb-4">
        There are <span className="text-success">{wishItems.length}</span> products in your wishlist
      </h5>

      {wishItems.length === 0 ? (
        <Row className="text-center pb-3">
          <Col>
            <img src={img2} alt="Empty Cart" className="img-fluid w-25" />
            <h3>Empty Wishlist</h3>
            <p>You have no items in your wishlist. Start adding!</p>
            <Link to="/">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <Row>
          {wishItems.map((item) => {
            const imageUrl =
              item.images && item.images.length > 0
                ? item.images[0]
                : "https://via.placeholder.com/150";

            return (
              <Col key={item.id} xs={12} md={6} className="mb-3">
                <div className="card h-100">
                  <div className="row g-0 align-items-center">
                    {/* Image Section */}
                    <div className="col-4 d-flex justify-content-center align-items-center">
                      <Link to={`/mobile/${item.id}`} className="d-block w-100">
                        <img
                          src={imageUrl}
                          className="img-fluid rounded-start"
                          alt={item.name || "Product Image"}
                          style={{
                            objectFit: "contain", // ✅ Ensures the full image is visible
                            width: "100%", 
                            height: "150px", // ✅ Keeps image size uniform
                          }}
                        />
                      </Link>
                    </div>

                    {/* Text Section */}
                    <div className="col-8">
                      <div className="card-body d-flex flex-column justify-content-between h-100">
                        <Link to={`/mobile/${item.id}`} className="text-decoration-none text-dark">
                          <h5 className="card-title mb-1">{item.name}</h5>
                          <h6 className="mb-2">
                            Storage | {item.specifications?.Storage || "Not Available"}
                          </h6>
                          <div className="d-flex mb-2">
                            <p className="mb-0">
                              <strong>
                                ₹{item.price - item.discount}{" "}
                                <span className="text-muted text-decoration-line-through">
                                  ₹{item.price}
                                </span>{" "}
                                <span className="text-end text-success">
                                  ({Math.round((item.discount / item.price) * 100)}% Off)
                                </span>
                              </strong>
                            </p>
                          </div>
                        </Link>

                        {/* Remove Button (Smaller Width) */}
                        <button className="btn btn-danger btn-sm w-25 mt-auto" onClick={(e) => handleRemoveItem(e, item.id)}>
                          <i className="bi bi-trash"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Wishlist;
