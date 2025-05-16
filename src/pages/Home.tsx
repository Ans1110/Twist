import HomeImg from "../../public/home.jpeg";
import Daily from "../components/Daily";

const Home = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-screen">
        <img
          src={HomeImg}
          alt="Home"
          className="w-full h-full object-cover object-center brightness-75 select-none -z-10"
        />
      </div>
      <Daily />
    </div>
  );
};

export default Home;
