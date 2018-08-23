# Assignment: Writing A Compose File

* Build a basic compose file for a Drupal content management system website. Docker Hub is your friend
* Use the `drupal` image along with the `postgres` image
* Use `ports` to expose Drupal on `8080` so you can `localhost:8080`
* Be sure to set `POSTGRES_PASSWORD` for postgres
* Walk though Drupal setup via browser
* Tip: Drupal assumes DB is `localhost`, but it's service name
* Extra Credit: Use `volumes` to store Drupal unique data

# Solution

```
docker-compose up
```

Open `localhost:8080` in a browser:
* Database name: postgres
* Database username: postgres
* Database password: mypass
* Advanced options
** Host: database

```
docker-compose down
```
