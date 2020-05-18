import React from "react";


function Home(props) {
  console.log(props);
  
  return (
    <div className="home">
      <img
        className="home-image"
        src="Pizza.jpg"
        alt="pepperoni pizza pic"
      />
      
    </div>
  );
}

export default Home;