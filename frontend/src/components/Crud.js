import { useState, useEffect } from "react"
import moment from 'moment';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

import { NewUser } from "./NewUser"


export const Crud = () => {

    const [users, setUsers] = useState([])
    const [showCreateNewUser, setShowCreateNewUser] = useState(false)
    const [showEdit, setShowEdit] = useState([])

    const getUsers = async () => {
        const reponse = await fetch(`${process.env.REACT_APP_URL_API}/users`)
        const users = await reponse.json()
        setUsers(users)
    }

    const deleteUser = async (id) => {
        const reponse = await fetch(`${process.env.REACT_APP_URL_API}/users/${id}`, {
            method: 'DELETE'
        })
        if (reponse.status === 200) {
            alert("User deleted!")
        } else if (reponse.status === 500) {
            alert("An error has ocurred")
        }
        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h1>CRUD Rest Example</h1>
            <button className="newUsr" onClick={() => setShowCreateNewUser(true)}>Create new user</button>
            <table id="crud">
                <thead>
                    <tr>
                        <th style={{ borderLeft: "none" }}>User</th>
                        <th>Email</th>
                        <th style={{ padding: ".5rem 1rem .5rem 1rem" }}>Age</th>
                        <th style={{ padding: ".5rem 1rem .5rem 1rem" }}>Registered date</th>
                        <th style={{ padding: ".5rem 1rem .5rem 1rem" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <td style={{ textAlign: "left" }}>{user.user}</td>
                            <td style={{ textAlign: "left" }}>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{moment(user.dateLogUp).format('DD/MM/YYYY')}</td>
                            <td className="actions"><Link to={`/update/${user["_id"]}`}><FaEdit className="edit" /></Link>
                                <FaRegTrashAlt className="delete" onClick={() => deleteUser(user["_id"])} /></td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
            <NewUser
                reloadUsers={getUsers}
                setShowCreateNewUser={setShowCreateNewUser}
                showCreateNewUser={showCreateNewUser}
            />

        </>
    )
}