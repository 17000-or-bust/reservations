#!/bin/bash
pgExec() {
  TO_EXEC=$1
  PGPASSWORD=password /Library/PostgreSQL/11/bin/psql -U postgres -d reservations -c "$TO_EXEC"
}

pgAnalyze() {
  TO_ANALYZE=$1
  PGPASSWORD=password /Library/PostgreSQL/11/bin/psql -U postgres -d reservations -c "EXPLAIN ANALYZE $TO_ANALYZE"
}

runPGTest()
{
  CMD=$1
  echo -e "\n----------------------------------------------------------"
  echo "### TEST: $CMD"
  echo "----------------------------------------------------------"
  pgExec "DISCARD PLANS"
  pgAnalyze "$CMD"
}

echo -e "\n# -------------------------------------"
echo "# STARTING POSTGRESQL BENCHMARK SEQUENCE"
echo "# -------------------------------------"
start=$(date +'%T')
echo -e "Starting benchmarking at: $start\n"
SECONDS=0

# Writes
pgExec "DELETE FROM reservations WHERE id=10000000"
pgExec "DELETE FROM restaurants WHERE id=10000000"
runPGTest "INSERT INTO restaurants (id, max_party_size, max_days_to_book, has_rewards, time_slot_interval, start_hour, end_hour, bookings_today) VALUES (10000000, 16, 78, true, '00:30:00', '6:00', '15:00', 98)"
runPGTest "INSERT INTO reservations (id, restaurant_id, date, time) VALUES (10000000, 7801117, '2019-03-10',  '0:00')"

# Reads
runPGTest "SELECT * FROM reservations WHERE id=10000000"
runPGTest "SELECT * FROM restaurants WHERE id=10000000"

# Updates
runPGTest "UPDATE reservations SET restaurant_id=3, date='2019-02-26', time='18:00' WHERE id=10000000"
runPGTest "UPDATE restaurants SET max_party_size=5, max_days_to_book=82, has_rewards=true, time_slot_interval='00:30:00', start_hour='6:00', end_hour='18:00', bookings_today=18 WHERE id=10000000"

# Deletes
runPGTest "DELETE FROM reservations WHERE id=10000000"
runPGTest "DELETE FROM restaurants WHERE id=10000000"

duration=$SECONDS
end=$(date +'%T')
echo -e "\nFinished benchmarking at: $end"
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo -e "\n# -------------------------------------"
echo "# FINISHED POSTGRESQL BENCHMARK SEQUENCE"
echo "# -------------------------------------"
