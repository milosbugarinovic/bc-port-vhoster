#!/usr/bin/env node
var fs = require('fs'),
    path = require('path'),
    findup = require('../lib/findup'),
    existsSync = fs.existsSync || path.existsSync,
    dir;

// Where might a locally-installed port-vhoster?
dir = path.resolve(findup(process.cwd(), 'bc-port-vhoster.js') || '', '../node_modules/bc-port-vhoster');

// If port-vhoster is installed locally, use it. Otherwise use this port-vhoster.
if (!existsSync(dir)) {
    dir = '../lib/bc-port-vhoster';
}

// Run port-vhoster!
require(dir).cli();
