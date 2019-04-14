#!/usr/bin/env bash

if [[ "$1" = "android" ]]
then
    assets_dir_path="./android/app/src/main/assets"

    if [[ ! -d "$assets_dir_path" ]]
    then
        mkdir "$assets_dir_path"
    fi

    cp -r ./www/ "$assets_dir_path/www"

    exit 0;
elif [[ "$1" = "ios" ]]
then
    echo "No db placement script written for IOS build"
    exit 1;
elif [[ -z "$1" ]]
then
    echo "No parameters found"
    exit 1;
elif [[ -n "$1" ]]
then
    echo "Unknown parameter"
    exit 1;
fi
