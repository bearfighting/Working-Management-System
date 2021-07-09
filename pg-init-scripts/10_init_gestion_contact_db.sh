#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    create schema myschema;

    CREATE TABLE myschema.gtc_gestion_contact (
        gct_id serial PRIMARY KEY,
        gct_titre VARCHAR ( 22 ) NOT NULL
        gtc_bg_couleur VARCHAR ( 9 ) NOT NULL
        user_id serial REFERENCES accounts (user_id),
        created_on TIMESTAMP NOT NULL,
            last_login TIMESTAMP
    );
EOSQL