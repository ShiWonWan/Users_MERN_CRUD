import { useState } from "react"
import { FaRegWindowClose } from "react-icons/fa"

export const NewUser = (props) => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()

    const commitUser = async (e) => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_URL_API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": user,
                "email": email,
                "age": age
            })
        }).then(response => {
            response.status === 201 ?
                alert('User created succesfully') :
                alert('An error has ocurred')
            props.reloadUsers()
        })
        closeForm()
    }

    const closeForm = () => {
        setAge(0)
        setEmail('')
        setUser('')
        props.setShowCreateNewUser(false)
    }

    return (
        <>
            {props.showCreateNewUser
                ?
                <form id="newUser" onSubmit={commitUser}>
                    <FaRegWindowClose onClick={() => closeForm()} style={{
                        marginLeft: "auto",
                        fontSize: "1.3rem",
                        color: "red",
                        background: "none",
                        border: "none"
                    }} />

                    <p style={{ fontSize: "2rem", textAlign: "center" }}>Create a new user</p>
                    <label>User</label>
                    <input
                        type="text"
                        placeholder="User name Ex. John Smith"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Emial Ex. jsmith@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Age</label>
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <input type="submit" value="Create user" />
                </form>

                :
                <p></p>}

        </>
    )
}