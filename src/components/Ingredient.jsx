import React from "react";

function Ingredient ({id, text, delete_ingredient}) {
    return (
        <div className="ingredients-container">
            <div className="ingredient">
                1 onion, 1 carrot, meat, rice...
            </div>
            <div className="option">
                <a href="#">Drop</a>
            </div>
        </div>
    )
}

export default Ingredient