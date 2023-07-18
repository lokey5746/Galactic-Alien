import React from "react";
import Banner from "./Banner";
import Community from "./Community";
import Faq from "./Faq";
import Hero from "./Hero";
import Rarity from "./Rarity";
import Roadmap from "./Roadmap";
import Team from "./Team";

function Home() {
  return (
    <>
      <Hero />
      <Community />
      <Banner />
      <Roadmap />
      <Rarity />
      <Faq />
      <Team />
    </>
  );
}

export default Home;
