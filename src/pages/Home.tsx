import HomeImg from "../../public/home.jpeg";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <img
        src={HomeImg}
        alt="Home"
        className="w-full h-full object-cover object-center brightness-75 select-none"
      />
    </div>
  );
};

export default Home;
