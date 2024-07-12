import React from "react";
import backGround from "../../../Assets//images/character/hero.png";

function HeroImage() {
    return (
        <div
            className="Hero bg-cover bg-no-repeat h-auto w-auto p-8 md:p-16 lg:h-[800px] lg:w-auto"
            style={{
                backgroundImage: `url(${backGround})`,
            }}
        >
            <div className="container mx-auto">
                <div>
                    <div className="mt-12 md:mt-32">
                        <div className="text-start">
                            <h1 className="text-3xl md:text-4xl text-neutral-700">
                                Unlock Your Potential
                            </h1>
                            <h3 className="text-xl md:text-2xl text-neutral-700 mt-4">
                                Master IT Skills from the Comfort of Home:<br></br>
                                With Live Interactive Zoom Class
                            </h3>
                            <h4 className="text-lg md:text-2xl text-neutral-700 mt-2">
                                Transform Your Career with Our Expert-Led Bootcamp!
                            </h4>
                            <p className="text-neutral-700 mt-2">
                                Our expertly crafted programming classes blend theory with hands-on experience,
                                <p>empowering you to navigate the ever-evolving digital landscape with confidence and skill.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;
