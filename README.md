# GigaPet

## Endpoints

Base: https://gigapetbw4.herokuapp.com

### Auth Routes

| Method | Type     | Endpoint   | Send                                | Returns                                                                          |
| ------ | -------- | ---------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| POST   | Register | /register/ | See below                           | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data`    |
| POST   | Login    | /login/    | JSON with "username" and "password" | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data`    |

Registration info:

| Required          |
| ----------------- |
| username (unique) |
| password          |
| petname           |

## Restricted Routes

Base: https://gigapetbw4.herokuapp.com/auth

*Token must be sent in an authentication header to access*

| Method   | Type               | Endpoint              | Send                                                       | Returns                                      |
| -------- | ------------------ | --------------------- | ---------------------------------------------------------- | -------------------------------------------- |
| GET      | get pet            | /:id/pet              | userID in the URL                                          | everything fed to the pet                    |
| POST     | submit pet feeding | /:id/pet              | userID in the URL and the feeding object                   | feeding object with the feedingID            |
| PUT      | modify pet feeding | /:id/pet/:feedingID   | userID and feedingID in the URL with the changed object    | changed feeding object                       |
| DELETE   | delete pet feeding | /:id/pet/:feedingID   | userID and feedingID in the URL                            | feeding array without the specified feeding  |


Pet feeding object:

|   Feeding     |
| ------------- |
| date_fed      |
| food_category |
| food_name     |
| food_amount   |

<!-- registration
{
    username: "
    password: "
    petname: "
}
{
    userID: 1
    username: "
    password: "
    petname: "
    token: "
}

POST /:id/pet
id is the userID
{
    date_fed: "
    food_category: "
    food_name: "
    food_amount: "
}

GET /:id/pet
id is the userId
[
    {   
        feedingID: 1
        date_fed: "
        food_category: "
        food_name: "
        food_amount: "
    }
]

PUT /:id/pet/:feedingID
id is the userId

DELETE /:id/pet/feedID
id is userID -->
