import React from "react";
import Teacher from "../../Teacher/Teacher/Teacher";
import Activites from "../Activities/Activites";
import ClassRoom from "../ClassRoom/ClassRoom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurBlog from "../OurBlog/OurBlog";
import Wellcome from "../Wellcome/Wellcome";

export default function Home() {
  return (
    <div>
      <Header />
      <Wellcome />
      <ClassRoom />
      <Activites />
      <OurBlog />
      <Footer />
    </div>
  );
}
