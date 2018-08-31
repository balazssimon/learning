# Task: Ghost server with persistent volume and autoscaling

## Description

* Set up a deployment of the “Ghost” open-source publishing platform that maintains its data across restarts of the container (or minikube)
* For extra credit & challenge, set up the deployment to scale when CPU usage is high in the deployment

## Solution

```
kubectl apply -f ./local-volume.yaml
kubectl apply -f ./deployment.yaml
kubectl expose deployment ghost-deployment --type=NodePort
kubectl get deployment
kubectl describe deployment ghost-deployment

kubectl autoscale deployment ghost-deployment --cpu-percent=50 --min=1 --max=5

kubectl delete -f ./deployment.yaml
kubectl delete -f ./local-volume.yaml
```
