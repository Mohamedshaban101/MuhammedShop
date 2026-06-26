import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './Component/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer/Footer';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart'
import Register from './Pages/Register';
import Login from './Pages/Login';
import PopupProduct from './Component/PopupProduct/PopupProduct'
import Verify from './Pages/Verify';
import { Toaster } from 'react-hot-toast';
import ForgetPassword from './Pages/ForgetPassword'
import Checkout from './Pages/Checkout';
import Profile from './Pages/Profile'
import Address from './Pages/Address'
import Orders from './Pages/Orders'
import List from './Pages/List'
import PopupOrder from './Component/PopupOrder/PopupOrder'
import ProductDetails from './Pages/ProductDetails'
import ProtectedCheckout from './Guards/ProtectedCheckout'
import ProtectedAuth from './Guards/ProtectedAuth'
import ProductsSearch from './Pages/ProductsSearch'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Loader from './Pages/Loader'
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      {loader && <Loader />}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={
          <ProtectedAuth>
            <Cart />
          </ProtectedAuth>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/checkout' element={
          <ProtectedCheckout>
            <Checkout />
          </ProtectedCheckout>
        } />
        <Route path='/address' element={
          <ProtectedAuth>
            <Address />
          </ProtectedAuth>
        } />
        <Route path='/my-orders' element={
          <ProtectedAuth>
            <Orders />
          </ProtectedAuth>
        } />
        <Route path='/my-list' element={
          <ProtectedAuth>
            <List />
          </ProtectedAuth>
        } />
        <Route path='/my-account' element={
          <ProtectedAuth>
            <Profile />
          </ProtectedAuth>
        } />
        <Route path='/all-products' element={
          <ProductsSearch />
        } />
      </Routes>
      <Toaster />
      <Footer />
      <PopupProduct />
      <PopupOrder />
    </>
  )
}

export default App
