\copy restaurants FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/database/restaurants.csv' DELIMITERS ',' CSV;
\copy reservations FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/database/reservations.csv' DELIMITERS ',' CSV;
ALTER TABLE reservations ADD CONSTRAINT fk_restaurant_id FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);
