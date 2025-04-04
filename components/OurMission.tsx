import React from "react"
const OurMission = ({ mission }) => {
  return (
    <div>
      <h1>Our Mission</h1>
      {mission.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default OurMission;