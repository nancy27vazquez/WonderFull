import React, { useState } from "react";
// import CardHorizontal from "../../components/common/CardHorizontal";
// import { getPlaces } from "../../services/places";
// import { AppContext } from "../../AppContext";
// import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">WonderFull</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Recommend
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/favorites/">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Next Trip</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Visited</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">
                <img src="https://d3lut3gzcpx87s.cloudfront.net/res/img/UnknownProfile.png" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
