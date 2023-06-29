import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../context/Context'
const Header = () => {

    const { state: { cart }, dispatch } = CartState();

    return (
        <Navbar bg='dark' variant='dark' style={{ height: 70 }}>
            <Container style={{ justifyContent: 'space-evenly' }}>
                <Navbar.Brand>
                    <Link to='/' className='logoTitle'> Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 300 }}
                        placeholder='Search a product'
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color='white' fontSize='24px' />
                            <Badge style={{ fontSize: '10px' }}>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 300 }}>
                            {cart.length > 0 ? (
                                <>
                                    {
                                        cart.map(prod => (
                                            <span className='cartItem' key={prod.id}>
                                                <img src={prod.image} className='carItemtImg' alt={prod.name} />
                                                <div className="cartItemDetail">
                                                    <span className='cartItemTitle'>{prod.name}</span>
                                                    <span>${prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                    <Link to='/cart'>
                                        <Button style={{ width: "95%", margin: "0 10px" }}>Go to cart</Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is empty</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
