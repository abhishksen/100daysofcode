import { useEffect, useState } from 'react';
import { CartState } from '../context/Context'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from '../components/Rating'
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const navigate = useNavigate();


  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);



  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart])

  if (cart.length === 0) {
    return (
      <div className='emptyCartContent'>
        <h3>Opps! Cart is empty.</h3>
        <Button variant='outline-dark' onClick={() => navigate('/products')}>Go to product listing page</Button>
      </div>
    )
  }

  return (
    <div className='home'>
      <div className="productConatiner">
        <ListGroup>
          {
            cart.map(prod => (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}><span>{prod.name}</span></Col>
                  <Col md={2}>{prod.price}</Col>
                  <Col md={2}>
                    <Rating rating={prod.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" value={prod.qty}
                      onChange={(e) => dispatch({
                        type: "CHANGE_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      <AiFillDelete fontSize='20px' />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className='title'>Total {cart.length} items in the cart</span>
        <span>Total: ${total}</span>
        <Button type='button' disabled={cart.length === 0} onClick={() => navigate('/ordersuccess')}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart
