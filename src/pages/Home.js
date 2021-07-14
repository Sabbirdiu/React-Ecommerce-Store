import React from "react";
import { Contact, Hero, Services, FeaturedProduct } from "../components/index";
const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
