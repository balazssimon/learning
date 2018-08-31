# Auditing

Run minikube with the custom Audit Policy:
```
cp ./audit-policy.yaml ~/.minikube/addons/audit-policy.yaml

minikube start  --extra-config=apiserver.Authorization.Mode=RBAC --extra-config=apiserver.Audit.LogOptions.Path=/var/logs/audit.log   --extra-config=apiserver.Audit.PolicyFile=/etc/kubernetes/addons/audit-policy.yaml

minikube ssh
$ sudo bash
$ cat /var/logs/audit.log | jq .
r```
