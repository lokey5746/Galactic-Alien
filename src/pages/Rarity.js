function Rarity() {
  return (
    <section className="px-8 md:px-32 mx-auto w-full  md:py-10" id="rarity">
      <div className="flex flex-col items-center space-y-5 py-10">
        <h2 className="text-3xl md:text-5xl text-center font-semibold font-Kalam  tracking-wide special__font">
          Rarity
        </h2>
      </div>
      <div className="box rounded-md w-full shadow-md p-5 space-y-5">
        <h2 className="text-xl font-semibold text-white">How Rare?</h2>
        <p className="text-sm text-white text-justify md:leading-6">
          Each trait of Galactic Alien is hand drawn and every alien is unique
          and one of its kind. Each Galactic Alien is comprised of
          skin/body,mouth,hats,eyes and background traits. Each reflecting their
          personalities. When going out at night to throw galactic parties or
          just hangin' in the space, they express themselves through their
          style. Their traits can be common, uncommon, rare or super rare.For
          now, we think it’s better to not reveal that how many traits of each
          trait category are rare to keep up the excitement.
        </p>
        <ul className="text-sm md:text-base text-white font-semibold list-disc px-7 leading-7">
          <li>
            <span className="text-primary">10,000 </span> TOTAL GALACTIC ALIENS
          </li>
          <li>
            <span className="text-primary">30</span> BACKGROUNDS
          </li>
          <li>
            <span className="text-primary">26</span> SKINS
          </li>
          <li>
            <span className="text-primary">20</span> HATS
          </li>
          <li>
            <span className="text-primary">17</span> MOUTHS
          </li>
          <li>
            <span className="text-primary">22</span> EYES
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Rarity;
