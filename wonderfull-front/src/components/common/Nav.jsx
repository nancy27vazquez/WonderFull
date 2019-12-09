import React, { useState } from "react";
// import CardHorizontal from "../../components/common/CardHorizontal";
// import { getPlaces } from "../../services/places";
// import { AppContext } from "../../AppContext";
// import { useHistory } from "react-router-dom";

const Menu = () => {
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
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav className="uk-navbar-container uk-flex" uk-navbar>
        <div className="uk-navbar-left">
         <a class="uk-navbar-item uk-logo" href="/">WonderFull</a>
        </div>

        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li><a href="/discover">Discover</a></li>
                <li><a href="/recommend">Recommend</a></li>
                <li><a href="/favorites">Favorites</a></li>
                <li><a href="/next-trip">Next trip</a></li>
                <li><a href="/visited">Visited</a></li>
                <li>
                  <a href="/profile">
                    <img src="https://res.cloudinary.com/dr95kad7s/image/upload/v1570585586/samples/cloudinary-icon.png" width="30"/>
                  </a>
                </li>
                <li>
                  <a href="/login">
                    <img src="https://res.cloudinary.com/dr95kad7s/image/upload/v1570585586/samples/cloudinary-icon.png" width="30"/>
                  </a>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;