import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const { user, resetContext } = useContext(AppContext);
  const { push } = useHistory();

  const handleLogout = () => {
    logout();
    push("/login");
    resetContext();
  };

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
          <a className="uk-navbar-item uk-logo" href="/">
            WonderFull
          </a>
        </div>
        {user._id ? (
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <a href="/discover">Discover</a>
              </li>
              <li>
                <a href="/recommend">Recommend</a>
              </li>
              <li>
                <a href="/favorites">Favorites</a>
              </li>
              <li>
                <a href="/next-trip">Next trip</a>
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576279914/WonderFull/user_kzixa6.svg"
                  width="20"
                />
              </li>
              <li>
                <button onClick={handleLogout}>
                  <img
                    src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576278992/WonderFull/logout_mnfi4h.svg"
                    width="20"
                  />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Menu;
