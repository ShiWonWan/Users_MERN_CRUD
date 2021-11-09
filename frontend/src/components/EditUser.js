import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditUser = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    let { id } = useParams();


    const navigator = useNavigate()

    const commitEditedUser = async (e) => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_URL_API}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": user,
                "email": email,
                "age": age
            })
        }).then(response => {
            response.status === 200 ?
                alert(`User ${user} edited succesfully`) :
                alert('An error has ocurred')
        })
        navigator('/')
    }

    const getUser = async () => {
        const reponse = await fetch(`${process.env.REACT_APP_URL_API}/users/${id}`)
        const user = await reponse.json()
        setUser(user.user)
        setAge(user.age)
        setEmail(user.email)
    }

    useEffect(() => {
        getUser()
    }, [])

    const goBack = () => {
        navigator('/')
    }

    return (
        <>

            <form id="editUser" onSubmit={commitEditedUser}>

                <p style={{ fontSize: "2rem", textAlign: "center" }}>Edit user:</p>
                <p style={{ textAlign: "center" }}>{user}</p>
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
                    placeholder="Email Ex. jsmith@gmail.com"
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

                <input type="submit" value="Submit" />
                <button className="back" onClick={() => goBack()}>🠔 Back</button>
            </form>

        </>
    )
}
