/**
 * 模拟数据类
 *
 */

import store from '../data/store';

const mockData = {
  userInfo: store.userInfo,
};

mockData.newsData = {
  notice: '没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有'
  + '公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告没有公告', // 公告数据
  newslen: 5, // 个人消息数据长度
  news: {
    123456789: { newsId: '123456789', newsContent: '我真的是哔了狗我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪', isRead: true, date: '2017-08-24 24:10' },
    123456788: { newsId: '123456788', newsContent: '我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪', isRead: false, date: '2017-08-24 24:10' },
    123456787: { newsId: '123456787', newsContent: '我真的是哔了皮皮虾我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪', isRead: false, date: '2017-08-24 24:10' },
    123456786: { newsId: '123456786', newsContent: '我真的是哔了暴漫我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪我真的是哔了猪', isRead: false, date: '2017-08-24 24:10' },
  },
};
mockData.data = {
  1: { activityId: 1, activitycontent: 'ssssssssssssssssssssssssss', activityurl: 'wwwwwwwwwwwwww' },
  2: { activityId: 2, activitycontent: 'ssssssssssssssssssssssssss', activityurl: 'wwwwwwwwwwwwww' },
  3: { activityId: 3, activitycontent: 'ssssssssssssssssssssssssss', activityurl: 'wwwwwwwwwwwwww' },
};
mockData.weixin = {
  1: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  2: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  3: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  4: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
};
mockData.tikuan = {
  1: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  2: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  3: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  4: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  5: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
};

mockData.alldata = {
  1: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123459, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  2: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  3: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  4: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  5: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  6: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '微信充值', // 充提名字
  },
  7: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  8: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  9: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  10: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  11: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  12: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123456, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
  13: {
    chargeCarryDate: '2017-08-24 24:10', // 充提时间
    moneySum: 123458, // 充提金额
    balance: 1359184, // 可用充提余额
    chargeCarryName: '提款', // 充提名字
  },
};

mockData.defection = {
  1: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  2: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  3: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  4: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  5: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  6: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  7: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  8: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  9: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
  10: {
    DefectionName: '1390000000',  // 反水用户名
    DefectionDate: '2017-05-30 20:14', // 当前日期
    waterCourse: 1236589,  // 实际流水
    waterRelease: 124578936, // 返水
  },
};

mockData.SelfDatas = {
  userAccount: '13900000000',
  userChip: '1390000000',
  userNima: '139000000',
  userExtractable: '139000000',
};


// 场次图片
mockData.feildPicUrls = {
  1: 'http://192.168.0.150:9999/picture/feild1.png', // 普通场
  2: 'http://192.168.0.150:9999/picture/feild2.png', // 高级场
  3: 'http://192.168.0.150:9999/picture/feild3.png', // 贵宾场
};

// 平台信息图片
mockData.platformList = {
  1: 'http://192.168.0.150:9999/picture/platform1.png', // AG平台
  2: 'http://192.168.0.150:9999/picture/platform2.png', // BBIN平台
  3: 'http://192.168.0.150:9999/picture/platform3.png', // 新维京平台
};

