import {ButtonStyles} from "./task3";
import React from "react";

const Task2 = function () {
    return (
        <div>
            <button onClick={() => alert("Clicked!")} style={ButtonStyles}>
                Click me!
            </button>
        </div>
    )
}

export default Task2;