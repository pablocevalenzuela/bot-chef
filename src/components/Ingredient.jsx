import React from "react";

function Ingredient (props) {
    return (
        <div className="ingredients-container">
            <div className="ingredient">
    
            </div>
            <div className="option">
                {props.text} <a href="#">Drop</a>
            </div>
        </div>
    )
}

export default Ingredient