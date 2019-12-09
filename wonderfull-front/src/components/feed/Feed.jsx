import React, { useState } from "react";
import Menu from "../common/Nav";
import Hero from "../common/Hero";
import SearchBar from "../common/SearchBar";
import CardSimple from "../common/CardSimple";
import CarouselSimple from "../common/CarouselSimple";
import CardCategories from "../common/CardCategories";
import CardHorizontal from "../common/CardHorizontal";
import Footer from "../common/Footer";
// import { getPlaces } from "../../services/places";
// import { AppContext } from "../../AppContext";
// import { useHistory } from "react-router-dom";

const Home = () => {
  // const { user, properties, setPlaces } = useContext(AppContext);
  // const { push } = useHistory();

  // useEffect(() => {
  //   if (!user) return push("/login");

  //   getPlaces().then(res => {
  //     const { places } = res.data;
  //     console.log(places);
  //     setProperties(places);
  //   });
  // }, []);

  return (
    <div>
      <Menu />
      <Hero />
      <SearchBar />
      <div className="uk-section">
        <div className="uk-container uk-margin-medium-bottom">
          <h2 className="uk-margin-remove-bottom">Wonderful places for your next trip</h2>
          <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Amazing nature you didn’t knew that could be real</p>
          <div className="uk-grid uk-child-width-1-1@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-match uk-grid-small ">
            <CardSimple />
            <CardSimple />
            <CardSimple />
          </div>
        </div>
      </div>
      <CarouselSimple />
      <div className="uk-section">
        <div className="uk-container uk-margin-medium-bottom">
          <h2 className="uk-margin-remove-bottom">Dive into every kind of wonder</h2>
          <p className="uk-text-lead uk-margin-remove-top uk-margin-large-bottom">Explore each category and take a breathtaking trip</p>
          <div className="uk-grid uk-child-width-1-1@s uk-child-width-1-2@m uk-grid-match uk-grid-medium">
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
          </div>
        </div>
      </div>
      <CardCategories />
      <Footer />
    </div>
  );
};

export default Home;
