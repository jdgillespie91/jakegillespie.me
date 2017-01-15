#!/bin/bash


set -e
set -x


function dev {
    npm install
    npm start
}


function prod {
    # TODO I need to determine a sensible deployment pattern for react apps.
    npm run build
    npm install -g pushstate-server
    pushstate-server build
}


function main {
    case "$1" in
        dev ) dev ;;
        prod ) prod ;;
    esac
}


main $1
