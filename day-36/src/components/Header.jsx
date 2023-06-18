import { Navbar, Container, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{ height: 70 }}>
            <Container style={{ justifyContent: 'space-evenly' }}>
                <Navbar.Brand>
                    Shopping Cart
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
                            <Badge style={{ fontSize: '10px' }}>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 300 }}>
                            <span style={{ padding: 10 }}>Cart is empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
