import { Menu } from "../../components/menu/menu.component";

const categories = require("../../categories.json");

export const Home = () => {
  return <Menu categories={categories} />;
};
