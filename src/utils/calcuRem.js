import { MAX_WIDTH } from './config';
/**
 * h5计算根元素字体大小
 */
const resizeEvt = 'resize';
const RATIO = 10;
const BASE_SIZE = MAX_WIDTH / RATIO;
const SYS = 10;

/**
 * 为了解决部分安卓机上rem计算错误导致不正常的问题
 * body按正常计算出来的宽度不对
 * 按body的异常比例跟fontSize做计算得到一个新的比例
 */
const fixFontSize = () => {
  const html = document.documentElement;
  const { body } = document;
  const bodyW = body.style.width;
  body.style.width = `${RATIO}rem`;
  const bodyWidth = parseInt(window.getComputedStyle(body, null).width, SYS);
  const htmlWidth = parseInt(window.getComputedStyle(html, null).width, SYS);
  if (bodyWidth !== htmlWidth) {
    const size = (parseInt(html.style.fontSize, SYS) * htmlWidth) / bodyWidth;
    html.style.fontSize = `${size}px`;
  }
  body.style.width = bodyW;
};
const recalc = () => {
  const docEl = document.documentElement;
  const { clientWidth } = docEl;
  if (!clientWidth) return;
  if (clientWidth >= MAX_WIDTH) {
    docEl.style.fontSize = `${BASE_SIZE}px`;
  } else {
    docEl.style.fontSize = `${BASE_SIZE * (clientWidth / MAX_WIDTH)}px`;
    fixFontSize();
  }
};

export default function calcuH5FontSize() {
  window.addEventListener(resizeEvt, recalc);
  window.addEventListener('pageshow', recalc);
  recalc();
}
