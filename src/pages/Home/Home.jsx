import React, { useEffect, useState } from "react";
import Advertisement from "./Advertisement/Advertisement";
import Carousel from "./Carousel/Carousel";
import LogoMaker from "./LogoMaker/LogoMaker";
import Marketplace from "./Marketplace/Marketplace";
import MultipleSlick from "./MultipleSlick/MultipleSlick";

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
  
  return (
    <div className="">
      <Carousel />
      <MultipleSlick />
      <Advertisement />



      <Marketplace/>

      <LogoMaker/>
    </div>
  );
}
