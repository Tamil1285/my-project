import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import ProductsList from './components/Product/ProductListPage';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './components/Cart/Cart';
import Homepage from './components/Home/Home';
import Login from './components/Account/Login';
import Signup from './components/Account/SignUp';
import BuyNow from './components/Buy/BuyNow';
import Wishlist from './components/WishList/Wishlist';
import ItemDetailsPage from './components/Product/ItemDetailsPage';
import { useState, createContext } from 'react';
import BottomNavbar from './components/NavBar/BottomNavbar';
import Categories from './components/Categories/Categories';
import LocationFinder from './components/Location/Location';
import Profile from './components/Profile/Profile';

export const CartContext = createContext();
export const WishListContext = createContext();
export const AuthContext = createContext(); 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems}} >
      <WishListContext.Provider value={{ wishItems, setWishItems}}> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:category" element={<ProductsList />} />
        <Route path="/:category/:id" element={<ItemDetailsPage />} />   
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/buy" element={<BuyNow />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/location" element={<LocationFinder />} /> 
        <Route path="/profile" element={<Profile />} />

      </Routes> 
      <Footer />
      <BottomNavbar />
    </BrowserRouter>
    </WishListContext.Provider>
    </CartContext.Provider>
  );
}

export default App;