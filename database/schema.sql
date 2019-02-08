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

-- Seed restaurants with randomized data

INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 61, 0, '00:15:00', '17:00', '22:00', 60);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 74, 1, '00:15:00', '17:00', '22:00', 0);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 55, 0, '00:15:00', '17:00', '22:00', 106);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 50, 0, '00:30:00', '17:00', '22:00', 85);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (5, 38, 0, '00:30:00', '17:00', '22:00', 109);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (13, 64, 0, '00:30:00', '17:00', '22:00', 7);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 86, 1, '00:15:00', '17:00', '22:00', 5);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 38, 0, '00:30:00', '17:00', '22:00', 116);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 50, 1, '00:30:00', '17:00', '22:00', 98);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 53, 0, '00:15:00', '17:00', '22:00', 119);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 30, 0, '00:15:00', '17:00', '22:00', 138);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (15, 34, 1, '00:15:00', '17:00', '22:00', 14);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (18, 35, 0, '00:30:00', '17:00', '22:00', 3);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 18, 1, '00:30:00', '17:00', '22:00', 55);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (15, 46, 1, '00:15:00', '17:00', '22:00', 80);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 7, 1, '00:15:00', '17:00', '22:00', 72);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 28, 1, '00:30:00', '17:00', '22:00', 0);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (20, 75, 1, '00:15:00', '17:00', '22:00', 112);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 69, 0, '00:15:00', '17:00', '22:00', 41);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (7, 78, 0, '00:15:00', '17:00', '22:00', 82);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 34, 1, '00:30:00', '17:00', '22:00', 32);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 54, 0, '00:15:00', '17:00', '22:00', 20);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (4, 90, 1, '00:15:00', '17:00', '22:00', 78);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (18, 70, 0, '00:30:00', '17:00', '22:00', 71);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 50, 0, '00:15:00', '17:00', '22:00', 8);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (9, 72, 0, '00:30:00', '17:00', '22:00', 62);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (15, 59, 1, '00:30:00', '17:00', '22:00', 77);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 77, 0, '00:15:00', '17:00', '22:00', 11);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (6, 75, 0, '00:30:00', '17:00', '22:00', 97);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 23, 1, '00:15:00', '17:00', '22:00', 102);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 32, 0, '00:15:00', '17:00', '22:00', 62);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (13, 67, 0, '00:30:00', '17:00', '22:00', 143);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 7, 1, '00:15:00', '17:00', '22:00', 112);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (11, 19, 0, '00:15:00', '17:00', '22:00', 89);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 57, 0, '00:30:00', '17:00', '22:00', 59);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 60, 1, '00:15:00', '17:00', '22:00', 21);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 32, 1, '00:15:00', '17:00', '22:00', 32);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 73, 0, '00:15:00', '17:00', '22:00', 30);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 58, 1, '00:15:00', '17:00', '22:00', 12);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (9, 33, 0, '00:15:00', '17:00', '22:00', 18);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (7, 20, 1, '00:30:00', '17:00', '22:00', 57);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 26, 0, '00:30:00', '17:00', '22:00', 137);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 18, 0, '00:30:00', '17:00', '22:00', 38);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 58, 1, '00:15:00', '17:00', '22:00', 20);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 23, 0, '00:30:00', '17:00', '22:00', 33);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 79, 1, '00:30:00', '17:00', '22:00', 18);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (6, 59, 0, '00:15:00', '17:00', '22:00', 98);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 78, 1, '00:30:00', '17:00', '22:00', 107);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 49, 0, '00:30:00', '17:00', '22:00', 58);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 19, 1, '00:30:00', '17:00', '22:00', 114);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 53, 0, '00:15:00', '17:00', '22:00', 30);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (5, 22, 0, '00:30:00', '17:00', '22:00', 113);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (15, 38, 0, '00:15:00', '17:00', '22:00', 29);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (7, 80, 0, '00:30:00', '17:00', '22:00', 121);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 11, 0, '00:15:00', '17:00', '22:00', 100);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (7, 62, 1, '00:30:00', '17:00', '22:00', 94);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 21, 1, '00:15:00', '17:00', '22:00', 59);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 61, 0, '00:30:00', '17:00', '22:00', 68);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 39, 1, '00:30:00', '17:00', '22:00', 69);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (18, 69, 1, '00:30:00', '17:00', '22:00', 63);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 85, 0, '00:15:00', '17:00', '22:00', 39);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (6, 40, 1, '00:30:00', '17:00', '22:00', 95);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (5, 24, 0, '00:15:00', '17:00', '22:00', 80);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 35, 0, '00:30:00', '17:00', '22:00', 53);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 63, 0, '00:15:00', '17:00', '22:00', 84);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 69, 0, '00:30:00', '17:00', '22:00', 52);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (18, 83, 0, '00:15:00', '17:00', '22:00', 13);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (11, 21, 1, '00:15:00', '17:00', '22:00', 88);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (6, 83, 0, '00:30:00', '17:00', '22:00', 86);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (4, 11, 1, '00:15:00', '17:00', '22:00', 52);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (4, 62, 1, '00:15:00', '17:00', '22:00', 104);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 34, 0, '00:15:00', '17:00', '22:00', 107);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (20, 81, 0, '00:15:00', '17:00', '22:00', 126);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (8, 18, 0, '00:30:00', '17:00', '22:00', 131);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 60, 0, '00:15:00', '17:00', '22:00', 126);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (11, 40, 0, '00:15:00', '17:00', '22:00', 74);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 55, 0, '00:30:00', '17:00', '22:00', 42);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (5, 73, 1, '00:30:00', '17:00', '22:00', 106);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 33, 1, '00:15:00', '17:00', '22:00', 140);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (13, 48, 1, '00:15:00', '17:00', '22:00', 15);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (11, 43, 0, '00:15:00', '17:00', '22:00', 28);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10, 32, 1, '00:30:00', '17:00', '22:00', 47);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (7, 45, 1, '00:15:00', '17:00', '22:00', 89);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (11, 59, 1, '00:15:00', '17:00', '22:00', 88);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 13, 1, '00:30:00', '17:00', '22:00', 118);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (5, 48, 1, '00:30:00', '17:00', '22:00', 9);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (17, 26, 1, '00:15:00', '17:00', '22:00', 124);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (20, 86, 1, '00:30:00', '17:00', '22:00', 119);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (19, 59, 0, '00:15:00', '17:00', '22:00', 99);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (20, 90, 0, '00:15:00', '17:00', '22:00', 130);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 68, 0, '00:30:00', '17:00', '22:00', 2);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (6, 10, 1, '00:30:00', '17:00', '22:00', 134);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 40, 0, '00:15:00', '17:00', '22:00', 61);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (18, 19, 0, '00:30:00', '17:00', '22:00', 49);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (13, 67, 0, '00:30:00', '17:00', '22:00', 7);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (14, 26, 1, '00:30:00', '17:00', '22:00', 58);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (13, 18, 1, '00:30:00', '17:00', '22:00', 147);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (15, 18, 0, '00:15:00', '17:00', '22:00', 42);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (12, 81, 0, '00:15:00', '17:00', '22:00', 122);
INSERT INTO restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (16, 60, 1, '00:15:00', '17:00', '22:00', 91);

