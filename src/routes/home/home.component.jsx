import { CategoriesMenu } from "../../components/categories-menu/categories-menu.component";

const categories = require("../../categories.json");

export const Home = () => {
  return <CategoriesMenu categories={categories} />;
};
