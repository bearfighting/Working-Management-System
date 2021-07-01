#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    create schema myschema;

    CREATE TABLE myschema.ctc_contact (
        ctc_id serial PRIMARY KEY,
        ctc_nom VARCHAR ( 50 ) UNIQUE NOT NULL,
        ctc_prenom VARCHAR ( 50 ) NOT NULL,
        gct_id serial REFERENCES gtc_gestion_contact (gtc_id),
        created_on TIMESTAMP NOT NULL,
            last_login TIMESTAMP
    );
EOSQL