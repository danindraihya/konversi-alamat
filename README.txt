Instruction :

1. Run mysql server (or you can use docker-compose with command "docker-compose up -d")
2. Create Database (you can import KonversiAlamat.sql (creating database with "KonversiAlamat" name))
3. Setting up .env depends on mysql server, example :
    DB_CONNECTION=mysql
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=root
    MYSQL_PASSWORD=root
    MYSQL_DB_NAME=KonversiAlamat (ensure database name match with step number 2)
4. Run migration with command "node ace migration:run"
5. Run seed with command "node ace db:seed"
6. Run server with command "node ace serve --watch"
7. You can login as (username: test, password: test) on /login to get JWT Token for accessing other REST API