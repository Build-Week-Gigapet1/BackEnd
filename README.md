# GigaPet

## Endpoints

Base: https://gigapetbw4.herokuapp.com/api

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

<!-- | Method   | Type               | Endpoint                                 | Send                                           | Returns                    |
| -------- | ------------------ | ---------------------------------------- | ---------------------------------------------- | -------------------------- |
| POST     | Add Item           | /`:sellerId`/items                       | Item Info*                                     | Message, Item object       |
| PUT      | Update Item        | /items/`:itemId`                         | Item Info*                                     | Message, Item object       |
| DELETE   | Delete Item        | /items/`:itemId`                         | Item ID                                        | Message                    |

Item Info

- item_name - required
- description - required
- img_url - optional
- price - required
- item_end_time - required -->

