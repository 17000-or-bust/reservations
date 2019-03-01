\copy restaurants FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/data/restaurants.csv' DELIMITERS ',' CSV;
\copy reservations FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/data/reservations.csv' DELIMITERS ',' CSV;
ALTER TABLE reservations ADD CONSTRAINT fk_restaurant_id FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);
