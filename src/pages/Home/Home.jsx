import React, { useEffect, useState } from "react";
import Header from "../../_Component/Header/Header";
import Advertisement from "./Advertisement/Advertisement";
import Carousel from "./Carousel/Carousel";
import LogoMaker from "./LogoMaker/LogoMaker";
import Marketplace from "./Marketplace/Marketplace";
import MultipleSlick from "./MultipleSlick/MultipleSlick";
import Solution from "./Solution/Solution";
import Talent from "./Talent/Talent";

export default function Home(props) {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Mỗi lần load dữ liệu component lên hoặc resize sẽ xét lại kích thước cho biến screen
    window.onload = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onresize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    return () => {
      window.removeEventListener("onload");
      window.removeEventListener("onresize");
    };
  }, []);
  
  // Sticky header
  // window.addEventListener("scroll", function () {
  //   var header = this.document.querySelector(".header");
  //   header.classList.toggle("sticky", this.window.scroll > 0);
  // });

  return (
    <section>
      <Header />
      <Carousel />
      <MultipleSlick />
      <Advertisement />
      <Marketplace/>
      <Solution />
      <LogoMaker/>
      <Talent/>
    </section>
  );
}
