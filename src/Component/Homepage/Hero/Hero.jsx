import React from "react";
import backGround from "../../../Assets/images/Hero/hero_3.png";


function HeroImage() {
  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
          width: "auto",
          padding:"100px"
      }}
    >
      <div className="container">
          <div>
              <div  style={{marginTop: "120px"}}>
            <span className="text-start">
              <h1 className="text-5xl text-neutral-700">Unlock Your Potential</h1>
              <h3 className="text4xl text-neutral-700">Master IT Skills from the Comfort of Home: </h3>
                <h4 className=" text-neutral-700">Transform Your Career with Our Expert-Led Bootcamp!</h4>
                <p className="text-neutral-700">
                    Our expertly crafted programing classes blend theory with hands-on experience,<p>
                  empowering you to navigate the ever-evolving digital landscape with confident and skill.
                </p></p>
            </span>
              </div>
          </div>
      </div>
    </div>
  );
}

export default HeroImage;
