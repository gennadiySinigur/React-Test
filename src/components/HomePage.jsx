import React from 'react';
import Animation from './Animation';
import Chart from './Chart';
// import Header from './Header';
// import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <div className="homePage">
      {/* <Header /> */}
      <h1>Welcome to Home Page!</h1>
      <Chart />
      <Animation />
    </div>
  )
}

export {HomePage};
