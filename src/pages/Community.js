import image1 from "../img/community1.png";
import image2 from "../img/community2.png";
import image3 from "../img/community3.png";
import image4 from "../img/community4.png";

function Community() {
  return (
    <section className="px-8 md:px-32 mx-auto  py-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20">
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-5xl font-Kalam font-bold leading-8 md:leading-18 box p-4 rounded-md shadow-md">
            <span className="text-white">
              {" "}
              Welcome to the <br />{" "}
            </span>
            <span className="special__font">Galactic Alien Yacht Club</span>
          </h2>
          <div className="box rounded-md shadow-md p-5 space-y-5">
            <p className="text-sm text-white text-justify leading-6">
              Galactic Alien Yacht Club (GAYC) is a quality-driven project by a
              small group of passionate artists and developers. GAYC is limited
              NFT collection where the token itself doubles as your membership
              to a galactic club .
            </p>
            <p className="text-sm text-white text-justify leading-6">
              The club is open! Each Galactic Alien is made up of separate
              hand-crafted images that are chosen at random. They are minted on
              the Ethereum blockchain.
            </p>
          </div>
          <a
            className="inline-block bg-primary mt-20 text-white font-Kalam text-base md:text-xl px-3 md:px-5 py-3 rounded-md"
            href="https://t.co/XaaoR1nAeK"
            target="_blank"
          >
            Join Community
          </a>
        </div>
        <div className="space-y-5 mt-5 md:mt-0">
          <div className="flex gap-6">
            <figure>
              <img className="h-45 md:h-52 md:w-56" src={image1} alt="" />
            </figure>
            <figure>
              <img className="h-45 md:h-52 md:w-56" src={image2} alt="" />
            </figure>
          </div>
          <div className="flex gap-6">
            <figure>
              <img className="h-45 md:h-52 md:w-56" src={image3} alt="" />
            </figure>
            <figure>
              <img className="h-45 md:h-52 md:w-56" src={image4} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
