import React, { useState } from "react";
import teamData from "../handler/teamData";

import team1 from "../img/Team-1.png";
import team2 from "../img/Team-2.png";
import team3 from "../img/Team-3.png";
import team4 from "../img/Team-4.png";
import team5 from "../img/Team-5.png";
import team6 from "../img/Team-6.png";
import team7 from "../img/Team-7.png";

function Team() {
  const [teams, setTeams] = useState(teamData);

  return (
    <section className="px-8 md:px-32 mx-auto md:py-10" id="team">
      <div className="flex flex-col items-center space-y-10 py-10">
        <h2 className="text-3xl md:text-5xl text-center font-semibold font-Kalam tracking-wide special__font">
          The Team
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team1} alt="" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              Bule
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                FOUNDER
              </p>
            </div>
          </figure>
          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team2} alt="" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              Maja
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                DISCORD EXPERT
              </p>
            </div>
          </figure>

          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team3} alt="" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              Anthony
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                COMMUNITY MANAGER
              </p>
            </div>
          </figure>

          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team4} alt="" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              Dushan
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                EVENT MANAGER
              </p>
            </div>
          </figure>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mx-auto">
          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team5} alt="" className="md:h-60" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              Clint
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                MODERATOR
              </p>
            </div>
          </figure>
          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team6} className="md:h-60" alt="" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              Hamad
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                DESIGNER
              </p>
            </div>
          </figure>
          {/* Single Team */}
          <figure className="flex flex-col items-center">
            <img src={team7} className="md:h-60" alt="" />
            <h2 className="team__font font-Kalam text-center text-lg md:text-2xl my-3">
              mr_sudeep
            </h2>
            <div className="">
              <p className="text-center uppercase text-sm font-semibold text-white font-Opensans">
                NFT EXPERT
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Team;
