
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import ProductsList from './components/Product/ProductListPage';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './components/Cart/Cart';
import Login from './components/Account.js/Login';
import BuyNow from './components/Buy/BuyNow';
import Wishlist from './components/WishList/Wishlist';
import ItemDetailsPage from './components/Product/ItemDetailsPage';
import { useState, createContext } from 'react';

export const CartContext = createContext();
export const WishListContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems}} >
      <WishListContext.Provider value={{ wishItems, setWishItems}}> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/mobile/:id" element={<ItemDetailsPage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path="/buy" element={<BuyNow />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
    </WishListContext.Provider>
    </CartContext.Provider>
  );
}

export default App;