import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductSlider from "./ProductSlider";
import { CartContext, WishListContext } from "../../App";
import { useSwipeable } from "react-swipeable"; // Import the swipeable library
import CategoriesNavbar from "../NavBar/CatNav";

const ItemDetails = ({ cartItems, setCartItems, wishItems, setWishItems }) => {
  const { category, id } = useParams();  // Extract category and ID from URL
  const productId = parseInt(id, 10);
     
  const navigate = useNavigate();
  console.log(category)
  
  // Fetch data dynamically based on category
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/${category}`)  // Dynamically fetch category
      .then((response) => response.json())
      .then((data) => setItemData(data))  
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);  // Re-fetch when category changes
  
  const product = itemData.find((item) => item.id === productId);
  

  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]); // Set to first image when new product loads
    }

    // Resize listener to detect mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view if width is <= 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, [product]);

  const handleSwipe = (direction) => {
    const currentIndex = product.images.indexOf(selectedImage);
    let newIndex = direction === "left" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= product.images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = product.images.length - 1;
    }

    setSelectedImage(product.images[newIndex]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
  });

  if (!product) {
    return (
      <div className="container mt-5">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  const toggleWishlist = () => {
    if (wishItems.some((item) => item.id === product.id)) {
      setWishItems((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishItems((prev) => [...prev, product]);
    }
  };

  const addToCart = () => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };
  const handleBuyNow = () => {
    navigate(`/buy`, { state: { product: product } });  // Pass the product data
  };
  

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        {/* Left Side - Product Images */}
        <div className="col-12 col-md-6 position-relative mb-4 mb-md-0" {...swipeHandlers}>
          {/* Main Image */}
          <img
            src={selectedImage}
            alt="Product"
            className="img-fluid mb-3"
            style={{ height: "300px", objectFit: "contain" }}
          />

          {/* Wishlist Icon */}
          <div
            className="position-absolute top-0 end-0 px-4"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={toggleWishlist}
          >
            {wishItems.some((item) => item.id === product.id) ? (
              <AiFillHeart className="text-danger" />
            ) : (
              <AiOutlineHeart className="text-muted" />
            )}
          </div>

          {/* Thumbnails (only visible in non-mobile view) */}
          {!isMobile ? (
            <div className="d-flex overflow-auto mt-2 justify-content-center">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`img-thumbnail me-2 ${selectedImage === img ? "border border-primary" : ""}`}
                  style={{ width: "75px", cursor: "pointer" }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-2">
              {/* Dots for mobile view */}
              <div className="d-flex justify-content-center">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: selectedImage === img ? "#007bff" : "#ccc",
                      margin: "0 5px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Product Details */}
        <div className="col-12 col-md-6">
          <h2>{product.name}</h2>

          <h4 className="mb-0">
            <strong>
              ₹{product.price - product.discount}{" "}
              <span className="text-muted">
                MRP&nbsp;
                <span className="text-decoration-line-through">₹{product.price}</span>
              </span>{" "}
              <span className="text-end text-danger">
                ({Math.round((product.discount / product.price) * 100)}% OFF)
              </span>
            </strong>
          </h4>

          <p>{product.description}</p>

          {/* Cart Buttons */}
          {cartItems.some((item) => item.id === product.id) ? (
           <button className="btn btn-success btn-lg mb-3" onClick={() => navigate('/cart')}>
           Go to Cart
           </button>
          ) : (
            <button className="btn btn-primary btn-lg mb-3" onClick={addToCart}>
              Add to Cart
            </button>
          )}
          <button className="btn btn-warning btn-lg ms-2 mb-3" onClick={handleBuyNow}>
            Buy Now
          </button>

          {/* Customer Reviews */}
          <div className="mt-4">
          <h5>Overall Rating</h5>
            <div>
              {/* Render the stars based on the rating */}
              {[...Array(5)].map((_, index) => {
                if (index < Math.floor(product.rating)) {
                  // Full star for values less than the integer part of the rating
                  return <FaStar key={index} color="#FFD700" style={{ fontSize: '30px' }} />;
                } else if (index < Math.ceil(product.rating)) {
                  // Half star if the index is within the range of the ceiling rating
                  return <FaStarHalfAlt key={index} color="#FFD700"  style={{ fontSize: '30px' }}/>;
                } else {
                  // Empty star for values greater than the rating
                  return <FaRegStar key={index} color="#FFD700" style={{ fontSize: '30px' }}/>;
                }
              })}
            </div>
            <span className="ms-2">{product.rating}</span>
        </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-5">
        <h3 className="bg-light p-2 border">Product Specifications</h3>
        {Object.entries(product.specifications || {}).map(([category, value]) => (
          <div key={category} className="mb-1">
            {/* <h5 className="bg-light p-2 border">
              {category.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </h5> */}
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td className="fw-bold text-start" style={{ width: "40%" }}>
                    {category.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </td>
                  <td className="text-start">{value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};





function ItemDetailsPage() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { wishItems, setWishItems } = useContext(WishListContext);

  return (
    <div className="App">
      <CategoriesNavbar />
      <ItemDetails
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishItems={wishItems}
        setWishItems={setWishItems}
      />
      <ProductSlider wishItems={wishItems} setWishItems={setWishItems} />
    </div>
  );
}

export default ItemDetailsPage;
