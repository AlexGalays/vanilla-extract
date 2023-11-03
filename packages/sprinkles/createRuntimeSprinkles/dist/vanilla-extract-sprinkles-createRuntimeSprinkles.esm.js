import { c as createSprinkles$1 } from '../../dist/createSprinkles-7f3467a3.esm.js';
import '@vanilla-extract/css';

var composeStyles = classList => classList;
var createSprinkles = function createSprinkles() {
  return createSprinkles$1(composeStyles)(...arguments);
};

/** @deprecated - Use `createSprinkles` */
var createAtomsFn = createSprinkles;

export { createAtomsFn, createSprinkles };
