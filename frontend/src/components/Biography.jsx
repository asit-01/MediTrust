import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            MediTrust Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            MediTrust, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          At Meditrust Medicare, we take your well-being seriously, and that includes making appointments a breeze. Imagine stepping through our virtual doors and being greeted by a friendly guide who tailors your appointment needs.  Within minutes, you'll be effortlessly connected with the perfect doctor for your situation, leaving you free to focus on the things that matter most – your health and happiness.
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
