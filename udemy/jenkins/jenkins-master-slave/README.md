# Setup

Run:

```
docker-compose up

docker container exec -it jenkins-master-slave_jenkins-master_1 ssh-keygen -t rsa
docker cp jenkins-master-slave_jenkins-master_1:/var/jenkins_home/.ssh/id_rsa.pub authorized_keys

docker cp ./authorized_keys jenkins-master-slave_jenkins-slave1_1:/home/jenkins/.ssh/authorized_keys
docker container exec jenkins-master-slave_jenkins-slave1_1 chown -R jenkins:jenkins /home/jenkins/.ssh
docker container exec jenkins-master-slave_jenkins-slave1_1 chmod -R 755 /home/jenkins/.ssh

docker cp ./authorized_keys jenkins-master-slave_jenkins-slave2_1:/home/jenkins/.ssh/authorized_keys
docker container exec jenkins-master-slave_jenkins-slave2_1 chown jenkins:jenkins /home/jenkins/.ssh
docker container exec jenkins-master-slave_jenkins-slave2_1 chown jenkins:jenkins /home/jenkins/.ssh/authorized_keys

docker container exec -it jenkins-master-slave_jenkins-master_1 bash
$ ssh root@jenkins-master-slave_jenkins-slave1_1
$ ssh root@jenkins-master-slave_jenkins-slave2_1
```

# Teardown

Run:

```
docker-compose down
```





docker-compose down

$key = Get-Content master.pub
Write-Output "JENKINS_SLAVE_SSH_PUBKEY=$key" | Out-File jenkins-slave.env -Encoding Ascii
(manually remove the jenkins@... part from the end)

docker-compose up