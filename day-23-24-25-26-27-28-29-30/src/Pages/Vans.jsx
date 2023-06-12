import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();

  }, []);


  const filteredVans = typeFilter
    ? vans.filter(van => van.type.toLowerCase() === typeFilter)
    : vans;

  const vansElements = filteredVans.map(van => (

    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>

  ));

  if (loading) {
    return <h3 className="loading">Loading...</h3>
  }

  if (error) {
    return <h3 className='loading'>There was an error: {error.message}</h3>
  }

  return (
    <div className="van-list-container">
      <h3 className="title van">Explore our rich collection of vans</h3>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
          onClick={() => setSearchParams({ type: "simple" })}
        >Simple
        </button>
        <button
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >Rugged
        </button>
        <button
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >Luxury
        </button>
        <button
          className={`van-type clear-filters ${typeFilter === null ? "selected" : ""}`}
          onClick={() => setSearchParams({})}
        >{typeFilter ? "Clear Filter" : "All"}
        </button>
      </div>
      <div className="van-list">
        {vansElements}
      </div>
    </div >
  )
}

export default Vans
