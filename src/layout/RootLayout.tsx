import { Outlet } from "react-router";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (
    <div
      className="bg-[url(/src/assets/home.jpeg)] bg-cover bg-center bg-no-repeat select-none w-screen h-screen overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
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
