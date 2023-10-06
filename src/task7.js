import React, {useState} from 'react'

export const MainButtonStyles = {
    marginTop: "30px",
    paddingTop: "10px",
    appearance: "button",
    backgroundColor: "#f2043c",
    border: "solid transparent",
    borderRadius: "16px",
    borderWidth: "0 0 4px",
    boxSizing: "border-box",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: "din-round,sans-serif",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: ".8px",
    lineHeight: "20px",
    outline: "none",
    overflow: "visible",
    padding: "13px 16px",
    textAlign: "center",
    textTransform: "uppercase",
    touchAction: "manipulation",
    transform: "translateZ(0)",
    transition: "filter .2s",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    width: "200px",
}

const Form = function () {
    const [state, setState] = useState({
        firstName: "",
        lastName: ""
    });

    const handleInputChangeFirstName = (event) => {
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            firstName: value
        }));
    };

    const handleInputChangeLastName = (event) => {
        const {name, value} = event.target;
        setState((prevProps) => ({
            ...prevProps,
            lastName: value
        }));
    };

    const handleSubmit = (event) => {
        console.log(state);
        alert("Hello, " + state.firstName + " " + state.lastName + "!")
    };

    return (
        <div style={{
            marginTop: "100px",
            textAlign: "center",
        }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" onChange={handleInputChangeFirstName} style={{
                        height: "40px",
                        width: "180px",
                        paddingLeft: "10px",
                        borderRadius: "5px",
                    }} placeholder="First Name"/>
                </div>
                <div>
                    <input type="text" onChange={handleInputChangeLastName} style={{
                        height: "40px",
                        width: "180px",
                        paddingLeft: "10px",
                        marginTop: "10px",
                        borderRadius: "5px"
                    }} placeholder="Last Name"/>
                </div>

                <div>
                    <input style={MainButtonStyles} type="submit" value="GREET ME"/>
                </div>
            </form>
        </div>
    );
}


const Task7 = function () {
    return (
        <Form></Form>
    )
}

export default Task7;