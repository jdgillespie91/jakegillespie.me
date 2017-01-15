#!/bin/bash

docker run --rm -v $PWD:/workspace -w /workspace -p 3000 --entrypoint /workspace/bin/dev/entrypoint.sh node:boron
