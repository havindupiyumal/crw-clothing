import { Link, Outlet } from "react-router-dom";

import "./navigation-bar.styles.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg";

export const NavigationBar = () => {
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
            SIGN IN
          </Link>
          <Link className="nav-link" to={`/cart`}>
            CART
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
