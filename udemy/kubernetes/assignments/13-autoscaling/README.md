# Autoscaling

To create an autoscaler on our “wordpress” deployment that targets CPU utilization to an average of 50% per Pod, within the parameters of a minimum of 1 pod and up to a maximum of 10 Pods:
```
kubectl autoscale deployment wordpress --cpu-percent=50 --min=1 --max=10
```

Artificially limit our Wordpress Pod so we can stress it easily:
```
kubectl apply -f ./wordpress-deployment.yaml
```

Add an HPA to enable auto-scaling on our WordPress installation to keep CPU at 50% average (or lower), with a minimum of 1 Pod and max of 5 Pods:
```
kubectl autoscale deployment wordpress --cpu-percent=50 --min=1 --max=5
```

Simulate load using an infinite HTTP request loop from a worker Pod on our cluster to WordPress to spike our CPU and see how HPA responds:
```
kubectl run -i --tty load-generator --image=busybox /bin/sh
while true; do wget -q -O- http://wordpress.default.svc.cluster.local; done
```

Check the HPA status (immediately and after about a minute):
```
kubectl get hpa
```
