import React from "react";
import { home3, home2, home4 } from "../assets";
import Signupbar from "./Signupbar";
import Hero from "./SlideShow/Hero";
import SlideShow from "./SlideShow/SlideShow";

const DefaultPage = () => (
  <div>
    <div className="absolute">
     
<img src={home4} className="hidden xl:block w-full h-full" alt="Home 4" />
<img src={home3} className="hidden md:block xl:hidden w-full h-full" alt="Home 3" />
<img src={home2} className="md:hidden  w-full h-full" alt="Home 2" />
    </div>

    <div>
      {/* Place any other content here */}
    </div>

    <div className="">
      <div className="absolute">
        <Signupbar />
      </div>

      <Hero />

      <SlideShow />
    </div>
  </div>
);

export default DefaultPage;