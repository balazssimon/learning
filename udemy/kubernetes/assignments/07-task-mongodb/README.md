# Task: MongoDB

Commands:
```
kubectl apply -f ./deployment.yaml
kubectl expose deployment mongodb-deployment --type=NodePort
kubectl scale --replicas=4 deployment/mongodb-deployment
kubectl describe deployment mongodb-deployment
```

## Without deployment file

```
kubectl run mongo-exercise-1 --image=mongo --port=27017
kubectl scale --replicas=4 deployment/mongo-exercise-1
kubectl describe deployment mongodb-deployment
```
