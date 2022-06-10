import React from "react";

function Dust({
  date,
  location,
  gbn,
  code,
}){
  return(
    <div className="Dust">
      <h2>미세먼지</h2>
      <div className="date">발령 날짜 : {date}</div>
      <p className="location">{location}</p>
      <br/>
      <p className="grade">{code} {gbn}</p>
    </div>
  );
}

export default Dust;