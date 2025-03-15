import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductSlider = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    fetch("http://localhost:5000/api/mobiles") // Replace with the actual API URL
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // Ensure first product is visible on load
    }
  }, [products, isMobile]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="container-fluid mt-4 mb-2 position-relative">
      <h4 className="mb-3">Similar Products</h4>

      {!isMobile && (
        <button className="slider-btn left" onClick={() => scroll("left")}> 
          <FaChevronLeft size={24} />
        </button>
      )}

      <div ref={scrollRef} className={`product-slider d-flex overflow-auto p-2 ${isMobile ? "mobile-view" : ""}`} style={{ scrollSnapType: 'x mandatory', display: 'flex', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="card product-card shadow-sm border-0 p-2"
            style={{ flex: '0 0 auto', scrollSnapAlign: 'start' }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate(`/mobile/${product.id}`);
            }}
          >
            <img
              src={product.images?.[0] || "https://via.placeholder.com/150"}
              alt={product.name}
              className="card-img img-fluid"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
            />
            <div className="card-body p-2 text-center">
              <h6 className="card-title mb-1">{product.name}</h6>
              <p className="card-text text-success fw-bold mb-1">₹{product.price}</p>
              <p className="text-warning mb-1">{product.rating} ★</p>
            </div>
          </div>
        ))}
      </div>

      {!isMobile && (
        <button className="slider-btn right" onClick={() => scroll("right")}> 
          <FaChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default ProductSlider; 