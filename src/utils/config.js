import { isOpenInPc } from './index';

const MAX_WIDTH = 550; // h5屏幕最大宽度
const IS_PC = isOpenInPc();

export { MAX_WIDTH, IS_PC };
