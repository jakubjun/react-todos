#!/bin/bash
echo -n Password: 
read -s password
echo

npx supabase gen types typescript --db-url="postgres://postgres:${password}@db.vjlqndnvprlsqvwkzxvv.supabase.co:6543/postgres" > lib/database.types.ts
