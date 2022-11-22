import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
// eslint-disable-next-line import/no-unresolved
import "@splidejs/splide/css";
import logo from "../../assets/images/elabs_logo2.svg";
import googleplay from "../../assets/images/googleplay.png";
import dept from "../../assets/lists/domain";
import Carousal from "../../components/rest-components/Carousal/Carousal";

function Home() {
    const aboutScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div className="img_box">
                <div className="box_data">
                    Grow together with
                    <p className="elabs">E Labs</p>
                    <p className="type">
                        <Typewriter
                            options={{
                                strings: [...dept],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <Button
                        className="Button"
                        variant="contained"
                        endIcon={
                            <DoubleArrowRoundedIcon className="ArrowButn" />
                        }
                        onClick={aboutScroll}
                    >
                        Know More
                    </Button>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="about" id="About-Us">
                <h2>About Us</h2>
                <p>
                    E-Labs is a student run peer-to-peer technical engagement
                    platform. We offer a multitude of courses and projects
                    beyond the present syllabus to help you grow and cope up
                    with the ever so dynamic world. So lets come together here
                    at E Labs to excel by learning from peers while bridging the
                    immense gap between academics and industry.
                </p>
                <div className="Carousal">
                    <Carousal />
                </div>
                <div className="AppDownload">
                    <h1>Download App Now !!</h1>
                    <div className="app">
                        <div className="logobox">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="appdata">
                            <h3>E Labs</h3>
                            AndroidMonkey <span>* Education </span> <br />
                            4.4* <span className="file">9.4MB</span>
                        </div>
                        <div className="imageDownload">
                            <a href="https://play.google.com/store/apps/details?id=com.androidmonkey.elabs">
                                <img src={googleplay} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
