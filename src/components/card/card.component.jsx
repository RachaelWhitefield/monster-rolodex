import React from "react";
import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> {/* This is the api where our monster pictures come from as well as setting the size we want */}
        <h2> {props.monster.name} </h2>{/* The json info getting passed down from the api call */}
        <p> {props.monster.email} </p>
    </div>
)