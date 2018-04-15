#!/usr/bin/env bash
tsc
cp -r ./img/* dist
cp ./src/*.html dist
cp ./src/*.json dist

rm dist.zip
zip -r dist.zip dist >/dev/null
