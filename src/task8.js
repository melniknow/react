import React from 'react'

const Form = function () {
    const jokes = [
        {
            main: "Why programmers wear glasses?",
            then: "Because they need to C#.",
        },
        {
            main: "What`s the best thing about a Boolean?",
            then: "Even if you`re wrong, you`re only off by bit.",
        }
    ];
    return (
        jokes.map(j =>
            <div style={{
                width: "300px",
                height: "130px",
                borderRadius: "18px",
                border: "3px",
                textAlign: "center",
                marginLeft: "30px",
                marginTop: "20px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white"
            }}>
                <h2>{j.main}</h2>
                <p>{j.then}</p>
            </div>
        )
    )
}


const Task8 = function () {
    return (
        <div style={{
            display: "flex",
            backgroundColor: "#e6f6e3",
            marginTop: "100px",
            height: "200px"
        }}>
            {Form()}
        </div>
    )
}

export default Task8;