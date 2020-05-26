import React from "react";


const Plant = (props) => {

    return(
        <div>
            <h1> This is a Plant! </h1>
                <div key={props.id}>
                    <h2>{props.plantName}</h2>
                    <h2>{props.species}</h2>
                    <h2>{props.care}</h2>
                    <h2>{props.happiness}</h2>
                    <h2>{props.description}</h2>
                </div>
        </div>

    )
}

export default Plant;
