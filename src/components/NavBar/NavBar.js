import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../../image/google-wallet.png";
import { BsGeoAlt, BsPersonCircle, BsCart3, BsSearch, BsList, BsArrowLeft, BsInfoCircle, BsTelephone, BsHouse } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext, WishListContext } from "../../App";
import "./NavBar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishItems } = useContext(WishListContext);
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showSearchBar &&
        !event.target.closest(".search-container") &&
        !event.target.closest(".search-toggle")
      ) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showSearchBar]);

  // Function to close sidebar when a link is clicked
  const closeSidebar = () => {
    const sidebar = document.getElementById("mobileSidebar");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(sidebar);
    if (offcanvasInstance) offcanvasInstance.hide();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
        <div className="container d-flex align-items-center justify-content-between flex-nowrap">
          {/* Left Side: Brand & Sidebar Toggle Button */}
          {!showSearchBar && (
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler d-block d-lg-none me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
                aria-controls="mobileSidebar"
                style={{ border: "none", outline: "none", boxShadow: "none" }}
              >
                <BsList size={20} />
              </button>

              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src={img} alt="Logo" style={{ width: "40px", marginRight: "5px" }} />
                <span className="text-dark fw-bold">BrandName</span>
              </Link>
            </div>
          )}

          {/* Search Bar */}
          <div className={`search-container flex-grow-1 ${showSearchBar ? "d-flex" : "d-none d-sm-flex"} mx-2`}>
            <form className="d-flex w-100 align-items-center">
              {showSearchBar && (
                <button className="btn btn-light d-block d-sm-none me-2" type="button" onClick={() => setShowSearchBar(false)}>
                  <BsArrowLeft size={18} />
                </button>
              )}
              <div className="input-group search-box">
                <input className="form-control form-control-sm" type="search" placeholder="Search..." />
                <button className="btn btn-sm" type="submit"><BsSearch /></button>
              </div>
            </form>
          </div>

          {/* Right Side Icons */} 
          {!showSearchBar && (
            <div className="d-flex align-items-center pe-3">
              {/* Search Icon - Only visible on screens < 576px */}
              <button className="nav-link bg-transparent border-0 search-toggle d-block d-sm-none" onClick={() => setShowSearchBar(true)}>
                <BsSearch size={20} className="text-dark" />
              </button>
            </div>
          )}

          {/* Desktop Icons - Hidden on Small Screens */}
          <ul className="navbar-nav d-none d-lg-flex flex-row align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/location">
                <BsGeoAlt size={18} />
                <span className="d-none d-md-inline ms-1">Location</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Wishlist" className="nav-link d-flex align-items-center">
                {wishItems.length > 0 ? <AiFillHeart size={18} className="text-danger" /> : <AiOutlineHeart size={18} className="text-muted" />}
                <span className="d-none d-md-inline ms-1">Wishlist</span>
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link d-flex align-items-center">
                <BsCart3 size={18} />
                {cartItems.length > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute" style={{ top: "-7px", left: "18px", fontSize: "0.6rem" ,width:"10px" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    {cartItems.length}
                  </span>
                )}
                <span className="d-none d-md-inline ms-1">Cart</span> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/Login">
                <BsPersonCircle size={18} />
                <span className="d-none d-md-inline ms-1">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className="offcanvas offcanvas-start" id="mobileSidebar" tabIndex="-1" aria-labelledby="mobileSidebarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled w-100">
            {[
              { to: "/", icon: <BsHouse />, label: "Home" },
              { to: "/Wishlist", icon: <AiOutlineHeart />, label: "Wishlist" },
              { to: "/cart", icon: <BsCart3 />, label: "Cart" },
              { to: "/Login", icon: <BsPersonCircle />, label: "Profile" },
              { to: "#", icon: <BsGeoAlt />, label: "Location" },
              { to: "#", icon: <BsInfoCircle />, label: "About Us" },
              { to: "#", icon: <BsTelephone />, label: "Contact" }
            ].map(({ to, icon, label }, index) => (
              <li key={index}>
                <Link to={to} className="nav-link" onClick={closeSidebar}>
                  {icon} {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
