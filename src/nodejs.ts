import { Configurator } from '@zokugun/eslint-toolkit';
import { cjs } from './globals/cjs.js';
import { esm } from './globals/esm.js';

export function nodejs(): Configurator {
	return (resolve, register) => {
		register('javascript/globals/cjs', cjs);
		register('javascript/globals/esm', esm);
		register('javascript/globals/default', resolve('isModule') ? esm : cjs);

		return undefined;
	};
}
