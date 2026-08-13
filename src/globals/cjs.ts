import { Globals } from '../types.js';
import { es2021 } from './es2021.js';
import { node } from './node.js';

export const cjs: Globals = {
	...es2021,
	...node,
	__dirname: 'readonly',
	__filename: 'readonly',
	exports: 'writable',
	module: 'readonly',
	require: 'readonly',
};
