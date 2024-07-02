import React from "react";

function Card(props) {
    return (
        <div className="card">
          <img src={props.src} alt="Your Image" />
          <h1>{props.name}</h1>
          <p class="title">Engineering Student</p>
          <p>Email: <a href="mailto:your-email@example.com">{props.email}</a></p>
          <p>Tel: <a href="tel:+1234567890">{props.number}</a></p>
        </div>
    )
}

export default Card;