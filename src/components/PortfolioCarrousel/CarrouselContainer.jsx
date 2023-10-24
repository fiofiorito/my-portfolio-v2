// hooks
import { useState } from "react";
// components & styles
import CarrouselItem from "./CarrouselItem";
import "./CarrouselContainer.css"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// data
import { myPortfolio } from "../../data-resources/myPortfolio";

const CarrouselContainer = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const updateIndex = (newSlide) => {
        if (newSlide < 0) {
            newSlide = 0;
        } else if (newSlide >= myPortfolio.length) {
            newSlide = myPortfolio.length - 1;
        }
        setActiveSlide(newSlide);
    }


    return <div className="carrousel">
        <button onClick={() => { updateIndex(activeSlide - 1) }} className="carrousel-btn">
            <IoIosArrowBack className="carrousel-btn-icon" />
        </button>
        <div className="carrousel-child" style={{ transform: `translate(-${activeSlide * 100}% )` }}>
            {myPortfolio.map(item => {
                return <CarrouselItem key={item.id} item={item} />
            })}
        </div>
        <button onClick={() => { updateIndex(activeSlide + 1) }} className="carrousel-btn">
            <IoIosArrowForward className="carrousel-btn-icon" />
        </button>
    </div>
}

export default CarrouselContainer;