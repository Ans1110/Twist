export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-300 to-rose-500 bg-clip-text text-transparent mb-6 text-center">
          About This Website
        </h1>
        <p className="text-xl text-white font-alata leading-relaxed mb-4">
          This website uses the{" "}
          <span className="font-semibold text-violet-600">Cocktail API</span> to
          display comprehensive information about cocktails from around the
          world.
        </p>
        <p className="text-lg text-white font-alata leading-relaxed mb-4">
          Explore our data to learn about cocktail names, ingredients,
          instructions, and much more. Whether you’re curious about a particular
          cocktail or looking for insights about global cocktails, our
          interactive explorer makes it easy.
        </p>
        <p className="text-lg text-white font-alata leading-relaxed">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </div>
    </div>
  );
}
