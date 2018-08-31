# DNS: Wordpress with MySQL

Commands:
```
kubectl create secret generic mysql-pass --from-literal=password=mypass
kubectl get secret
kubectl apply -f ./mysql-deployment.yaml
kubectl apply -f ./wordpress-deployment.yaml
kubectl describe deployment wordpress-mysql
kubectl describe deployment wordpress
kubectl delete -f ./mysql-deployment.yaml
kubectl delete -f ./wordpress-deployment.yaml
```

