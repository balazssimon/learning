# Namespaces, limiting resource usage

Commands:
```
kubectl create namespace cpu-limited-tomcat
kubectl get namespace
kubectl create -f ./cpu-limits.yaml --namespace=cpu-limited-tomcat
kubectl apply -f ./tomcat-deployment.yaml --namespace=cpu-limited-tomcat
kubectl describe deployment tomcat-deployment --namespace=cpu-limited-tomcat
```

