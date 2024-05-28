import { Route, Routes } from "react-router-dom";

import { NavigationBar } from "./routes/navigation-bar/navigation-bar.component";

import { Home } from "./routes/home/home.component";
import { Shop } from "./routes/shop/shop.component";
import { Authentication } from "./routes/authentication/ authentication.component";
import { Checkout } from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListner,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
