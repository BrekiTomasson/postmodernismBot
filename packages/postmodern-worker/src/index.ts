/**
 * Welcome to the postmodernismBot, an excercise in naturaal language
 * processing and (pseudo-)artificial intelligence, written by Breki
 * Tomasson mainly as a way to try out a couple of theories and to
 * get more comfortable writing code in Node.
 *
 * This is still very much version 0.0.0, so expect no miracles here.
 *
 * This file just gets us started. The real magic starts happening
 * over in worker.js.
 */

import debug from 'debug';
import { Worker } from './worker';

if (process.env.DEBUG === 'true') {
  debug.enable('*');
  debug('Worker')('### Launching the worker!');
}

const worker = (new Worker).init();
