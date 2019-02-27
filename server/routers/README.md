<h1 style="margin-bottom: 0px">17001 || BUST</h1>
<h2 style="margin-top: 0px; color: #333333">Reservations API <span style="color: #636363; font-size: 24px">v1.0</span></h2>
<hr>

##<a style="color: #333333">Table of Contents</a>
* [**Reservations.reservations**](#res)
    * [GET /api/reservations/:reservation_id](#getRes)
    * [POST /api/reservations](#postRes)
    * [PUT /api/reservations/:reservation_id](#putRes)
    * [DELETE /api/reservations/:reservation_id](#delRes)
* [**Reservations.restaurants**](#rest)
    * [GET /api/restaurants/:restaurant_id](#getRest)
    * [POST /api/restaurants](#postRest)
    * [PUT /api/restaurants/:restaurant_id](#putRest)
    * [DELETE /api/restaurants/:restaurant_id](#delRest)
* [**Change History**](#changeHistory)
<hr>

##<a name="res" style="color: #333333" href="#">Reservations.reservations</a>
###<a name="getRes" href="#">`GET /api/reservations/:reservation_id`</a>
Returns a `{ Reservation }` at a given reservation id.

**URL Params**
  * `reservation_id` _(Number)_ : ID of the reservation to retrieve all relevant details

**Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Reservation }` conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`id`             |Number  |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<br>
###<a name="postRes" href="#">`POST /api/reservations`</a>
Returns the `id` of the reservation created in the database.

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<br>
###<a name="putRes" href="#">`PUT /api/reservations/:reservation_id`</a>
Returns the `id` of the reservation edited in the database.

**URL Params**
  * `reservation_id` _(Number)_ : ID of the reservation to update

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`id`             |Number  |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<br>
###<a name="delRes" href="#">`DELETE /api/reservations/:reservation_id`</a>
Returns the `{ Reservation }` deleted from the database.

**URL Params**
  * `reservation_id` _(Number)_ : ID of the reservation to delete

**Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Reservation }` conforming to the following format:

  |Key              |Type    |
  |:--------------- |:------ |
  |`id`             |Number  |
  |`restaurant_id`  |Number  |
  |`date`           |Date    |
  |`time`           |Date    |
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>

##<a name="rest" style="color: #333333" href="#">Reservations.restaurants</a>
###<a name="getRest" href="#">`GET /api/restaurants/:restaurant_id`</a>
Returns a `{ Restaurant }` at a given restaurant id.

**URL Params**
  * `restaurant_id` _(Number)_ : ID of the restaurant to retrieve all relevant details

**Success Response:**
  * **Status Code:** 200
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
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<br>
###<a name="postRest" href="#">`POST /api/restaurants`</a>
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
  * **Status Code:** 201
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<br>
###<a name="putRest" href="#">`PUT /api/restaurants/:restaurant_id`</a>
Returns the `id` of the restaurant edited in the database.

**URL Params**
  * `restaurant_id` _(Number)_ : ID of the restaurant to update

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

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

**Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id: id (Number) }`
 
**Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<br>
###<a name="delRest" href="#">`DELETE /api/restaurants/:restaurant_id`</a>
Returns the `{ Restaurant }` deleted from the database.

**URL Params**
  * `restaurant_id` _(Number)_ : ID of the restaurant to delete

**Success Response:**
  * **Status Code:** 200
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
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>

##<a name="changeHistory" style="color: #333333" href="#">Change History</a>
|Name                                 |Version    |Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description     |
|:----------------------------------- |:--------- |:--------- |:------- |
|[@ecuyle](https://github.com/ecuyle) |1.0        |2019-02-27 |Document initial API CRUD routes for relevant models in the `Reservations` microservice.