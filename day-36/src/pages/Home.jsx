import { CartState } from '../context/Context'
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const Home = () => {

  const { state: { products },
    prodState: { sort, byStock, byFastDelivery, byRating, searchQuery } } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ?
          a.price - b.price :
          b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  };

  return (
    <div className='home'>
      <Filters />
      <div className="productConatiner">
        {
          transformProducts().map((prod) => {
            return <ProductCard key={prod.id} prod={prod} />
          })
        }
      </div>
    </div>
  )
}

export default Home
