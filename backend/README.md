# Backend of the Users MERN CRUD
Here you can find the backend code of the application.

## Schemas
There is only one Schema in this app
> ### Users
```json
{
    user: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    dateLogUp: {
        type: Date,
        require: true,
        default: Date.now
    }
}
```

## Endpoints
> ### **GET ALL USERS [Type: GET]**
`"/users/"`<br>
**REQUIREMENTS** <br>
- None

> ### **GET ONE USER [Type: GET]**
`"/users/:id"`<br>
**REQUIREMENTS** <br>
- User id in the URL (Mongo _id)


> ### **CREATE ONE USER [Type: POST]**
`"/users/"`<br>
**REQUIREMENTS** <br>
- JSON
```json
{
	"user": "{NEW USER NAME}*",
    "email": "{NEW EMAIL}",
    "age": "{NEW AGE}",
    "date": "{NEW DATE}" // DATE IS OPTIONAL
}
```

> ### **UPDATE ONE USER [Type: PUT]**
`"/users/:id"`<br>
**REQUIREMENTS** <br>
- User id in the URL (Mongo _id)
- JSON
```json
// EVERY FIELD IS OPTIONAL
{
	"user": "{NEW USER NAME}*",
    "email": "{NEW EMAIL}",
    "age": "{NEW AGE}",
    "date": "{NEW DATE}"
}
```

> ### **DELETE ONE USER [Type: DELETE]**
`"/users/:id"`<br>
**REQUIREMENTS** <br>
- User id in the URL (Mongo _id)