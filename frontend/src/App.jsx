import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Gallery from './components/Gallery';
import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Card, Stack } from "react-bootstrap";
import { CartContext } from './services/Cart';
import { useState } from 'react';



function App() {
  const [cart,setCart]=useState([]);
  const addToCart =(product)=>{
    setCart((prevState)=>{
      return [...prevState,product]
    });
  };
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
    }}>
      <BrowserRouter>
        <CustomNavbar />
        <Stack direction='horizontal' className='w-100 h-100 justify-content-center align-items-center text-center '>
          <Card className="w-75 mx-3 my-1 px-2 py-2 ">
            hero section
          </Card>
        </Stack>
        <Container>
          <Routes>
            <Route path="/" element={<Gallery />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/wishlist" element={<WishList />} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
