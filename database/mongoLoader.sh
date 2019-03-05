#!/bin/bash
echo -e "\n# -------------------------------------"
echo "# STARTING MONGO LOADING SEQUENCE"
echo "# -------------------------------------"

start=$(date +'%T')
SECONDS=0

echo "Dropping existing reservations db"
mongo reservations --eval "db.dropDatabase()"
echo -e "Success.\n"

echo -e  "\nAdding the following headers to reservations.csv:"
echo "id,restaurant_id,date,time"
sed -i '' $'1i\\\nid,restaurant_id,date,time\n' /Users/ecuyle/Documents/HackReactor/sdc/reservations/data/reservations.csv
echo -e "Success.\n"

echo -e "\nAdding the following headers to restaurants.csv:"
echo "id,max_party_size,max_days_to_book,has_rewards,time_slot_interval,start_hour,end_hour,bookings_today"
sed -i '' $'1i\\\nid,max_party_size,max_days_to_book,has_rewards,time_slot_interval,start_hour,end_hour,bookings_today\n' /Users/ecuyle/Documents/HackReactor/sdc/reservations/data/restaurants.csv
echo -e "Success.\n"

echo -e "\nStarting copying process at: $start"

echo "Copying restaurants.csv to restaurants collection..."
mongoimport -d reservations -c restaurants --type csv --file /Users/ecuyle/Documents/HackReactor/sdc/reservations/data/restaurants.csv --headerline
echo -e "Success."

echo "Indexing id column..."
mongo reservations --eval "db.restaurants.createIndex({ id: 1 })"
echo -e "Success.\n"

echo "Copying reservations.csv to reservations collection..."
mongoimport -d reservations -c reservations --type csv --file /Users/ecuyle/Documents/HackReactor/sdc/reservations/data/reservations.csv --headerline
echo -e "Success.\n"

echo "Indexing id column..."
mongo reservations --eval "db.reservations.createIndex({ id: 1 })"
echo -e "Success.\n"
echo "Indexing restaurant_id column..."
mongo reservations --eval "db.reservations.createIndex({ restaurant_id: 1 })"
echo -e "Success.\n"

echo "Removing CSV headers from reservations.csv && restaurants.csv"
sed 1d reservations.csv > reservations.csv.bak && mv reservations.csv.bak reservations.csv
sed 1d restaurants.csv > restaurants.csv.bak && mv restaurants.csv.bak restaurants.csv
echo -e "Success.\n"

end=$(date +'%T')
echo "Finished copying process at: $end"

duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo "# -------------------------------------"
echo "# FINISHED MONGO LOADING SEQUENCE"
echo "# -------------------------------------"

