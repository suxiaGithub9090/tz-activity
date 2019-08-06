/**
 * 请求域名
 * AUTH:  认证中心，管理登录注册以及用户信息的接口
 * STUDY: 学习平台，管理跟课程相关的接口3.
 * LIVE:  直播服务，管理跟直播课堂以及云信相关的接口
 * OPEN:  登录注册相关移（新认证中心），动端学习平台，从学习平台分离出来的课程相关接口
 * OSS:   阿里云oss地址，管理图片、js库、静态数据等
 */
const env = process.env.VUE_APP_EXEC_ENV;
const addon = env ? `-${env}` : '';

export const OSS = 'https://res.shiguangkey.com/';
export const ICON = `${OSS}res/h5/icons/`;
export const STUDY = `https://www${addon}.shiguangkey.com`;
export const OPEN = `https://open${addon}.shiguangkey.com`;
export const ATTEND = `https://attend${addon}.shiguangkey.com`;
export const STATIC = `https://res-static${addon}.shiguangkey.com`;
