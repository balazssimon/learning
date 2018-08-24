# Scaling, replicas

Scaling an existing deployment:
```
kubectl scale --replicas=4 deployment/tomcat-deployment
kubectl get deployments
kubectl get pod

kubectl expose deployment tomcat-deployment --type=LoadBalancer --port 8080 --target-port=8080 --name tomcat-load-balancer
kubectl describe service tomcat-load-balancer
```

Find port next to `8080:<port>`, and type the following URL into a browser:
```
http://localhost:<port>/
```

Cleanup:

```
kubectl delete service tomcat-deployment
kubectl delete deployment tomcat-deployment
```
