import React from "react";
import { StarIcon } from "../Icons";
import "./index.css"
export function StarButton(){
    return(
        <div className="btn">
            {StarIcon}
        </div>
    )
}


export function RatingButton(){
    return(
        <div className="btn--wrapper">
            <div className="btn">1</div>
            <div className="btn">2</div>
            <div className="btn">3</div>
            <div className="btn">4</div>
            <div className="btn">5</div>
        </div>
    )
}

export function LargeButton(){
    return(
        <div className="btn--large">
            SUBMIT
        </div>
    )
}