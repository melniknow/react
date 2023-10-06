import React, {useState} from 'react'

import ButtonStyles from './task3'

const Task4 = function () {
    let [counts, setCount] = useState(0);

    function inc() {
        setCount(counts + 1)
    }

    return (
        <div style={{
            margin: "auto",
            marginTop: "100px",
            textAlign: "center",
            verticalAlign: "middle",
        }}>
            <div>
                Button has been clicked {counts}</div>
            <div>
                <button onClick={inc}>Click me</button>
            </div>
        </div>
    );
}

export default Task4;
