import { useEffect, useState } from "react";

import { CategoriesMenu } from "./components/categories-menu/categories-menu.component";

const categories = require("./categories.json");

const App = () => {
  return <CategoriesMenu categories={categories} />;
};

export default App;
