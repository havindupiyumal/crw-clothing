import { Outlet } from "react-router-dom";

import {
  NavigationBarContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from "./navigation-bar.styles.jsx";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartDropwdownOpen } from "../../store/cart/cart.selector.js";
import { toggleCartDropdown } from "../../store/cart/cart.reducer";
import { signOutStart } from "../../store/user/user.reducer";

export const NavigationBar = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const isDropdownOpen = useSelector(selectIsCartDropwdownOpen);

  const toggleCartDropdownHandler = () => dispatch(toggleCartDropdown());

  const signOutHandler = async () => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(signOutStart());
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
          <span onClick={toggleCartDropdownHandler}>
            <CartIcon />
          </span>
          {isDropdownOpen && <CartDropdown />}
        </NavLinkContainer>
      </NavigationBarContainer>
      <Outlet />
    </>
  );
};
