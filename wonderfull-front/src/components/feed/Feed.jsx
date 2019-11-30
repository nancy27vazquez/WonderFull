import React, { useState } from "react";
import Menu from "../common/Nav";
import Hero from "../common/Hero";
import SearchBar from "../common/SearchBar";
import CardSimple from "../common/CardSimple";
import CarouselSimple from "../common/CarouselSimple";
import CardCategories from "../common/CardCategories";
import CardHorizontal from "../common/CardHorizontal";
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
      <CardSimple />
      <CarouselSimple />
      <CardCategories />
      <CardHorizontal />
    </div>
  );
};

export default Home;
