#!/usr/bin/env bash
set -e

rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm dedupe
npm run build