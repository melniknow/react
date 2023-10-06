import React from "react";

export class Button extends React.Component {
    render() {
        return <button onClick={() => alert("You are clicked on button " + this.props.name)}
                       style={{marginLeft: "20px"}}>
            Button, {this.props.name}
        </button>;
    }
}

export const ButtonStyles = {
    margin: "auto",
    marginTop: "100px",
    marginLeft: "48%",
    textAlign: "center",
    verticalAlign: "middle",
}

const Task3 = function () {
    return (
        <div style={{
            margin: "auto",
            display: "flex",
            marginLeft: "43%",
            textAlign: "center",
            verticalAlign: "middle",
            marginTop: "100px",
        }}>
            <Button name="1"></Button>
            <Button name="2"></Button>
            <Button name="3"></Button>
        </div>
    )
}

export default Task3;