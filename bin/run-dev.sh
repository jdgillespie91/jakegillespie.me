#!/bin/bash

docker run \
    -d \
    -p 8005:3000 \
    -v $PWD:/workspace \
    -w /workspace \
    --entrypoint /workspace/bin/entrypoint.sh \
    --name fe-dev \
    node:boron \
    dev
