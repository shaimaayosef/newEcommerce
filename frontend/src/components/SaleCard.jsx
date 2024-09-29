import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import style from "./productCard.module.css"
import { Stack } from 'react-bootstrap';
import { CartContext } from '../services/Cart';


export default function SaleCard({product}) {
  const {cart,addToCart}=useContext(CartContext);
  return (
    <Card style={{ width: '16.5rem'}}  className={style.card}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description} {product.price}
            </Card.Text>
            <Card.Text style={{ fontWeight: 'bold' }}>
                {product.price}
            </Card.Text>
            <Stack gap={3}>
              <Button variant="success" onClick={()=>addToCart(product)}>add to card</Button>
              <Button variant="primary">Details</Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}
