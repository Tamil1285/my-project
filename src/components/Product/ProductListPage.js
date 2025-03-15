import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, Button, Form, Card, Carousel } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { FaStar, FaRegStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import CategoriesNavbar from "../NavBar/CatNav";

const ProductsList = () => {
  const [filters, setFilters] = useState({
    price: 200000,
    brands: [],
    rating: 0,
  });

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/banner/")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setBanners(data[0].bannerimg);
        }
      })
      .catch((error) => console.error("Error fetching banners:", error));
  }, []);

  return (
    <div className="container-fluid mt-1">
      <Carousel indicators={true} className="mb-4">
        {banners.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 banner-img"
              src={image}
              alt={`Banner ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="row">
        <div className="col-12 col-md-3 col-lg-2 d-none d-md-block">
          <SidebarFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <Products filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
};

const Products = ({ filters, setFilters }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;

    // Scroll to top whenever the category changes
    window.scrollTo(0, 0);

    fetch(`http://127.0.0.1:5000/api/${category}/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);

        // Dynamically update filters based on products
        const productBrands = [...new Set(data.map((p) => p.brand))];
        const maxPrice = Math.max(...data.map((p) => p.price));
        const minPrice = Math.min(...data.map((p) => p.price));
        const availableRatings = [...new Set(data.map((p) => Math.floor(p.rating)))];

        setFilters((prevFilters) => ({
          ...prevFilters,
          brands: productBrands,
          price: maxPrice,
          minPrice,
          maxPrice,
          availableRatings,
        }));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.price <= filters.price &&
        (filters.brands.length === 0 || filters.brands.includes(product.brand)) &&
        (filters.rating === 0 || Math.floor(product.rating) === filters.rating)
    );
  }, [products, filters]);

  return (
    <div className="row g-3">
      {filteredProducts.map((product) => (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <div
            className="card position-relative"
            onClick={() => navigate(`/${category}/${product.id}`)}
          >
            <img
              src={product.images[0]}
              className="card-img-top"
              alt={product.name}
              loading="lazy"
              style={{ width: "100%", height: "180px" }}
            />
            <div className="card-body text-center">
              <h6 className="card-title">{product.name}</h6>
              <p className="text mb-0">
                <strong>
                  ₹{product.price - product.discount}{" "}
                  <span className="text-end text-success">
                    ({Math.round((product.discount / product.price) * 100)}% Off)
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SidebarFilter = ({ filters, setFilters }) => (
  <Card
    className="sidebar position-sticky shadow-sm rounded"
    style={{ top: "80px" }}
  >
    <Card.Body>
      <h5 className="fw-bold text-primary mb-3">Filters</h5>
      <FilterContent filters={filters} setFilters={setFilters} />
    </Card.Body>
  </Card>
);

const FilterContent = ({ filters, setFilters }) => (
  <>
    <div className="mb-4">
      <label className="fw-bold">Price Range: ₹{filters.price}</label>
      <RangeSlider
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: Number(e.target.value) })}
        min={filters.minPrice || 1000}
        max={filters.maxPrice || 100000}
        step={1000}
        tooltip="auto"
        variant="primary"
        style={{ width: "100%" }}
      />
    </div>
    <div className="mb-4">
      <h6 className="fw-bold">Brand</h6>
      {filters.brands.map((brand) => (
        <Form.Check
          key={brand}
          type="checkbox"
          label={brand}
          className="custom-checkbox"
          checked={filters.brands.includes(brand)}
          onChange={(e) => {
            const newBrands = e.target.checked
              ? [...filters.brands, brand]
              : filters.brands.filter((b) => b !== brand);
            setFilters({ ...filters, brands: newBrands });
          }}
        />
      ))}
    </div>
    <div className="mb-4">
      <h6 className="fw-bold">Ratings</h6>
      {filters.availableRatings?.sort((a, b) => b - a).map((starCount) => (
        <div
          key={starCount}
          className="mb-2 star-filter"
          onClick={() => setFilters({ ...filters, rating: starCount })}
        >
          {[...Array(5)].map((_, i) =>
            i < starCount ? (
              <FaStar key={i} color="gold" size={20} />
            ) : (
              <FaRegStar key={i} color="gold" size={20} />
            )
          )}
        </div>
      ))}
    </div>
  </>
);

function ProductListPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CategoriesNavbar />
      <ProductsList />
    </div>
  );
}

export default ProductListPage;
