/**
 * 请求域名
 * AUTH:  认证中心，管理登录注册以及用户信息的接口
 * STUDY: 学习平台，管理跟课程相关的接口3.
 * LIVE:  直播服务，管理跟直播课堂以及云信相关的接口
 * OPEN:  登录注册相关移（新认证中心），动端学习平台，从学习平台分离出来的课程相关接口
 * OSS:   阿里云oss地址，管理图片、js库、静态数据等
 */
const OSS = 'https://res.shiguangkey.com/';
const ICON = `${OSS}res/h5/icons/`;

export { OSS, ICON };

export default {
  dev: {
    // AUTH: 'https://auth2-dev.shiguangkey.com',
    // STUDY: 'https://www-dev.shiguangkey.com',
    // OPEN: 'https://open-dev.shiguangkey.com',
    // ATTEND: 'https://attend-dev.shiguangkey.com',
    // STATIC: 'https://res-static-dev.shiguangkey.com/',
    AUTH: 'https://auth2-test.shiguangkey.com',
    STUDY: 'https://www-test.shiguangkey.com',
    OPEN: 'https://open-test.shiguangkey.com',
    ATTEND: 'https://attend-test.shiguangkey.com',
    STATIC: 'https://res-static-test.shiguangkey.com/',
  },
  test: {
    AUTH: 'https://auth2-test.shiguangkey.com',
    STUDY: 'https://www-test.shiguangkey.com',
    OPEN: 'https://open-test.shiguangkey.com',
    ATTEND: 'https://attend-test.shiguangkey.com',
    STATIC: 'https://res-static-test.shiguangkey.com/',
  },
  pre: {
    AUTH: 'https://auth2-pre.shiguangkey.com',
    STUDY: 'https://www-pre.shiguangkey.com',
    OPEN: 'https://open-pre.shiguangkey.com',
    ATTEND: 'https://attend-pre.shiguangkey.com',
    STATIC: 'https://res-static-pre.shiguangkey.com/',
  },
  prod: {
    AUTH: 'https://auth2.shiguangkey.com',
    STUDY: 'https://www.shiguangkey.com',
    OPEN: 'https://open.shiguangkey.com',
    ATTEND: 'https://attend.shiguangkey.com',
    STATIC: 'https://res-static.shiguangkey.com/',
  },
};
