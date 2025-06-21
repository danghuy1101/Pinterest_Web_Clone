import React from "react";
import "./collections.css";
import Image from "../Image/Image";
function collections() {
  return (
    <div className="collections">
      {/* Collection 1 */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 Pins .</span>
        </div>
      </div>
      {/* Collection 1 */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 Pins .</span>
        </div>
      </div>
      {/* Collection 1 */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 Pins .</span>
        </div>
      </div>
    </div>
  );
}

export default collections;
