# Yuanjing React Demo
Link to preview it: [https://google-map-demo-yuanjing.herokuapp.com/](https://google-map-demo-yuanjing.herokuapp.com/)

## Deployment:
There are two subfolders under the repo root. Each of them is a web application, in order to deploy it ( to Heroku ). Follow below instruction:
1. cd to subfolder, for example "web"
```bash
    cd web
```

2. create an app on Heroku, if not yet. "google-map-demo-yuanjing" is the name for the app I will use:
```bash
    heroku create -a google-map-demo-yuanjing
```

3. add buildpacks that is needed for building the app:
```bash
    heroku buildpacks:add -a google-map-demo-yuanjing heroku-community/multi-procfile # move procfile to repo root
    heroku buildpacks:add -a google-map-demo-yuanjing https://github.com/timanovsky/subdir-heroku-buildpack # set subfolder path as root for the app
    heroku buildpacks:add -a google-map-demo-yuanjing heroku/nodejs  # add node environment since it is a node app (react / next)
```

4. set configuration for the app:
```bash
    heroku config:set -a google-map-demo-yuanjing PROCFILE=web/Procfile # specify the Procfile for this app
    heroku config:set -a google-map-demo-yuanjing PROJECT_PATH=web # set web folder as the root of the app
```

5. command for push and deploy the code:
```
    git push https://git.heroku.com/google-map-demo-yuanjing.git HEAD:master
```
