/**
 * 页面交互：提示、加载以及对话框
 */
import { Toast as VanToast, Dialog as VanDialog } from 'vant';

/**
 * 轻提示
 * @param {object|string} options 参数
 * @param {string} options.title 提示文字内容，必填
 * @param {string} options.type 提示类型，可选，值为'text'、'loading'、'success'之一
 * @param {boolean} options.mask 是否展示背景遮罩，可选
 * @param {number} options.duration 提示显示时长，可选
 */
function Toast(options) {
  const { title, type, mask, duration } = {
    ...Toast.default,
    ...(options instanceof Object ? options : { title: options }),
  };
  if (!title) {
    throw new TypeError("'opts.title' should be a string instead of undefined");
  }
  VanToast({
    message: title,
    forbidClick: true,
    mask,
    type,
    duration,
  });
}
Toast.default = {
  title: '',
  type: 'text', // text/loading/success
  mask: false,
  duration: 3000,
};

/**
 * 加载提示
 * @param {object|string} options 参数，同Toast
 */
function Loading(options = Loading.default) {
  const { title, mask } = {
    ...Loading.default,
    ...(options instanceof Object ? options : { title: options }),
  };
  if (!title) {
    throw new TypeError("'opts.title' should be a string instead of undefined");
  }
  VanToast({
    message: title,
    mask,
    type: 'loading',
    duration: 0,
    loadingType: 'spinner',
  });
}
Loading.default = {
  title: '加载中',
  mask: true,
};
Loading.close = VanToast.clear;

/**
 * 确认提示
 * @param {object} options 参数
 * @param {string} options.title 标题文本
 * @param {string} options.content 提示文本
 * @param {boolean} options.showCancel 是否展示取消按钮
 * @param {string} options.cancelText 取消按钮文本
 * @param {boolean} options.showConfirm 是否展示确认按钮
 * @param {string} options.confirmText 确认按钮文本
 */
const Dialog = options => {
  const mergeOpt = { ...Dialog.default, ...options };
  const { title, content, showCancel, showConfirm, cancelText, confirmText } = mergeOpt;
  if (!content) {
    throw new TypeError("'opts.content' should be a string instead of undefined");
  }
  return VanDialog.confirm({
    title,
    message: content,
    showCancelButton: showCancel,
    showConfirmButton: showConfirm,
    cancelButtonText: cancelText,
    confirmButtonText: confirmText,
  });
};
Dialog.default = {
  title: '提示',
  content: '',
  showCancel: false,
  showConfirm: true,
  cancelText: '取消',
  confirmText: '确定',
};
Dialog.close = VanDialog.close;

const install = Vue => {
  Object.assign(Vue.prototype, {
    $toast: Toast,
    $loading: Loading,
    $dialog: Dialog,
  });
};

export { Toast, Loading, Dialog };
export default {
  install,
};
