# Assignment: Bind Mounts

* Use a Jekyll "Static Site Generator" to start a local web server
* Don't have to be web developer: this is example of bridging the gap between local file access and apps running in containers
* Source code is in the course repo under `bindmount-sample-1`
* We edit files with editor on our host using native tools
* Container detects changes with host files and updates web server
* Start container with `docker run -p 8080:4000 -v $(pwd):/site bretfisher/jekyll-serve`
* Refresh our browser to see changes
* Change the file in `_posts\` and refresh browser to see changes

# Solution

```
docker run --rm -d -p 8080:4000 -v ${PWD}\bindmount-sample-1:/site --name 06-jekyll bretfisher/jekyll-serve

docker container logs -f 06-jekyll

docker container stop 06-jekyll
```
