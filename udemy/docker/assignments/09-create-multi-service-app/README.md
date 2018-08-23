# Assignment: Create A Multi-Service Multi-Node Web App

## Goal: create networks, volumes, and services for a web-based "cats vs. dogs" voting app.

- See architecture.png in this directory for a basic diagram of how the 5 services will work
- All images are on Docker Hub, so you should use editor to craft your commands locally, then paste them into swarm shell (at least that's how I'd do it)
- a `backend` and `frontend` overlay network are needed. Nothing different about them other then that backend will help protect database from the voting web app. (similar to how a VLAN setup might be in traditional architecture)
- The database server should use a named volume for preserving data. Use the new `--mount` format to do this: `--mount type=volume,source=db-data,target=/var/lib/postgresql/data`

### Services (names below should be service names)

- vote
    - dockersamples/examplevotingapp_vote:before
    - web front end for users to vote dog/cat
    - ideally published on TCP 80. Container listens on 80
    - on frontend network
    - 2+ replicas of this container

- redis
    - redis:3.2
    - key/value storage for incoming votes
    - no public ports
    - on frontend network
    - 1 replica NOTE VIDEO SAYS TWO BUT ONLY ONE NEEDED

- worker
    - dockersamples/examplevotingapp_worker
    - backend processor of redis and storing results in postgres
    - no public ports
    - on frontend and backend networks
    - 1 replica

- db
    - postgres:9.4
    - one named volume needed, pointing to /var/lib/postgresql/data
    - on backend network
    - 1 replica

- result
    - dockersamples/examplevotingapp_result:before
    - web app that shows results
    - runs on high port since just for admins (lets imagine)
    - so run on a high port of your choosing (I choose 5001), container listens on 80
    - on backend network
    - 1 replica

# Solution

node1:
```
docker swarm init
  Error response from daemon: could not choose an IP address to advertise since this system has multiple addresses on different interfaces (172.18.0.46 on eth1 and 192.168.0.18 on eth0) - specify one with --advertise-addr
docker swarm init --advertise-addr 172.18.0.46
docker swarm join-token manager
  To add a manager to this swarm, run the following command:
    docker swarm join --token SWMTKN-1-2l5ynohm2sir0ai4vxbpq7rj5uhor7gb2zwc68axako3cih5jr-dxm9k4cmkxkwsf7db9fbe23rk 172.18.0.46:2377
```

node2:
```
docker swarm join --token SWMTKN-1-2l5ynohm2sir0ai4vxbpq7rj5uhor7gb2zwc68axako3cih5jr-dxm9k4cmkxkwsf7db9fbe23rk 172.18.0.46:2377
```

node3:
```
docker swarm join --token SWMTKN-1-2l5ynohm2sir0ai4vxbpq7rj5uhor7gb2zwc68axako3cih5jr-dxm9k4cmkxkwsf7db9fbe23rk 172.18.0.46:2377
```

node1:
```
docker network create --driver overlay backend
docker network create --driver overlay frontend

docker service create --name vote -p 80:80 --network frontend --replicas 2 dockersamples/examplevotingapp_vote:before
docker service create --name redis --network frontend --replicas 1 redis:3.2
docker service create --name worker --network frontend --network backend --replicas 1 dockersamples/examplevotingapp_worker
docker service create --name db --network backend --replicas 1 --mount type=volume,source=db-data,target=/var/lib/postgresql/data postgres:9.4
docker service create --name result -p 5001:80 --network backend --replicas 1 dockersamples/examplevotingapp_result:before

docker service ls
docker service logs worker

docker service rm vote redis worker db result
```
