import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Add custom styles here if needed

const Home = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyShop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="container mt-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/1500x500" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1500x500" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1500x500" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Shop by Categories</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Category 1" />
              <div className="card-body">
                <h5 className="card-title">Category 1</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Category 2" />
              <div className="card-body">
                <h5 className="card-title">Category 2</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Category 3" />
              <div className="card-body">
                <h5 className="card-title">Category 3</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Category 4" />
              <div className="card-body">
                <h5 className="card-title">Category 4</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        &copy; 2025 MyShop. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
