import React from 'react';
import Loader from "react-loader-spinner";

const Animation = () => {
  return (
    <div className="animation-container">
      <Loader type="Puff" color="#018888" height={80} width={80} />
      <Loader type="Oval" color="#018888" height={80} width={80} />
      <Loader type="Rings" color="#018888" height={80} width={80} />
      <Loader type="TailSpin" color="#018888" height={80} width={80} />

    </div>
  )
}

export default Animation;
