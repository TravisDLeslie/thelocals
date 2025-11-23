import React from "react";
import Navbar from "./Navbar";
import AnnouncementBar from "../components/AnnoucementBar";

const Header = () => {
  return (
    <header>
      <AnnouncementBar />
      <Navbar />
    </header>
  );
};

export default Header;
