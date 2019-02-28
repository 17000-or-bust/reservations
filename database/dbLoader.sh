#!/bin/bash
echo "# Resetting PostgreSQL schema...."
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=password /Library/PostgreSQL/11/bin/psql -U postgres < /Users/ecuyle/Documents/HackReactor/sdc/reservations/database/psql.sql
echo "# ----- END PostgreSQL Output -----"
echo "# Copying CSV data into Reservations database...."
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=password /Library/PostgreSQL/11/bin/psql -U postgres < /Users/ecuyle/Documents/HackReactor/sdc/reservations/database/loadPsql.sql
echo "# ----- END PostgreSQL Output -----"
