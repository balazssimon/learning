# Assignment: Named Volumes

* Database upgrade with containers
* Create a postgres container with named volume psql-data using version 9.6.1
* Use Docker Hub to learn `VOLUME` path and versions needed to run it
* Check logs, stop container
* Create a new postgres container with same named volume using 9.6.2
* Check logs to validate
* (this only works with patch versions, most SQL DB's require manual commands to upgrade DB's to major/minor versions, i.e. it's a DB limitation not a container one)

# Solution

```
docker image pull postgres:9.6.1
docker image pull postgres:9.6.2

docker volume create 05-postgres

docker container run --rm -d -v 05-postgres:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword --name postgres1 postgres:9.6.1

docker container logs -f postgres1
docker container inspect postgres1
docker container stop postgres1

docker container run --rm -d -v 05-postgres:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword --name postgres2 postgres:9.6.2

docker container logs -f postgres2
docker container inspect postgres2
docker container stop postgres2

docker volume ls
docker volume rm 05-postgres
```
