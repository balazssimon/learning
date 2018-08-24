# Dashboard UI

Installing:
```
kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
```

Accessing the dashboard:
```
kubectl proxy
```

In the browser:
```
http://localhost:8001/ui
```
