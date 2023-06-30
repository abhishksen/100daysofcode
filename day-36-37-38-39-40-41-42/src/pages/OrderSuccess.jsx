import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {

    const navigate = useNavigate();

    return (
        <div className='emptyCartContent'>
            <h3 style={{ color: "green" }}>
                Your order has been placed successfully!
            </h3>
            <div>
                <Button style={{ marginRight: '20px' }} variant='outline-dark' onClick={() => navigate('/products')}>Go to products</Button>
                <Button onClick={() => navigate('/')}>Go to home page</Button>
            </div>
        </div>
    )
}

export default OrderSuccess
