import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="head">Developer Community</h1>
          <p className="lead">
            Use this platform with impressive portfolio and engage with other
            developers
          </p>
          <div className="buttons">
            <Link to="/register.html" className="btn btn-signup">
              SIGN UP
            </Link>
            <Link to="/login.html" className="btn btn-login">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
