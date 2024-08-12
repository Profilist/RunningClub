import React from "react";
import "./App.css";

const App = () => {
  const handleRegister = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSeEiMGtAgVl1t9cgHwod6QU6T_cVn6dOR9c_pSRH85bLtyASw/viewform";
  };

  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/runcrs/";
  };

  return (
    <div className="landing">
      <div className="headerBox">
        <div className="menu"></div>
        <h1 className="title">
          RUN LIKE A <span className="redText">CHAMPION</span>
        </h1>
      </div>
      <div className="bodyBox">
        <img className="image" src="/Running Club.jpg" alt="Running Club" />
        <div className="text">
          <div className="headingBody">
            <div className="box" />
            <h2> JOIN OUR RUNS</h2>
          </div>
          <p>
            At our running club, we pride ourselves on being an inclusive and
            welcoming community of runners. Whether you're just starting out or
            you're a seasoned marathoner, you'll find a place with us. Our club
            is open to runners of all races, genders, ages, and abilities. We
            believe that running is for everyone, and we’re here to support and
            encourage each other every step of the way.
            <br />
            <br />
            How to Get Started <br />
            <br />
            1. Register Today: Signing up is easy and free! Simply fill out our
            registration form to become a member. <br />
            <br />
            2. Join a Run: After registering, check out our upcoming runs and
            join the one that suits you best. <br />
            <br />
            3. Stay Connected: Follow us on social media and join our online
            community to stay updated on events and connect with fellow runners.
            <br />
            <br />
            Don’t be shy about your running capabilities – everyone has a place
            with us, and we’re excited to have you join our community. Lace up
            your running shoes, and let’s hit the pavement together!
          </p>
          <button onClick={handleRegister} className="registerButton">
            REGISTER
          </button>
        </div>
      </div>
      <div className="footerBox">
        <h2 className="footerText">
          READY TO <span className="redText">RUN</span>?
        </h2>
        <img
          onClick={handleInstagram}
          className="instagramLogo"
          src="/Instagram.svg"
          alt="Instagram"
        />
      </div>
    </div>
  );
};

export default App;
