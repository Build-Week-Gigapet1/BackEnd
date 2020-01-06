# GigaPet

## Endpoints

Base: https://gigapetbw4.herokuapp.com/api

### Auth Routes

| Method | Type     | Endpoint        | Send                                | Returns                                                                               |
| ------ | -------- | --------------- | ----------------------------------- | ------------------------------------------------------------------------------------- |
| POST   | Register | /auth/register/ | See below                           | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data.newUser` |
| POST   | Login    | /auth/login/    | JSON with "username" and "password" | Message: `res.data.message`, Token: `res.data.token`, User object: `res.data.user`    |

Registration info:


| username (unique) |
| password          |

## Restricted Routes

*Token must be sent to access*

<!-- | Method   | Type               | Endpoint                                 | Send                                           | Returns                    |
| -------- | ------------------ | ---------------------------------------- | ---------------------------------------------- | -------------------------- |
| Items    |                    |                                          |                                                |                            |
| POST     | Add Item           | /`:sellerId`/items                       | Item Info*                                     | Message, Item object       |
| PUT      | Update Item        | /items/`:itemId`                         | Item Info*                                     | Message, Item object       |
| DELETE   | Delete Item        | /items/`:itemId`                         | Item ID                                        | Message                    |
| Auctions |                    |                                          |                                                |                            |
| Post     | Add Auction        | /`:sellerId`/`:itemId`/auctions          | Seller ID, Item ID, auction_start, auction_end | message, newAuction object |
| PUT      | Update auction_end | /auctions/`auctionId`                    | Auction ID, auction_end                        | Message                    |
| Delete   | Delete Auction     | /auctions/`:auctionId`                   | Auction ID                                     | Message                    |
| Users    |                    |                                          |                                                |                            |
| DELETE   | Removes User       | /api/sellers/`:id` or /api/bidders/`:id` | ID                                             | Message                    |

Item Info

- item_name - required
- description - required
- img_url - optional
- price - required
- item_end_time - required -->

