#!/usr/bin/env node
'use strict'

let userName = process.argv[2]
// console.log(userName);

if (!userName) {
  let appName = process.argv[1].split(require('path').sep).pop()
  console.error('Missing argument! Example: %s YOUR_NAME', appName)
  process.exit(1)
}

console.log('Hello %s', userName)
