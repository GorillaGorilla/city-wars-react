#!/bin/sh
if [[ $TRAVIS_BRANCH != "develop" ]] && [[ $TRAVIS_BRANCH != "master" ]] && echo $TRAVIS_TAG | grep -iqF v; then
    TARGET=PROD
    TARGET_SERVER=$PROD_SERVER
elif [[ $TRAVIS_BRANCH = "master" ]]; then
    TARGET=TEST
    TARGET_SERVER=$TEST_SERVER
elif [[ $TRAVIS_BRANCH = "develop" ]]; then
    TARGET=DEV
    TARGET_SERVER=$DEV_SERVER
else
   echo "Branch is not master or develop or a release so will not deploy"
fi

APP_NAME=$(echo "$APP_NAME" | tr '[:upper:]' '[:lower:]')
echo "Deploying $APP_NAME to AWS $TARGET server $TARGET_SERVER port $PORT"

rsync -r --quiet $TRAVIS_BUILD_DIR/$APP_NAME travis@$TARGET_SERVER:~/;
ssh travis@$TARGET_SERVER "docker pull nginx";
ssh travis@$TARGET_SERVER "docker build -t ${APP_NAME}_image -f $APP_NAME/Dockerfile --build-arg app_name=$APP_NAME ."
ssh travis@$TARGET_SERVER "docker rm -f $APP_NAME || true"
ssh travis@$TARGET_SERVER "docker run --name $APP_NAME -p $PORT:80 -d ${APP_NAME}_image"
ssh travis@$TARGET_SERVER "docker image prune -af";
