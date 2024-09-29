import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../services/Cart';
import { Badge, Stack } from 'react-bootstrap';

function CustomNavbar() {
  const {cart,addToCart}=useContext(CartContext)
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">New E-Commerce</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/wishlist">Wish List</Nav.Link>
        <Nav.Link as={Link} TO="/cart">
        Cart
        </Nav.Link>
        <Badge pill bg="warning" text="dark" >{cart.length}</Badge>
      </Nav>
    </Container>
</Navbar>
  )
}

export default CustomNavbar