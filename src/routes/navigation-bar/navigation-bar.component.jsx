import { useContext } from "react";

import { Link, Outlet } from "react-router-dom";

import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationBarContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from "./navigation-bar.styles.jsx";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";

export const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { toggleCartDropdown, isDropdownOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      await signOutAuthUser();
    }
  };

  return (
    <>
      <NavigationBarContainer>
        <LogoContainer to={`/`}>
          <Logo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to={`/shop`}>SHOP</NavLink>
          <NavLink to={`/auth`}>
            {currentUser == null ? (
              "SIGN IN"
            ) : (
              <span>
                {currentUser.email}{" "}
                <span onClick={signOutHandler}>(SIGN OUT)</span>
              </span>
            )}
          </NavLink>
          <span onClick={toggleCartDropdown}>
            <CartIcon />
          </span>
          {isDropdownOpen && <CartDropdown />}
        </NavLinkContainer>
      </NavigationBarContainer>
      <Outlet />
    </>
  );
};
