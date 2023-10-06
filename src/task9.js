import React, {useEffect, useState} from 'react'

import {MainButtonStyles} from './task7'

const Form = function () {
    const [users, setUsers] = useState([])

    const fetchUserData = () => {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])


    return (
        <div style={{
            backgroundColor: "#e6f6e3",
            marginTop: "100px",
            paddingTop: "30px",
            width: "100%"
        }}>
            <button style={MainButtonStyles} onClick={() => {
                fetchUserData()
            }
            }>Fetch Data!
            </button>
            <div style={{
                //display: "flex", // TODO
            }}>
            {
                users.map(u =>
                    <div style={{
                        width: "300px",
                        borderRadius: "18px",
                        border: "3px",
                        textAlign: "left",
                        marginLeft: "30px",
                        marginTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                    }}>
                        <img
                            src={u.avatar}
                            alt="new"
                        />

                        <h3>{u.first_name} {u.last_name}</h3>
                        <p>{u.employment.title}</p>

                    </div>
                )
            }
            </div>
        </div>
    )
}


const Task9 = function () {
    return (
        <div>
            {Form()}
        </div>
    )
}

export default Task9;