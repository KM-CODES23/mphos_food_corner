import React from "react";
import "../styles.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to our food platform! We’re passionate about serving quality meals
          and refreshing drinks that bring people together. Our team works hard
          to make sure every order is prepared with love, freshness, and flavor.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>🍔 Our Mission</h2>
          <p>
            To deliver happiness through food — fast, fresh, and full of flavor.
            We’re driven by community, quality, and sustainability in everything we do.
          </p>
        </div>

        <div className="about-card">
          <h2>👨‍🍳 Our Team</h2>
          <p>
            From our skilled chefs to our friendly delivery partners, we’re one
            family dedicated to providing you with the best dining experience.
          </p>
        </div>

        <div className="about-card">
          <h2>🏠 Our Story</h2>
          <p>
            We started as a small kitchen in Carletonville and grew through
            passion, innovation, and our love for great food. We’re still growing,
            one meal at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
