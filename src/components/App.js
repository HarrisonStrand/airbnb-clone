import React from "react";
import Header from "./Header";
import Experience from "./Experience";
// import Footer from "./Footer";
// import Inspiration from "./Inspiration";
// import JoinHost from "./JoinHost";
import LiveAnywhere from "./LiveAnywhere";
import LocalDestination from "./LocalDestination";

function App() {
  return (
    <React.Fragment>
        <Header />
        <LocalDestination />
        <LiveAnywhere />
        <Experience />
      {/* 
      <Footer />
      <Inspiration />
      <JoinHost />
      */}
    </React.Fragment>
  );
}

export default App;
