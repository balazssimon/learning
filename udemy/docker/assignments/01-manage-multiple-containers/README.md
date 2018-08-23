# Assignment: Manage Multiple Containers

* `docs.docker.com` and `--help` are your friend
* Run a `nginx`, a `mysql`, and a `httpd` (apache) server
* Run all of them `--detach` (or `-d`), name them with `--name`
* `nginx` should listen on `8000:80`, httpd on `8001:80`, mysql on `3306:3306`
* When running `mysql`, use the `--env` option (or `-e`) to pass in `MYSQL_RANDOM_ROOT_PASSWORD=yes`
* Use `docker container logs` on mysql to find the random password it created on startup
* Clean it all up with `docker container stop` and `docker container rm` (both can accept multiple names or ID's)
* Use `docker container ls` to ensure everything is correct before and after cleanup

# Solution

```
docker container run --publish 8000:80 --detach --name nginx nginx
docker container run --publish 8001:80 --detach --name httpd httpd
docker container run --publish 3306:3306 --detach --name mysql --env MYSQL_RANDOM_ROOT_PASSWORD=yes mysql

docker container ls -a

docker container logs mysql

docker container stop nginx httpd mysql
docker container rm nginx httpd mysql

docker container ls -a
```