mockData.routeList = [    // 游戏记录
  { type: 2, idle: 0, led: 0, round: 1 },
  { type: 0, idle: 1, led: 0, round: 2 },
  { type: 2, idle: 1, led: 0, round: 3 },
  { type: 1, idle: 0, led: 1, round: 4 },
  { type: 1, idle: 0, led: 0, round: 5 },
  { type: 1, idle: 1, led: 1, round: 6 },

  { type: 2, idle: 0, led: 0, round: 1 },
  { type: 2, idle: 1, led: 0, round: 2 },
  { type: 1, idle: 0, led: 0, round: 3 },
  { type: 1, idle: 0, led: 0, round: 4 },
  { type: 2, idle: 0, led: 0, round: 5 },
  { type: 1, idle: 1, led: 0, round: 6 },

  { type: 2, idle: 0, led: 0, round: 1 },
  { type: 1, idle: 0, led: 0, round: 2 },
  { type: 1, idle: 0, led: 0, round: 3 },
  { type: 2, idle: 0, led: 0, round: 4 },
  { type: 1, idle: 0, led: 0, round: 5 },
  { type: 1, idle: 0, led: 0, round: 6 },

  { type: 1, idle: 0, led: 0, round: 1 },
  { type: 2, idle: 0, led: 0, round: 2 },
  { type: 2, idle: 0, led: 0, round: 3 },
  { type: 1, idle: 0, led: 0, round: 4 },
  { type: 0, idle: 0, led: 1, round: 5 },
  { type: 1, idle: 0, led: 0, round: 6 },

  { type: 1, idle: 0, led: 0, round: 1 },
  { type: 1, idle: 0, led: 0, round: 2 },
  { type: 1, idle: 0, led: 0, round: 3 },
  // { type: 2, idle: 0, led: 1, round: 4 },
  // { type: 2, idle: 0, led: 0, round: 5 },
  // { type: 2, idle: 0, led: 1, round: 6 },

  // { type: 2, idle: 0, led: 1, round: 1 },
  // { type: 1, idle: 0, led: 0, round: 2 },
  // { type: 0, idle: 0, led: 1, round: 3 },
  // { type: 2, idle: 0, led: 0, round: 4 },
  // { type: 2, idle: 0, led: 0, round: 5 },
  // { type: 1, idle: 0, led: 0, round: 6 },

  // { type: 1, idle: 1, led: 1, round: 1 },
  // { type: 2, idle: 0, led: 0, round: 2 },
  // { type: 1, idle: 0, led: 0, round: 3 },
  // { type: 1, idle: 1, led: 1, round: 4 },
  // { type: 2, idle: 0, led: 0, round: 5 },
  // { type: 2, idle: 0, led: 0, round: 6 },

  // { type: 1, idle: 0, led: 0, round: 1 },
  // { type: 1, idle: 0, led: 0, round: 2 },
  // { type: 2, idle: 0, led: 0, round: 3 },
  // { type: 2, idle: 0, led: 0, round: 4 },
  // { type: 2, idle: 0, led: 0, round: 5 },
  // { type: 2, idle: 0, led: 0, round: 6 },

  // { type: 2, idle: 1, led: 0, round: 1 },
  // { type: 2, idle: 0, led: 0, round: 2 },
  // { type: 2, idle: 0, led: 0, round: 3 },
  // { type: 1, idle: 0, led: 0, round: 4 },
  // { type: 1, idle: 1, led: 1, round: 5 },
  // { type: 2, idle: 0, led: 0, round: 6 },

  // { type: 0, idle: 0, led: 0, round: 1 },
  // { type: 1, idle: 0, led: 0, round: 2 },
  // { type: 1, idle: 0, led: 0, round: 3 },
  // { type: 1, idle: 1, led: 0, round: 4 },
  // { type: 1, idle: 0, led: 0, round: 5 },
  // { type: 0, idle: 1, led: 0, round: 6 },

  // { type: 1, idle: 0, led: 0, round: 1 },
];

// 跑马灯模拟数据
mockData.broadCastArr = [
  '1、到医院来了几趟，总觉得这里才应该叫检查院。',
  '2、仔细想想，你现在不去扶老人，等你老了，你都不知道怎么去讹人！！！',
  '3、有的人，平时自己不要脸，关键时刻却让别人给他面子。',
  '4、有些人活着，你希望他死。有些人死了，你觉得便宜他了。',
  '5、如果失个恋就是你人生中最难过的时刻，那你的人生该是多幸运埃',
];

// 反水比例模拟数据
mockData.refundForm = {
  1: { min: '0', max: '5000', percent: '50' },
  2: { min: '5000', max: '200000', percent: '55' },
  3: { min: '200000', max: '1000000000', percent: '60' },
  4: { min: '1000000000', max: '90000000000', percent: '70' },
};

mockData.LotteryGetData = {
  hallTabelNumber: 'AG国际厅c01桌号', // 卡奖大厅桌号信息
  address: 'www.x-x.x-x', // 开奖地址
  // 开奖地址
  LottertyUserData: {
    1: {
      userAccountData: '13800000000', // 用户账号
      userPassWordData: '12345678', // 用户密码
    },
    2: {
      userAccountData: '13800000000', // 用户账号
      userPassWordData: '12345678', // 用户密码
    },
    3: {
      userAccountData: '13800000000', // 用户账号
      userPassWordData: '12345678', // 用户密码
    },
    4: {
      userAccountData: '13800000000', // 用户账号
      userPassWordData: '12345678', // 用户密码
    },
    5: {
      userAccountData: '13800000000', // 用户账号
      userPassWordData: '12345678', // 用户密码
    },
  },
};

mockData.bankData = {
    1: { bankNameData: '小武银行', bankCodeData: '8888-8888-8888-8888' },
    2: { bankNameData: '小武银行', bankCodeData: '8888-8888-8888-8888' },
    3: { bankNameData: '小武银行', bankCodeData: '8888-8888-8888-8888' },
    4: { bankNameData: '小武银行', bankCodeData: '8888-8888-8888-8888' },
    5: { bankNameData: '小武银行', bankCodeData: '8888-8888-8888-8888' },
};

export default mockData;
