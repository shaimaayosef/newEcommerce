import { useEffect,useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import generateProducts from '../services/gnerate-products';
import SaleCard from './SaleCard';

export default function Gallery() {
    const[products,setproducts]=useState([]);
    useEffect(()=>{
    const list = generateProducts(40);
    setproducts(list)
  },[]);
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((item, idx) => (
            <Col key={idx}>
              <SaleCard product={item} />
            </Col>
          ))}
        </Row>
  )
}
