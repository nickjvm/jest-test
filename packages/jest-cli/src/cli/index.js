/**
 * Copyright (c) 2014, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import type {Path} from 'types/Config';

const args = require('./args');
const getJest = require('./getJest');
const getPackageRoot = require('jest-util').getPackageRoot;
const warnAboutUnrecognizedOptions = require('jest-util').warnAboutUnrecognizedOptions;
const yargs = require('yargs');

function run(argv?: Object, root?: Path) {
  argv = yargs(argv || process.argv.slice(2))
    .usage(args.usage)
    .help()
    .options(args.options)
    .check(args.check)
    .argv;

  const {config} = argv;
  // If the passed in value looks like JSON, treat it as an object.
  if (
    config &&
    typeof config === 'string' &&
    config[0] === '{' &&
    config[config.length - 1] === '}'
  ) {
    argv.config = JSON.parse(config);
  }

  warnAboutUnrecognizedOptions(argv, args.options);

  if (argv.help) {
    yargs.showHelp();
    process.on('exit', () => process.exit(1));
    return;
  }

  if (!root) {
    root = getPackageRoot();
  }
  getJest(root).runCLI(argv, root, success => {
    process.on('exit', () => process.exit(success ? 0 : 1));
  });
}

exports.run = run;
