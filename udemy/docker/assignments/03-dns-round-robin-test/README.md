# Assignment: DNS Round-Robin Test

* Ever since Docker Engine 1.11, we can have multiple containers on a created network respond to the same DNS address
* Create a new virtual network (default bridge driver)
* Create two containers from `elasticsearch:2` image
* Research and use `--net-alias search` when creating them to give them an additional DNS name to respond to
* Run `alpine nslookup search` with `--net` to see the two containers list for the same DNS name
* Run `centos curl -s search:9200` with `--net` multiple times until you see both "name" fields show

# Solution

```
docker network create net_rr

docker container run --detach --net net_rr --net-alias search elasticsearch:2
docker container run --detach --net net_rr --net-alias search elasticsearch:2

docker container run --rm --net net_rr alpine nslookup search

docker container run --rm --net net_rr centos curl -s search:9200
```
