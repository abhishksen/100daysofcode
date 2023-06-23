import { CartState } from '../context/Context'
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const Home = () => {

  const { state: { products }, } = CartState();

  console.log(products)

  return (
    <div className='home'>
      <Filters />
      <div className="productConatiner">
        {
          products.map((prod) => {
          return  <ProductCard key={prod.id} prod={prod} />
          })
        }
      </div>
    </div>
  )
}

export default Home
