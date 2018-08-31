# DNS: Wordpress with MySQL

Commands:
```
kubectl create -f ./local-volumes.yaml
kubectl get persistentvolumes
kubectl apply -f ./mysql-deployment.yaml
kubectl apply -f ./wordpress-deployment.yaml
kubectl get pods
kubectl get services
kubectl delete -f ./mysql-deployment.yaml
kubectl delete -f ./wordpress-deployment.yaml
```

