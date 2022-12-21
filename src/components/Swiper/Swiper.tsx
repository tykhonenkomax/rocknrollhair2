import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1440},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1439, min: 1000},
        items: 2
    },
    mobile: {
        breakpoint: {max: 1000, min: 0},
        items: 1

    }
};



export {
    responsive
}