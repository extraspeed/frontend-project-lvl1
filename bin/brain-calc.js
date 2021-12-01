#!/usr/bin/env node

import CalcGame from '../src/games/calc.js';
import gameInit from '../src/index.js';

gameInit(CalcGame, 'What is the result of the expression?');
