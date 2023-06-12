import { Link } from "react-router-dom";
import img1 from '../assets/img-1.jpeg';
import img2 from '../assets/img-2.webp';

const About = () => {
  return (
    <div className="about-container">
      <div className="aboutImg">
        <img
          src="https://images.pexels.com/photos/11941827/pexels-photo-11941827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          // src={img2}
          alt="img"
        />
      </div>
      <div className="about-text">
        <h3 className="about-title">
          Don't squeeze in a sedan when you could be relax in a awesome van.
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
            src="https://images.pexels.com/photos/11941821/pexels-photo-11941821.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            // src={img1}
            alt="img"
          />
        </div>

        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fuga
          animi blanditiis fugit, quia aliquid maxime nesciunt quasi expedita
          laudantium earum!
        </p>

        <div className="about-box">
          <h3 className="box-text">
            Your destination is waiting for you. Your van is readyyyy!
          </h3>
          <button className="btn about">
            <Link to={'/vans'}>Find your van</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
