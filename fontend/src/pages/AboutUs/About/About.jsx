import React from "react";

import AboutBanner from "../AboutComp/AboutBanner";
import Partners from "../AboutComp/Partners";
import Progrss from "../AboutComp/Progrss";
import Storyus from "../AboutComp/Storyus";
import Welcome from "../AboutComp/Welcome";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <Welcome />
      <Progrss />
      <Storyus />
      <Partners />
    </div>
  );
}
