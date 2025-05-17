import Daily from "../components/Daily";
import { Outlet, useLocation } from "react-router";

const Home = () => {
  const currentPath = useLocation().pathname;
  if (currentPath === "/") {
    return <Daily />;
  } else {
    return <Outlet />;
  }
};

export default Home;
