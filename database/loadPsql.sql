\copy restaurants FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/data/restaurants.csv' DELIMITERS ',' CSV;
\copy reservations FROM '/Users/ecuyle/Documents/HackReactor/sdc/reservations/data/reservations.csv' DELIMITERS ',' CSV;
CREATE INDEX restidindex ON reservations(restaurant_id);
