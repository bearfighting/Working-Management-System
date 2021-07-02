# INM_5151

## Pour démarrer l'application en développement

- "docker-compose -f docker-compose.test.yml up -d" dans le dossier de INM_5151
- "npm install" et "zero" dans le dossier de wsm

## Pour démarrer l'application en production

- "docker-compose up --build -d" dans le dossier de INM_5151

## Pour migrer les tables de la base de donnée avec Knex

### Installer globalement knex
- "npm install -g knex"

### Create un fichier d'une nouvelle table pour migration
- "knex migrate:make [tablename]"

### Migrer les tables
- "knex migrate:latest"

### détruire les tables
- "knex migrate:rollback --all"

### Créer un fichier pour populer les tables
- "knex seed:make [seed_name]"

### Rouler les scripts seed
- "knex seed:run"

