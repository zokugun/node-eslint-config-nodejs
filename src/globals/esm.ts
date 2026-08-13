import { Globals } from '../types.js';
import { es2021 } from './es2021.js';
import { node } from './node.js';

export const esm: Globals = {
	...es2021,
	...node,
	__dirname: 'off',
	__filename: 'off',
	exports: 'off',
	module: 'off',
	require: 'off',
};
