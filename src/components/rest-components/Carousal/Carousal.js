import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import generateSlides from "../../../assets/lists/generateSlides";
import "./Carousal.css";

const Carousal = () => {
    const options = {
        type: "loop",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
    };

    return (
        <div className="wrapper">
            <Splide
                options={options}
                aria-labelledby="autoplay-example-heading"
                hasTrack={false}
            >
                <div className="imageCarousal" style={{ position: "relative" }}>
                    <SplideTrack>
                        {generateSlides().map((slide) => (
                            <SplideSlide key={slide.src}>
                                <img src={slide.src} alt={slide.alt} />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </div>
            </Splide>
        </div>
    );
};

export default Carousal;
