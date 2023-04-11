import React from "react"


export default function Card(props) {
    
    return (
      <div className="card">
        <img src={props.image} alt={props.name} style={{ height: "250px", width: "297px", marginTop: "10px" }} />
        <div style={{ fontSize: '26px' , textAlign: 'center' }}> {props.name} </div>
      </div>
    );
  }