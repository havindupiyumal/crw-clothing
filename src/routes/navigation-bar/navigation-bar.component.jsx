import { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";

import { auth, signOutAuthUser } from "../../utils/firebase/firebase.utils";

import "./navigation-bar.styles.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg";

export const NavigationBar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

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
              <span onClick={signOutHandler}>
                {currentUser.email} (SIGN OUT)
              </span>
            )}
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
