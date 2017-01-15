#!/bin/bash

docker run \
    -d \
    -p 8006:9000 \
    -v $PWD:/workspace \
    -w /workspace \
    --entrypoint /workspace/bin/entrypoint.sh \
    --name fe-prod \
    node:boron \
    prod
