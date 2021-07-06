#!/bin/bash

cat complaint.txt > index.js
echo -n "module.exports = " >> index.js;
cat config.json >> index.js
sed -i 's/^}$/};/' index.js
