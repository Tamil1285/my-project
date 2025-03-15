import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./home.json";
import CategoriesNavbar from "../NavBar/CatNav";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="container-fluid px-0 pt-2">
        {/* Banner Carousel */}
        <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {data.banners.map((banner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={banner} className="d-block w-100 banner-fullscreen" alt={`Banner ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Suggested Products - Scrollable */}
        <div className="row mt-4 text-center">
          <h3>Suggested Products</h3>
          <div className="scroll-container">
            <button className="scroll-btn left" onClick={scrollLeft}>❮</button>
            <div className="scroll-content" ref={scrollContainerRef}>
              {data.suggestedProducts.map((product) => (
                <div key={product.id} className="suggested-card">
                  <div className="card ">
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <p className="card-text">{product.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-btn right" onClick={scrollRight}>❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <CategoriesNavbar />
      <Home />
    </div>
  );
};

export default Homepage;
