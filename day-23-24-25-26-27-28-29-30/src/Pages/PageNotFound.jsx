import { Link } from 'react-router-dom'
import errorImg from '../assets/error.jpg'

const PageNotFound = () => {
  return (
    <main className="error">
        <div className="img-box">
        <img src={errorImg} alt="404-error-img" />
        </div>
    <div className='error-box'>
      <h3 className='error-msg'>Ohh Snap! The page you're looking for not Found!</h3>
      <Link to='/' className='back-btn'>Go back to home</Link>
    </div>
    </main>
  )
}

export default PageNotFound
