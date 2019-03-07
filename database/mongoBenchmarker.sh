#!/bin/bash
runMongoTest()
{
  COLLECTION=$1
  CMD=$2
  echo -e "\n----------------------------------------------------------"
  echo "### TEST: $CMD"
  echo "----------------------------------------------------------"
  mongo reservations --eval "db.$COLLECTION.getPlanCache().clear()"
  time mongo reservations --eval "$CMD" | grep "executionTimeMillis"
}

echo -e "\n# -------------------------------------"
echo "# STARTING MONGO BENCHMARK SEQUENCE"
echo "# -------------------------------------"
start=$(date +'%T')
echo -e "Starting benchmarking at: $start\n"
SECONDS=0

# Reads
runMongoTest reservations "db.reservations.find({ id: 9999999 }).explain('executionStats')"
runMongoTest restaurants "db.restaurants.find({ id: 9999999 }).explain('executionStats')"

# Writes
mongo reservations --eval "db.reservations.remove({ id: 10000000 })"
mongo restaurants --eval "db.restaurants.remove({ id: 10000000 })"
RESERVATION="id: 10000000, restaurant_id: 8521223, date: '2019-05-11', time: '14:00'"
RESTAURANT="id: 10000000, max_party_size: 7, max_days_to_book: 77, has_rewards: 1, time_slot_interval: '00:30:00', start_hour: '11:00', end_hour: '24:00', bookings_today: 83"
runMongoTest reservations "db.reservations.insertOne({ $RESERVATION })"
runMongoTest restaurants "db.restaurants.insertOne({ $RESTAURANT })"

# Updates
runMongoTest reservations "db.reservations.explain('executionStats').update({ id: 10000000 }, { restaurant_id: 1908, date: '2019-04-24', time: '12:00' })"
runMongoTest restaurants "db.restaurants.explain('executionStats').update({ id: 10000000 }, { max_party_size: 2, max_days_to_book: 84, has_rewards: 1, time_slot_interval: '00:30:00', start_hour: '10:00', end_hour: '22:00', bookings_today: 40 })"

# Deletes
runMongoTest reservations "db.reservations.explain('executionStats').remove({ id: 10000000 })"
runMongoTest restaurants "db.restaurants.explain('executionStats').remove({ id: 10000000 })"

duration=$SECONDS
end=$(date +'%T')
echo -e "\nFinished benchmarking at: $end"
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo -e "\n# -------------------------------------"
echo "# FINISHED MONGO BENCHMARK SEQUENCE"
echo "# -------------------------------------"
