# Projet de session

## Description

UQAM

Cours : INM5151 - PROJET D'ANALYSE ET DE MODELISATION

Groupe : 30

## Auteurs

- MITESHBAI PATEL : PATM10119006
- WENFENG XING : XINW08058402
- SÉBASTIEN RICHER STÉBENNE : RICS21109001

## Mise en place du projet

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

### Détruire les tables

- "knex migrate:rollback --all"

### Créer un fichier pour populer les tables

- "knex seed:make [seed_name]"

### Rouler les scripts seed

- "knex seed:run"

### Kill processus sur le port 3000

- "netstat -ano|findstr "PID :3000""
- "taskkill /pid [pid] /f"

### Réinitialiser la bd

- "knex migrate:rollback && knex migrate:latest && knex seed:run"
