import React from "react";
import { LargeButton, RatingButton, StarButton } from "../Buttons";
import "./index.css"


export default function Rating() {
  return (
    <div className="rating-wrapper">
      <StarButton/>
      <h4>How did we do?</h4>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingButton/>
      <LargeButton/>
    </div>
  );
}
