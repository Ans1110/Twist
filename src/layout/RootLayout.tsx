import { Outlet } from "react-router";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default RootLayout;
