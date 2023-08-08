import React from "react"
import "./about.css"
import myphoto from "./Images/myphoto.jpeg";



function About(){
return <>
    <div className="about-section">
  <h1 style={{color:"rgb(76, 78, 75)"}}>About Us</h1>
  <p>This is a college project</p>

</div>

{/* <h2 style={{textAlign:"center"}}> </h2> */}
<div className="row" style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
  <div className="column">
    <div className="card" style={{display:"flex",justifyContent:"center"}}>
      <img className="aboutImg" src={myphoto} alt="Jane" style={{height:"220px",width:"50%",marginLeft:"25%"}}/>
      <div className="container">
        <h2>Jaydeep Patidar</h2>
        <p className="title">MCA</p>
        <p>Student at National Institute Of Technology, Warangal.</p>
   
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  {/* <div className="column">
    <div className="card">
      <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}}/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="/w3images/team3.jpg" alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div> */}
</div>
</>
}
export default About