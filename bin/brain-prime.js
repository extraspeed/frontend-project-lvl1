#!/usr/bin/env node

import PrimeGame from '../src/games/prime.js';
import gameInit from '../src/index.js';

gameInit(PrimeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
