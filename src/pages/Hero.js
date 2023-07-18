import hero from "../img/Hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <figure>
        <img className="w-full" src={hero} alt="Hero image" />
      </figure>
      <Link
        className="mint__btn bg-primary px-5 py-3 rounded-md shadow-md font-Kalam text-base text-white font-semibold"
        to="/mint"
      >
        Mint Here
      </Link>
    </section>
  );
}

export default Hero;
