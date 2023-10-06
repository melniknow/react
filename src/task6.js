import React from "react";

class AnimalList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const icons = this.props.animals.map(a => {
                switch (a) {
                    case "dog":
                        return <li>🐶</li>
                    case "cow":
                        return <li>🐮</li>
                    case "cat":
                        return <li>🐱</li>
                    case "chicken":
                        return <li>🐔</li>
                    case "sheep":
                        return <li>🐑</li>
                    case "horse":
                        return <li>🐎</li>
                }
            }
        )
        return (
            <div>
                <ul style={{
                    display: "inline-block",
                    margin: "0",
                    padding: "0",
                    listStyleType: "none"
                }}>
                    {icons}
                </ul>
            </div>
        )
    }
}

const Task6 = function () {
    return (
        <div style={{
            marginTop: "100px",
            textAlign: "center",
        }}>
            <AnimalList animals={['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']}/>
        </div>
    )
}

export default Task6;