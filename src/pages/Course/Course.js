import React from "react";
import learn from "../../assets/images/learn.jpg";
import implement from "../../assets/images/implementation.jpg";
import idea from "../../assets/images/idea.jpg";
import { Carousel } from "3d-react-carousal";
import slides from "../../assets/lists/CoursesList";
import "./Course.css";
function Course() {
    // let slides = [
    //     <img src="https://picsum.photos/800/300/?random" alt="1" />,
    //     <img src="https://picsum.photos/800/301/?random" alt="2" />,
    //     <img src="https://picsum.photos/800/302/?random" alt="3" />,
    //     <img src="https://picsum.photos/800/303/?random" alt="4" />,
    //     <img src="https://picsum.photos/800/304/?random" alt="5" />,
    // ];
    const callback = function (index) {
        console.log("callback", index);
    };
    return (
        <div className="main-app">
            <div className="CourseData">
                <h2>Let's Build Something</h2>
                <p>
                    We at E labs, will help you to learn skills that are
                    relevant to modern day industrial requirements. We
                    specialize in varied domains like web Development, App
                    Development, Cyber Security, IOT, Machine Learning and the
                    list goes on, we believe in holding hands and taking the
                    step towards betterment together.
                </p>
            </div>
            <div className="CourseBox">
                <div className="box">
                    <img src={learn} alt="" />
                    <h2>Learn</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi, quisquam.
                    </p>
                </div>
                <div className="box">
                    <img src={idea} alt="" />
                    <h2>Grow your skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi, quisquam.
                    </p>
                </div>
                <div className="box">
                    <img src={implement} alt="" />
                    <h2>Implement!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi, quisquam.
                    </p>
                </div>
            </div>

            <div className="CourseCarousal">
                <h2>Courses We Offer</h2>
                <div className="CourseCard">
                    <Carousel
                        slides={slides}
                        autoplay={true}
                        // arrows={false}
                        interval={5000}
                        onSlideChange={callback}
                    />
                </div>
            </div>
        </div>
    );
}

export default Course;
