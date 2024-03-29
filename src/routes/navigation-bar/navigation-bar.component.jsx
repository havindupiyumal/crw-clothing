import { useContext } from "react";

import { Link, Outlet } from "react-router-dom";

import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import "./navigation-bar.styles.scss";

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
      <div className="navigation-bar">
        <Link className="logo-container" to={`/`}>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={`/shop`}>
            SHOP
          </Link>
          <Link className="nav-link" to={`/auth`}>
            {currentUser == null ? (
              "SIGN IN"
            ) : (
              <span>
                {currentUser.email}{" "}
                <span onClick={signOutHandler}>(SIGN OUT)</span>
              </span>
            )}
          </Link>
          <span onClick={toggleCartDropdown}>
            <CartIcon />
          </span>
          {isDropdownOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};
