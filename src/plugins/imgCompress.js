import { getImgFullPath } from '@/utils';

const canUseWebp = () => navigator.userAgent.toLowerCase().includes('chrome');
const postfix = `?x-oss-process=image/resize,l_4096,quality,Q_50/format,${
  canUseWebp() ? 'webp' : 'jpg'
}`;

const imgCompress = url => {
  const path = getImgFullPath(url);
  if (/^https?:\/\/res[^.]+.shiguangkey.com/.test(path) && !/(\.gif)|\?/i.test(path)) {
    return {
      full: path,
      compress: path + postfix,
    };
  }
  return {
    full: path,
    compress: path,
  };
};

const install = Vue => {
  Object.defineProperty(Vue.prototype, '$imgCompress', {
    value: imgCompress,
  });
};

export default { install };
