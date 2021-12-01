#!/usr/bin/env node

import EvenGame from '../src/games/even.js';
import gameInit from '../src/index.js';

gameInit(EvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
