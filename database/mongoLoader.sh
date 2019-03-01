#!/bin/bash
echo -e "\n# -------------------------------------"
echo "# STARTING MONGO LOADING SEQUENCE"
echo "# -------------------------------------"
mongo reservations --eval "db.dropDatabase()"
SECONDS=0
echo "Starting copying process at: $start"
mongoimport -d reservations -c restaurants --type csv --file /Users/ecuyle/Documents/HackReactor/sdc/reservations/data/restaurants.csv --headerline
mongo reservations --eval "db.restaurants.createIndex({ id: 1 })"
mongoimport -d reservations -c reservations --type csv --file /Users/ecuyle/Documents/HackReactor/sdc/reservations/data/reservations.csv --headerline
mongo reservations --eval "db.reservations.createIndex({ id: 1 })"
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo "# -------------------------------------"
echo "# FINISHED MONGO LOADING SEQUENCE"
echo "# -------------------------------------"