import { links, social } from "../handler/navData";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-8 md:px-32 mx-auto md:py-10">
      <div className="flex justify-between items-center">
        <div className="space-y-5">
          <figure>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-14 md:h-16" />
            </Link>
          </figure>
          <div>
            <p className="text-white text-sm md:text-sm">
              © 2022 Galactic Alien Yacht Club.
            </p>
            <p className="text-white text-sm md:text-sm">
              All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="hidden md:block mt-14 space-y-5">
          <h2 className="text-white text-sm md:text-xl">Follow Us</h2>
          <ul className="flex space-x-8">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <figure className="" key={id}>
                  <a href={url}>
                    <img className="" src={icon} alt="Instagram" />
                  </a>
                </figure>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
