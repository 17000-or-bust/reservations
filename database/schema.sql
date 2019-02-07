-- CREATE DATABASE reservations;
USE reservations;


CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  max_party_size INT,
  max_days_to_book INT,
  has_rewards BOOLEAN,
  time_slot_interval TIME,
  start_hour TIME,
  end_hour TIME,
  bookings_today INT
);

CREATE TABLE reservations (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  restaurant_id INT,
  date DATE,
  time TIME,
  party_size INT,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);