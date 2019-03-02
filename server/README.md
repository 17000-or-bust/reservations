# 17001 || BUST: Reservations API v1.0

## <a style="color: #333333">Table of Contents</a>
* [**Reservations.reservations**](#reservationsreservations)
    * [GET /api/reservations/:reservation_id](#get-apireservationsreservation_id)
    * [POST /api/reservations](#post-apireservations)
    * [PUT /api/reservations/:reservation_id](#put-apireservationsreservation_id)
    * [DELETE /api/reservations/:reservation_id](#delete-apireservationsreservation_id)
* [**Reservations.restaurants**](#reservationsrestaurants)
    * [GET /api/restaurants/:restaurant_id](#get-apirestaurantsrestaurant_id)
    * [POST /api/restaurants](#post-apirestaurants)
    * [PUT /api/restaurants/:restaurant_id](#put-apirestaurantsrestaurant_id)
    * [DELETE /api/restaurants/:restaurant_id](#delete-apirestaurantsrestaurant_id)
* [**Change History**](#change-history)
<hr>

## Reservations.reservations
### `GET /api/reservations/:reservation_id`
Returns a `{ Reservation }` at a given reservation id.

**URL Params**
  * `reservation_id` _(Number)_ : ID of the reservation to retrieve all relevant details

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ Reservation }` conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`id`             |Number  |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `POST /api/reservations`
Returns the `id` of the reservation created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |

**Success Response:**
  * **Status Code:** 201 Created
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `PUT /api/reservations/:reservation_id`
Returns the `id` of the reservation edited in the database.

**URL Params**
  * `reservation_id` _(Number)_ : ID of the reservation to update

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `DELETE /api/reservations/:reservation_id`
Returns the `{ Reservation }` deleted from the database.

**URL Params**
  * `reservation_id` _(Number)_ : ID of the reservation to delete

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ Reservation }` conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`id`             |Number  |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>

## Reservations.restaurants
### `GET /api/restaurants/:restaurant_id`
Returns a `{ Restaurant }` at a given restaurant id.

**URL Params**
  * `restaurant_id` _(Number)_ : ID of the restaurant to retrieve all relevant details

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ Restaurant }` conforming to the following format:

  |Key                    |Type     |
  |:--------------------- |:------- |
  |`id`                   |Number   |
  |`max_party_size`       |Number   |
  |`max_days_to_book`     |Number   |
  |`has_rewards`          |Boolean  |
  |`time_slot_interval`   |Date     |
  |`start_hour`           |Date     |
  |`end_hour`             |Date     |
  |`bookings_today`       |Number   |
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `POST /api/restaurants`
Returns the `id` of the restaurant created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key                    |Type     |
  |:--------------------- |:------- |
  |`max_party_size`       |Number   |
  |`max_days_to_book`     |Number   |
  |`has_rewards`          |Boolean  |
  |`time_slot_interval`   |Date     |
  |`start_hour`           |Date     |
  |`end_hour`             |Date     |
  |`bookings_today`       |Number   |

**Success Response:**
  * **Status Code:** 201 Created
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `PUT /api/restaurants/:restaurant_id`
Returns the `id` of the restaurant edited in the database.

**URL Params**
  * `restaurant_id` _(Number)_ : ID of the restaurant to update

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key                    |Type     |
  |:--------------------- |:------- |
  |`max_party_size`       |Number   |
  |`max_days_to_book`     |Number   |
  |`has_rewards`          |Boolean  |
  |`time_slot_interval`   |Date     |
  |`start_hour`           |Date     |
  |`end_hour`             |Date     |
  |`bookings_today`       |Number   |

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `DELETE /api/restaurants/:restaurant_id`
Returns the `{ Restaurant }` deleted from the database.

**URL Params**
  * `restaurant_id` _(Number)_ : ID of the restaurant to delete

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ Restaurant }` conforming to the following format:

  |Key                    |Type     |
  |:--------------------- |:------- |
  |`id`                   |Number   |
  |`max_party_size`       |Number   |
  |`max_days_to_book`     |Number   |
  |`has_rewards`          |Boolean  |
  |`time_slot_interval`   |Date     |
  |`start_hour`           |Date     |
  |`end_hour`             |Date     |
  |`bookings_today`       |Number   |
 
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>

## Change History
|Name                                 |Version    |Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description     |
|:----------------------------------- |:--------- |:--------- |:------- |
|[@ecuyle](https://github.com/ecuyle) |1.0        |2019-02-27 |Document initial API CRUD routes for relevant models in the `Reservations` microservice.