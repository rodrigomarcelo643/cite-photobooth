import { Link } from 'react-router-dom';
import './WS.css';

function WelcomeScreen() {
  return (
    <div className="welcome-container">
      <img src="/wifi.svg" className="icon icon1" alt="icon" />
      <img src="/camera1.svg" className="icon icon2" alt="icon" />
      <img src="/lock.svg" className="icon icon3" alt="icon" />
      <img src="/chain.svg" className="icon icon4" alt="icon" />
      <img src="/camera2.svg" className="icon icon5" alt="icon" />
      <img src="/gear.svg" className="icon icon6" alt="icon" />
      <img src="/music.svg" className="icon icon7" alt="icon" />
      <img src="/headphone.svg" className="icon icon8" alt="icon" />

      <div className="center-content">
        <img src="/cite_logo.svg" alt="SWU Logo" className="logo" />
        <p className="subtitle">Welcome to the</p>
        <h1 className="cite">
          <span>Trojan's</span> photobooth
        </h1>
        <p className="tagline">Make your first memories <br/> as a freshman unforgettable with the IT Student Council.</p>
        <Link to="/camera">
          <button className="start-btn"><span>START →</span></button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeScreen;
