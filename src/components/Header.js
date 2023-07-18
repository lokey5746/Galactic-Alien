import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";

import { AiOutlineMenu } from "react-icons/ai";
import { social } from "../handler/navData";

import {
  LinkS,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <header className="px-8 md:px-32 mx-auto w-full box">
      <div className="nav-center">
        <div className="nav-header">
          <figure>
            <Link to="/">
              <img className="h-20" src={logo} alt="Logo of Site" />
            </Link>
          </figure>
          <button onClick={() => setShowLinks(!showLinks)}>
            <AiOutlineMenu className="md:hidden text-primary absolute top-8 md:top-10 right-10 text-2xl cursor-pointer" />
          </button>
        </div>

        <div
          className={`${
            showLinks ? "links-container show-container" : "show-container"
          }`}
        >
          <ul className="links md:space-x-10 text-white">
            <li className="links">
              <a className="link" href="#about" smooth={true} duration={1000}>
                About
              </a>
            </li>

            <li className="links">
              <a className="link" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li className="links">
              <a className="link" href="#rarity">
                Rarity
              </a>
            </li>
            <li className="links">
              <a className="link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="links">
              <a className="link" href="#team">
                Team
              </a>
            </li>
            <li className="block md:hidden">
              <ul className="flex space-x-3">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <figure className="" key={id}>
                      <a href={url} target="_blank">
                        <img className="" src={icon} alt="instagram" />
                      </a>
                    </figure>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>

        <div className="social-icons space-x-4">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <figure key={id}>
                <a href={url} target="_blank">
                  <img className="" src={icon} alt="Instagram" />
                </a>
              </figure>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
