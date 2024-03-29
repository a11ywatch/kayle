import constants from './constants';
import log from './log';

import AbstractVirtualNode from './base/virtual-node/abstract-virtual-node';
import SerialVirtualNode from './base/virtual-node/serial-virtual-node';
import VirtualNode from './base/virtual-node/virtual-node';
import cache from './base/cache';

import * as imports from './imports';

import configure from './public/configure';
import frameMessenger from './public/frame-messenger';
import getRules from './public/get-rules';
import load from './public/load';
import registerPlugin from './public/plugins';
import { hasReporter, getReporter, addReporter } from './public/reporter';
import reset from './public/reset';
import runRules from './public/run-rules';
import runVirtualRule from './public/run-virtual-rule';
import run from './public/run';
import finishRun from './public/finish-run';
import setup from './public/setup';

import noPassesReporter from './reporters/no-passes';
import rawEnvReporter from './reporters/raw-env';
import rawReporter from './reporters/raw';
import v2Reporter from './reporters/v2';

import * as commons from '../commons';
import * as utils from './utils';

axe.version = axe.version;
axe._selectorData = axe._selectorData;
axe._audit = axe._audit;
axe._memoizedFns = axe._memoizedFns || [];
axe._selectCache = axe._selectCache || [];
axe._tree = axe._tree;
axe._uuid = undefined;
axe.constants = constants;
axe.log = log;
axe.AbstractVirtualNode = AbstractVirtualNode;
axe.SerialVirtualNode = SerialVirtualNode;
axe.VirtualNode = VirtualNode;
axe._cache = cache;
axe.imports = imports;
axe.configure = configure;
axe.frameMessenger = frameMessenger;
axe.getRules = getRules;
axe._load = load;
axe.plugins = {};
axe.registerPlugin = registerPlugin;
axe.hasReporter = hasReporter;
axe.getReporter = getReporter;
axe.addReporter = addReporter;
axe.reset = reset;
axe._runRules = runRules;
axe.runVirtualRule = runVirtualRule;
axe.run = run;
axe.setup = setup;
axe.finishRun = finishRun;
axe.commons = commons;
axe.utils = utils;

axe.addReporter('no-passes', noPassesReporter);
axe.addReporter('rawEnv', rawEnvReporter);
axe.addReporter('raw', rawReporter);
axe.addReporter('v2', v2Reporter, true);
