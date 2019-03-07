\copy restaurants (max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/data/restaurants.csv' DELIMITERS ',' CSV;
\copy reservations (restaurant_id, date, time) FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/data/reservations.csv' DELIMITERS ',' CSV;
CREATE INDEX restidindex ON reservations(restaurant_id);
