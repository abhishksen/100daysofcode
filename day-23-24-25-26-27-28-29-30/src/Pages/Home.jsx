import { Link } from 'react-router-dom';
import img2 from '../assets/img-2.webp';

const Home = () => {
  return (
    <>
      <div className="background-img"></div>
      <main className="container">
        <h3 className="title">You got the travel plans, we got the travel vans</h3>
        <p className="description">
          Add adventure to your life by joining the van life community.
          Rent the perfect van for your next adventure. We wish you a great road trip!
        </p>
        <button className="btn">
          <Link to={'/vans'}>Find your van</Link>
        </button>
      </main>
      <div className="home-content">
        <div className="about-text">
          <h3 className="about-title">
            About VANLIFE
          </h3>
          <p className="about-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fuga
            animi blanditiis fugit, quia aliquid maxime nesciunt quasi expedita
            laudantium earum! Facilis dolores voluptatum eum totam iusto aliquid
            temporibus. Exercitationem? Ineum totam iusto aliquid
            temporibus. Exercitationem? Inventoreexpli.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fuga
            animi blanditiis fugit, quia aliquid maxime nesciunt quasi expedita
            laudantium earum! Facilis dolores.
          </p>
          <div className="aboutImg">
            <img
              src="https://images.pexels.com/photos/11941827/pexels-photo-11941827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              // src={img2}
              alt="img"
            />
          </div>
          <p className="about-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fuga
            animi blanditiis fugit, quia aliquid maxime nesciunt quasi expedita
            laudantium earum! Facilis dolores voluptatum eum totam iusto aliquid
            temporibus. Exercitationem? Ineum totam iusto aliquid
            temporibus.
          </p>
          <div className="about-box">
            <h3 className="box-text">
              Your destination is waiting for you. Your van is readyyyy!
            </h3>
            <button className="btn about">
              <Link to={'/vans'}>Explore vans</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
