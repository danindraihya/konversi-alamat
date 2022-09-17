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
6. Run unit test with comman "node ace test" (OPTIONAL)
7. Run server with command "node ace serve --watch" 
8. You can login as (username: test, password: test) on /login to get JWT Token for accessing other REST API


REST API :

/register = for register user
-   parameter: username and password

/login = for login user
-   parameter: username and password

/logout = for logout user
-   parameter: -
-   need authentication with bearer token (JWT)

/getByID = for search address by id
-   parameter: id
-   need authentication with bearer token (JWT)

/getByKotaID = for search data kecamatan by kota_id
-   parameter: kota_id
-   need authentication with bearer token (JWT)
