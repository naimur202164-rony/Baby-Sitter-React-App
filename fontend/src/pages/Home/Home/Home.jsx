import React from "react";
import Activites from "../Activities/Activites";
import ClassRoom from "../ClassRoom/ClassRoom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Wellcome from "../Wellcome/Wellcome";

export default function Home() {
  return (
    <div>
      <Header />
      <Wellcome />
      <ClassRoom />
      <Activites />
      <Footer />
    </div>
  );
}
