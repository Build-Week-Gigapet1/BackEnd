# GigaPet

## Endpoints

Base: https://gigapetbw4.herokuapp.com

### Auth Routes

| Method | Type     | Endpoint        | Send                                | Returns                                                                               |
| ------ | -------- | --------------- | ----------------------------------- | ------------------------------------------------------------------------------------- |
| POST   | Register | /auth/register/ | See below                           | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data.newUser` |
| POST   | Login    | /auth/login/    | JSON with "username" and "password" | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data.user`    |

Registration info:

| Required          |
| ----------------- |
| username (unique) |
| password          |

## Restricted Routes

*Token must be sent to access*

| Method   | Type               | Endpoint                                 | Send                                           | Returns                          |
| -------- | ------------------ | ---------------------------------------- | ---------------------------------------------- | -------------------------------- |
| GET      | get pet            | /users/pet                               | username of pet owner                          | pet name with anything fed to it |



