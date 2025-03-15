import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "./CatNav.css";
import categories from "./categories.json";

const CategoriesNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.name.toLowerCase()}`);
  };

  const handleSubCategoryClick = (item, event) => {
    event.preventDefault(); // Prevent page reload
    navigate(`/${item.toLowerCase()}`);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom sticky-top categories-navbar d-none d-lg-flex"
      style={{ backgroundColor: "#f6faff", paddingTop: 0, paddingBottom: 0 }}
    >
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav mx-auto">
            {categories.map((category, index) => (
              <li
                key={index}
                className="nav-item dropdown position-relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="nav-link text-dark d-flex align-items-center position-relative category-link btn btn-link"
                  id={`dropdown${index}`}
                  aria-expanded={hoveredIndex === index}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name}
                  <span className={`hover-bar ${hoveredIndex === index ? "active" : ""}`}></span>
                </button>
                <ul
                  className={`dropdown-menu ${hoveredIndex === index ? "show" : ""}`}
                  aria-labelledby={`dropdown${index}`}
                  style={{
                    display: hoveredIndex === index ? "block" : "none",
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "1000",
                  }}
                >
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <button
                        className="dropdown-item btn btn-link"
                        onClick={(event) => handleSubCategoryClick(item, event)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CategoriesNavbar;
