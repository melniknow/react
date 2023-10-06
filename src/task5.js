const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

const Task5 = function () {
    return (
        <div style={{
            marginTop: "100px",
            textAlign: "center",
        }}>
            <ul style={{
                display: "inline-block",
                margin: "0",
                padding: "0",
                listStyleType: "none"
            }}>{animals.map(a => <li>{a}</li>)}</ul>
        </div>
    )
}

export default Task5;