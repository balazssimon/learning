# Install kubectl

Download kubectl.exe from:
```
https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG.md#client-binaries
```

Copy it into:
```
m:\HyperV\Minikube
```

Add this folder to the PATH.

# Install minikube

Download minikube from:
```
https://github.com/kubernetes/minikube/releases
```
Download the minikube-windows-amd64.exe file, rename it to minikube.exe and add it to your path.

Copy it into:
```
m:\HyperV\Minikube
```

Then follow these steps:
* Open the Hyper-V Manager.
* Once in the Hyper-V Manager, on the right panel, select the Virtual Switch Manager.
* Next we will create a virtual switch for minikube. Select New virtual network switch on the right hand side, select External for the network type, and then press the Create Virtual Switch button.
* Name the switch ```MinikubeNET``` and click the apply button.
* Once you have the switch created we are now ready to start minikube.

Set MINIKUBE_HOME change the location of the virtual hard disk:
```
MINIKUBE_HOME=m:\HyperV\Minikube
```
Make sure to run the minikube.exe from the ```m``` drive!!!

# Testing

Make sure to run the minikube.exe from the ```m``` drive!!!

```
minikube start --vm-driver hyperv --hyperv-virtual-switch "MinikubeNET"
kubectl run hello-minikube --image=gcr.io/google_containers/echoserver:1.4 --port=8080
kubectl expose deployment hello-minikube  --type=NodePort
kubectl get services
kubectl get pod
curl $(minikube service hello-minikube --url)
kubectl delete deployment hello-minikube
minikube stop
```




