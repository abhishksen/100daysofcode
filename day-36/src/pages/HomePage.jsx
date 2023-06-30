// import Image from 'react-bootstrap/Image'
import { Container, Col, Image, Row, Button } from 'react-bootstrap'
import heroImg from '../../public/img/heroImg.svg'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {

  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
        <Col md={5}>
          <div className="content">
            <h1 className="heading">Welcome to ReactCart!</h1>
            <h3 className="subHeading">Make your fashion look more charming.</h3>
            <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vel soluta rem! Tempora, accusamus excepturi quisquam modi odio dolorem cupiditate, possimus vitae ipsa iste ab quis necessitatibus consequuntur incidunt totam.</p>
            <row>
              <Button style={{ marginRight: '20px' }} variant='outline-dark' onClick={() => navigate('/products')}>Go to products</Button>
              <Button onClick={() => navigate('/cart')}>Go to cart</Button>
            </row>
          </div>
        </Col>
        <Col md={7}><Image src={heroImg} fluid /></Col>
      </Row>
    </Container>
  )
}

export default HomePage
