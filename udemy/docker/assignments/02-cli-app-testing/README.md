# Assignment: CLI App Testing

* Use different Linux distro containers to check `curl` cli tool version
* Use two different terminal windows to start bash in both `centos:7` and `ubuntu:14.04`, using `-it`
* Learn the `docker container --rm` option so you can save cleanup
* Ensure `curl` is installed and on latest version for that distro
** ubuntu: `apt-get update && apt-get install curl`
** centos: `yum update curl`
* Check `curl --version`

# Solution

```
docker container run --name centos -it centos:7 bash
# yum update curl
# curl --version

docker container run --name ubuntu -it ubuntu:14.04 bash
# apt-get update
# apt-get install curl
# curl --version
```
