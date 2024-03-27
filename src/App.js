import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

import { NavigationBar } from "./routes/navigation-bar/navigation-bar.component";

import { Home } from "./routes/home/home.component";
import { Shop } from "./routes/shop/shop.component";
import { Authentication } from "./routes/authentication/ authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
