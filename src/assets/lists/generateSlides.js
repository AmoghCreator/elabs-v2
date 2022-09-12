import Images from "./CarousalImages";

function generateSlides(length = Images.length, sig = 0) {
    return Array.from({ length }).map((value, index) => {
        index = sig || index;
        return {
            src: `${Images[index].img}`,
            alt: `Image ${index + 1}`,
        };
    });
}

export default generateSlides;
