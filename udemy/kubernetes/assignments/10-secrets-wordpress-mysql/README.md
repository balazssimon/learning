# Usage and resource monitoring

Deploying Heapster:
```
git clone https://github.com/kubernetes/heapster.git
cd heapster
kubectl create -f deploy/kube-config/influxdb/
```

These steps expose Grafana and InfluxDB via the api proxy, you can see them in your deployment by doing:
```
kubectl cluster-info
```
