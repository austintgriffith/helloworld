#!/bin/bash
startCommand="/usr/bin/npm start";
#local html directory
app="${PWD}/../../";
#remove existing container
docker rm -f "helloworld"
#run
docker run --name="helloworld" -p 55555:55555 -e startCommand="$startCommand" -v $app:/root/app -d helloworld
