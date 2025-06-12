import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url(/src/assets/home.jpeg)] bg-cover bg-center bg-no-repeat select-none w-screen h-screen overflow-y-auto">
      <div className="flex flex-col gap-1 items-center -mt-40">
        <div className="z-10 pt-2 text-6xl h-fit ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 font-[alata] ml-4 md:ml-0 select-none text-center text-9xl w-72 h-fit">
            404
          </h1>
        </div>
        <div className="z-10 pt-2 h-20">
          <Button
            asChild
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white font-[alata] h-18 w-42 text-xl"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
