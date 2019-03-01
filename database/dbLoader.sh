#!/bin/bash
echo -e "\n# -------------------------------------"
echo "# STARTING POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
echo "# Resetting PostgreSQL schema...."
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=password /Library/PostgreSQL/11/bin/psql -U postgres < /Users/ecuyle/Documents/HackReactor/sdc/reservations/database/psql.sql
echo "# ----- END PostgreSQL Output -----"
echo "# Copying CSV data into Reservations database...."
start=$(date +'%T')
SECONDS=0
echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=password /Library/PostgreSQL/11/bin/psql -U postgres < /Users/ecuyle/Documents/HackReactor/sdc/reservations/database/loadPsql.sql
echo "# ----- END PostgreSQL Output -----"
end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo "# -------------------------------------"
echo "# FINISHED POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
mongo --eval "use reservations"
echo -e "\n# -------------------------------------"
echo "# STARTING MONGO LOADING SEQUENCE"
echo "# -------------------------------------"

echo "# -------------------------------------"
echo "# FINISHED MONGO LOADING SEQUENCE"
echo "# -------------------------------------"