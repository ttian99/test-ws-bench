import CMD from '../config/CMD';

// 服务端返回后所有的数据读取均在此处进行
const protobuf = {};

protobuf[CMD.HEART] = buffer => buffer.readBool();
protobuf[CMD.ERROR] = buffer => buffer.readShort();
protobuf[CMD.LOGIN_HALL] = (buffer) => {
  const data = {};
  data.uid = buffer.readUTF();  // 用户id
  data.chip = buffer.readUTF();  // 筹码
  data.nima = buffer.readUTF();  // 泥码
  data.extMoney = buffer.readUTF(); // 可提取的金额
  data.win = buffer.readInt(); // 赢的局数
  data.lose = buffer.readInt(); // 输的局数
  data.promoCode = buffer.readUTF(); // 推广码
  data.referLinks = buffer.readUTF(); // 推广链接
  data.QRCodeUrl = buffer.readUTF(); // 二位码图片地址
  data.reward = buffer.readInt(); // 奖励金额
  data.checkIn = buffer.readBool(); // 是否已将签到
  data.notice = buffer.readUTF(); // 公告数据
  data.sessionid = buffer.readUTF(); // 用户的会话ID
  data.isShowMsgLogo = buffer.readBool(); // 用户是否有未读消息
  return data;
};
// 公告
protobuf[CMD.GET_NOTICE] = (buffer) => {
  const data = {};
  data.newsContent = buffer.readUTF();
  return data;
};
// 站内信
protobuf[CMD.GET_MSG] = (buffer) => {
  const data = [];
  const size = buffer.readInt();
  for (let i = 0; i < size; i++) {
    const temporaryData = {};
    const newsId = buffer.readInt(); // 消息id
    const newsContent = buffer.readUTF();  // 消息内容
    const isRead = buffer.readBool(); // 是否已经读取消息
    const date = buffer.readUTF(); // 时间
    temporaryData.newsId = newsId;
    temporaryData.newsContent = newsContent;
    temporaryData.isRead = isRead;
    temporaryData.date = date;
    data[i] = temporaryData;
  }
  return data;
};
// 服务器消息已读
protobuf[CMD.READ_MSG] = (buffer) => {
  const data = {};
  const newsid = buffer.readInt();
  const isShowMsgLogo = buffer.readBool();
  data.newsId = newsid;
  data.isShowMsgLogo = isShowMsgLogo;
  return data;
};
// 跑马灯
protobuf[CMD.NOTIFY_PUSH] = (buffer) => {
  const size = buffer.readInt();
  const data = [];
  for (let i = 0; i < size; i++) {
    data[i] = buffer.readUTF();
  }
  return data;
};
// 获取轮播图
protobuf[CMD.GET_BANNER_PHOTO] = (buffer) => {
  const data = {};
  data.size = buffer.readInt();
  data.arr = [];
  for (let i = 0; i < data.size; i++) {
    data.arr[i] = {};
    data.arr[i].photoUrl = buffer.readUTF();
    data.arr[i].gotoUrl = buffer.readUTF();
  }
  return data;
};
// 签到
protobuf[CMD.ACTIVITY_SIGN] = (buffer) => {
  const data = {};
  const reward = buffer.readInt(); // 奖励金额
  data.reward = reward;
  return data;
};
// 活动配置
protobuf[CMD.ACTIVITY_CONTENT] = (buffer) => {
  const data = {};

  const size = buffer.readInt();
  for (let i = 0; i < size; i++) {
    const temporaryData = {};
    temporaryData.activityId = buffer.readUTF();
    temporaryData.activityurl = buffer.readUTF();
    temporaryData.activitycontent = buffer.readUTF();
    data[temporaryData.activityId] = temporaryData;
  }
  return data;
};
// 退出
protobuf[CMD.LOGIN_OUT] = buffer => { };
// 团队管理
protobuf[CMD.TEAM_MANAGER] = (buffer) => {
  const data = {};
  data.item = {};
  const size = buffer.readInt();
  for (let i = 0; i < size; i++) {
    const temporaryData = {};
    temporaryData.DefectionName = buffer.readUTF();   // 返回用户名数据
    temporaryData.waterCourse = buffer.readInt(); // 流水
    temporaryData.waterRelease = buffer.readInt(); //  返水
    temporaryData.DefectionDate = buffer.readUTF();   // 时间数据
    data.item[temporaryData.DefectionName] = temporaryData;
  }
  data.allliushui = buffer.readInt();
  data.allfanshui = buffer.readInt();
  return data;
};
// 充提记录
protobuf[CMD.CHARGE_RECORD] = (buffer) => {
  const data = {};
  data.item = {};
  const size = buffer.readInt();
  data.cointextcontext = buffer.readUTF();
  for (let i = 0; i < size; i++) {
    const temporaryData = {};
    temporaryData.moneySum = buffer.readUTF();   // 充提金额
    temporaryData.balance = buffer.readUTF();   // 充提余额
    temporaryData.chargeCarryName = buffer.readUTF(); // 充提名称
    temporaryData.chargeCarryDate = buffer.readUTF(); // 充提时间
    data.item[i + 1] = temporaryData;
  }
  return data;
};
// 游戏记录
protobuf[CMD.GAME_RECORD] = (buffer) => {
  const data = {};
  const size = buffer.readInt();
  for (let i = 0; i < size; i++) {
    const temporaryData = {};
    temporaryData.gametypedata = buffer.readUTF(); // 游戏类型
    temporaryData.prizecontentdata = buffer.readInt(); // 派奖金额
    temporaryData.bettingcontentdata = buffer.readUTF(); //  投注方式
    temporaryData.loterycontentdata = buffer.readUTF(); // 开奖结果
    temporaryData.betcontentdata = buffer.readInt(); //  投注金额
    temporaryData.winciondata = buffer.readInt(); // 赢得的金额
    temporaryData.datecontentdata = buffer.readUTF(); //  时间
    data[i] = temporaryData;
  }
  return data;
};
// 获取场次信息
protobuf[CMD.GET_FEILD_INFO] = (buffer) => {
  const data = {};
  for (let i = 1; i < 4; i++) {
    data[i] = {};
    data[i].feildType = buffer.readInt();
    data[i].feildPhoto = buffer.readUTF();
    data[i].entry = buffer.readInt();
    data[i].bet = buffer.readInt();
    data[i].banker = buffer.readInt();
    data[i].commission = buffer.readUTF();
  }
  return data;
};
// 获取反水比例规则
protobuf[CMD.GET_RULE_INFO] = (buffer) => {
  const data = {};
  for (let i = 1; i < 5; i++) {
    data[i] = {};
    data[i].min = buffer.readUTF();
    data[i].max = buffer.readUTF();
    data[i].percent = buffer.readUTF();
  }
  return data;
};
// 获取平台信息
protobuf[CMD.GET_PLATFORM_INFO] = (buffer) => {
  const data = [];
  const size = buffer.readInt();
  for (let i = 0; i < size; i++) {
    const obj = {};
    obj.id = buffer.readUTF();
    obj.name = buffer.readUTF();
    obj.url = buffer.readUTF();
    data.push(obj);
  }
  return data;
};
// 获取房间信息
protobuf[CMD.GET_ROOM_INFO] = (buffer) => {
  const data = {};
  data.platformId = buffer.readUTF();
  data.roomList = {};
  const size = buffer.readInt();
  for (let i = 0; i < size; i++) {
    const roomId = buffer.readUTF();
    data.roomList[roomId + ''] = [];
    const arrSize = buffer.readInt();
    for (let j = 0; j < arrSize; j++) {
      const temp = {};
      temp.type = buffer.readByte();
      temp.idle = buffer.readByte();
      temp.led = buffer.readByte();
      temp.round = buffer.readInt();
      data.roomList[roomId + ''][j] = temp;
    }
  }
  return data;
};

// todo sean
// .readShort()
// .readInt()
// .readByte()
// .readUTF()

protobuf[CMD.GAME_ENTER] = (buffer) => {
  const data = {};
  data.oddSize = buffer.readShort();  //
  const odds = {};
  odds.led = buffer.readUTF();  // 庄赢赔率
  odds.idle = buffer.readUTF();  // 闲赢赔率
  odds.flat = buffer.readUTF();  // 和赔率
  odds.twoLed = buffer.readUTF();  // 庄对赔率
  odds.twoIdle = buffer.readUTF();  // 闲对赔率
  data.odds = odds;
  data.maxSize = buffer.readShort();  //
  const max = {};
  max.led = buffer.readInt();  // 庄赢最大押注
  max.idle = buffer.readInt();  // 闲赢最大押注
  max.flat = buffer.readInt();  // 和最大押注
  max.twoLed = buffer.readInt();  // 庄对最大押注
  max.twoIdle = buffer.readInt();  // 闲对最大押注
  data.max = max;
  data.time = buffer.readInt();  // 下注截止时间
  data.curRound = buffer.readShort();  // 当前局数
  data.listSize = buffer.readShort();  //
  const list = [];
  for (let i = 0; i < data.listSize; i++) {
    const li = {};
    li.type = buffer.readByte();  // 胜负类型:0-和，1-庄赢，2-闲赢
    const airType = buffer.readByte();  // 对子情况:0-无 1-庄对 2-闲对 3-双方均有对子
    switch (airType) {
      case 0:
        li.led = 0;
        li.idle = 0;
        break;
      case 1:
        li.led = 1;
        li.idle = 0;
        break;
      case 2:
        li.led = 0;
        li.idle = 1;
        break;
      default:
        li.led = 1;
        li.idle = 1;
        break;
    }
    // li.idle = buffer.readByte();  // 闲对情况：0-无，1-有
    // li.led = buffer.readByte();  // 庄对情况：0-无，1-有
    // li.round = buffer.readShort();  // 局数
    li.round = buffer.readInt();  // 局数
    list.push(li);
  }
  data.list = list;
  data.uid = buffer.readUTF();  // 用户id庄家
  // data.betListSize = buffer.readShort();  //
  // const betList = [];
  // for (let i = 0; i < data.betListSize; i++) {
  //   betList.push(buffer.readInt());  // 押注列表
  // }
  // data.betList = betList;
  return data;
};
protobuf[CMD.GAME_OUT] = (buffer) => {
  const data = {};
  return data;
};
protobuf[CMD.PLAYER_GAME_ENTER] = (buffer) => {
  const data = {};
  data.uid = buffer.readUTF();  // 用户id庄家
  return data;
};
protobuf[CMD.GAME_RESULT] = (buffer) => {
  // console.log('game result: ' + buffer.c_len + ' , bytes: ' + buffer.bytes.length + ' , buffer.offset: ' + buffer.offset);
  const data = {};
  data.time = buffer.readUTF();  // 时间
  data.money = buffer.readUTF();  // 得失金币
  data.win = buffer.readShort();  // 胜负结果：0-和 1-庄赢 2-闲赢
  data.led = buffer.readShort();  // 庄家点数
  data.idle = buffer.readShort();  // 闲家点数
  data.type = buffer.readShort();  // 对子情况:0-无 1-庄对 2-闲对 3-双方均有对子
  data.round = buffer.readShort();  // 局数
  data.chip = buffer.readUTF();  // 玩家最新金币
  data.isBet = buffer.readByte();  // 是否押注
  return data;
};
protobuf[CMD.GAME_BET] = (buffer) => {
  const data = {};
  data.time = buffer.readUTF();  // 时间
  data.money = buffer.readUTF();  // 得失金币
  // data.maxSize = buffer.readShort();  //
  data.maxSize = 5;
  const max = {};
  max.led = buffer.readInt();  // 庄赢最大押注
  max.idle = buffer.readInt();  // 闲赢最大押注
  max.flat = buffer.readInt();  // 和最大押注
  max.twoLed = buffer.readInt();  // 庄对最大押注
  max.twoIdle = buffer.readInt();  // 闲对最大押注
  data.max = max;
  data.led = buffer.readInt();  // 庄赢押注
  data.idle = buffer.readInt();  // 闲赢押注
  data.flat = buffer.readInt();  // 和押注
  data.twoLed = buffer.readInt();  // 庄对押注
  data.twoIdle = buffer.readInt();  // 闲对押注
  data.betTotal = buffer.readInt();  // 押注总额
  /** 設置格式 **/
  data.max.led = data.max.led > 0 ? data.max.led : 0;
  data.max.idle = data.max.idle > 0 ? data.max.idle : 0;
  data.max.flat = data.max.flat > 0 ? data.max.flat : 0;
  data.max.twoLed = data.max.twoLed > 0 ? data.max.twoLed : 0;
  data.max.twoIdle = data.max.twoIdle > 0 ? data.max.twoIdle : 0;
  data.money = parseInt(data.money, 10) > 0 ? parseInt(data.money, 10) : 0;
  data.led = data.led > 0 ? parseInt(data.led, 10) : 0;
  data.idle = data.idle > 0 ? parseInt(data.idle, 10) : 0;
  data.flat = data.flat > 0 ? parseInt(data.flat, 10) : 0;
  data.twoLed = data.twoLed > 0 ? parseInt(data.twoLed, 10) : 0;
  data.twoIdle = data.twoIdle > 0 ? parseInt(data.twoIdle, 10) : 0;
  // data.betTotal = data.betTotal > 0 ? data.betTotal : 0;
  data.betTotal = data.led + data.idle + data.flat + data.twoLed + data.twoIdle;
  return data;
};
protobuf[CMD.OTHER_BET] = (buffer) => {
  const data = {};
  data.time = buffer.readUTF();  // 时间
  data.uid = buffer.readUTF();  // 用户id
  data.led = buffer.readInt();  // 庄赢押注
  data.idle = buffer.readInt();  // 闲赢押注
  data.flat = buffer.readInt();  // 和押注
  data.twoLed = buffer.readInt();  // 庄对押注
  data.twoIdle = buffer.readInt();  // 闲对押注
  data.betTotal = buffer.readInt();  // 押注总额
  return data;
};
protobuf[CMD.STOP_BET] = (buffer) => {
  const data = {};
  data.led = buffer.readInt();
  data.idle = buffer.readInt();
  data.flat = buffer.readInt();
  data.twoLed = buffer.readInt();
  data.twoIdle = buffer.readInt();
  return data;
};
protobuf[CMD.START_BET] = (buffer) => {
  const data = {};
  data.time = buffer.readInt();  // 时间
  data.curRound = buffer.readShort();  // 当前局数
  data.time = 0;
  return data;
};
protobuf[CMD.REQ_BANK] = (buffer) => {
  const data = {};
  data.index = buffer.readInt();  // 排队位置
  return data;
};
protobuf[CMD.CANCEL_BANK] = (buffer) => {
  const data = {};
  return data;
};
protobuf[CMD.BANK_SUCCESS] = (buffer) => {
  const data = {};
  data.time = buffer.readUTF();  // 时间
  data.uid = buffer.readUTF();  // 用户id
  data.index = buffer.readInt();  // 排队位置
  data.index = data.index > 0 ? data.index : 0;
  return data;
};
protobuf[CMD.CANCEL_BANK_OTHER] = (buffer) => {
  const data = {};
  data.index = buffer.readInt();  // 排队位置
  return data;
};
protobuf[CMD.KICK_BANKER] = (buffer) => {
  const data = {};
  data.flag = buffer.readByte();  // (1-玩家金币不足，被踢出) (2-玩家上庄满3局，被踢出)
  return data;
};
protobuf[CMD.BET_LAST_DOWN] = (buffer) => {
  const data = {};
  data.time = buffer.readInt();  // 倒计时
  return data;
};
protobuf[CMD.CARDS_ERROR] = (buffer) => {
  const data = {};  // 牌局数据出错
  data.betTotal = buffer.readInt();  // 押注总额
  data.chip = buffer.readUTF();      // 玩家最新金币
  return data;
};
protobuf[CMD.REPAIR_ROAD_BILL] = (buffer) => {
  const data = {};  // 补单数据
  data.listSize = buffer.readShort();  //
  const list = [];
  for (let i = 0; i < data.listSize; i++) {
    const li = {};
    li.type = buffer.readByte();  // 胜负类型:0-和，1-庄赢，2-闲赢
    const airType = buffer.readByte();  // 对子情况:0-无 1-庄对 2-闲对 3-双方均有对子
    switch (airType) {
      case 0:
        li.led = 0;
        li.idle = 0;
        break;
      case 1:
        li.led = 1;
        li.idle = 0;
        break;
      case 2:
        li.led = 0;
        li.idle = 1;
        break;
      default:
        li.led = 1;
        li.idle = 1;
        break;
    }
    // li.idle = buffer.readByte();  // 闲对情况：0-无，1-有
    // li.led = buffer.readByte();  // 庄对情况：0-无，1-有
    // li.round = buffer.readShort();  // 局数
    li.round = buffer.readInt();  // 局数
    list.push(li);
  }
  data.list = list;
  return data;
};
protobuf[CMD.BET_CHIP_OVER] = (buffer) => {
  const data = {};  // 玩家下注金额大于可下注金额
  data.maxSize = buffer.readShort();  //

  const max = {};
  max.led = buffer.readInt();  // 庄赢最大押注
  max.idle = buffer.readInt();  // 闲赢最大押注
  max.flat = buffer.readInt();  // 和最大押注
  max.twoLed = buffer.readInt();  // 庄对最大押注
  max.twoIdle = buffer.readInt();  // 闲对最大押注
  data.max = max;

  /** 設置格式 **/
  data.max.led = data.max.led > 0 ? data.max.led : 0;
  data.max.idle = data.max.idle > 0 ? data.max.idle : 0;
  data.max.flat = data.max.flat > 0 ? data.max.flat : 0;
  data.max.twoLed = data.max.twoLed > 0 ? data.max.twoLed : 0;
  data.max.twoIdle = data.max.twoIdle > 0 ? data.max.twoIdle : 0;

  return data;
};
protobuf[CMD.SHUFFLE] = (buffer) => {
  const data = {};  // 洗牌协议
  return data;
};
protobuf[CMD.CLOSE_FIELD] = (buffer) => {
  const data = {};  // 封盘协议
  data.type = buffer.readByte();
  data.isShuffle = buffer.readBool();
  return data;
};

protobuf[CMD.GAME_RECONNECT] = (buffer) => {
  const data = {};
  data.oddSize = buffer.readShort();  //
  const odds = {};
  odds.led = buffer.readUTF();  // 庄赢赔率
  odds.idle = buffer.readUTF();  // 闲赢赔率
  odds.flat = buffer.readUTF();  // 和赔率
  odds.twoLed = buffer.readUTF();  // 庄对赔率
  odds.twoIdle = buffer.readUTF();  // 闲对赔率
  data.odds = odds;
  data.maxSize = buffer.readShort();  //
  const max = {};
  max.led = buffer.readInt();  // 庄赢最大押注
  max.idle = buffer.readInt();  // 闲赢最大押注
  max.flat = buffer.readInt();  // 和最大押注
  max.twoLed = buffer.readInt();  // 庄对最大押注
  max.twoIdle = buffer.readInt();  // 闲对最大押注
  data.max = max;
  data.time = buffer.readInt();  // 下注截止时间
  data.curRound = buffer.readShort();  // 当前局数
  data.listSize = buffer.readShort();  //
  const list = [];
  for (let i = 0; i < data.listSize; i++) {
    const li = {};
    li.type = buffer.readByte();  // 胜负类型:0-和，1-庄赢，2-闲赢
    const airType = buffer.readByte();  // 对子情况:0-无 1-庄对 2-闲对 3-双方均有对子
    switch (airType) {
      case 0:
        li.led = 0;
        li.idle = 0;
        break;
      case 1:
        li.led = 1;
        li.idle = 0;
        break;
      case 2:
        li.led = 0;
        li.idle = 1;
        break;
      default:
        li.led = 1;
        li.idle = 1;
        break;
    }
    li.round = buffer.readInt();  // 局数
    list.push(li);
  }
  data.list = list;
  data.uid = buffer.readUTF();  // 用户id庄家
  return data;
};
// 绑定银行卡
protobuf[CMD.BIND_BANKCARD] = (buffer) => {
  const data = {};
  data.item = {};
  const size = buffer.readInt();
  if (size > 0) {
    data.isBindBankCard = true;
    data.canBindBankCard = size >= 5 ? false : true;
    for (let i = 0; i < size; i++) {
      const temporaryData = {};
      temporaryData.bankName = buffer.readUTF();   // 银行名称
      temporaryData.bankCode = buffer.readUTF();   // 银行卡号
      data.item[i + 1] = temporaryData;
    }
  } else {
    data.isBindBankCard = false;
    data.canBindBankCard = true;
  }
  return data;
};

/** ----------------------sean------------------------**/
// 获取兑换信息
protobuf[CMD.GET_EXCHANGE] = (buffer) => {
  const data = {};
  data.sumBalance = buffer.readUTF(); //  (共计余额)
  data.canExchangeCoin = buffer.readUTF();  //  (可兑金额)
  const cardListSize = buffer.readShort(); //  (银行卡列表个数)
  const cardList = []; //  [String (银行卡列表)]，
  for (let i = 0; i < cardListSize; i++) {
    cardList.push(buffer.readUTF());   // 银行名称
  }
  data.cardList = cardList;
  data.exchangeCont = buffer.readInt(); //  (可兑次数)
  data.exchangeMoney = buffer.readUTF();  //  (可兑金额)
  data.exchangeMaxCont = buffer.readInt();  //  (最多可兑次数)
  return data;
};
// 兑换结果
protobuf[CMD.EXCHANGE_RESULT] = (buffer) => {
  const data = {};
  data.sumBalance = buffer.readUTF(); //  (共计余额)
  data.canExchangeCoin = buffer.readUTF();  //  (可兑金额)
  data.exchangeCont = buffer.readInt(); //  (可兑次数)
  data.exchangeMoney = buffer.readUTF();  //  (可兑金额)
  data.exchangeMaxCont = buffer.readInt();  //  (最多可兑次数)
  return data;
};








// 开奖地址
protobuf[CMD.LOTTERY_ADDRESS] = (buffer) => {
  const data = {};
  data.item = {};
  data.HalltableNumber = buffer.readUTF();
  data.ottertyaddress = buffer.readUTF();
  const size = buffer.readInt();

  for (let i = 0; i < size; i++) {
    const temporaryData = {};
    temporaryData.userAccount = buffer.readUTF();   // 用户账号
    temporaryData.userPasssWord = buffer.readUTF();   // 用户密码
    data.item[i + 1] = temporaryData;
  }
  return data;
};

// 确认绑定银行卡
protobuf[CMD.COMFIRM_BINDBANK] = (buffer) => {
  const data = {};
  data.isBindBank = buffer.readBool();
  return data;
};


// 密码管理
protobuf[CMD.PASSWORD_MGR] = (buffer) => {
  const data = {};
  data.isHaveSetPassWord = buffer.readBool();
  return data;
};

// 设置密码
protobuf[CMD.SET_PASSWORD] = (buffer) => {
  const data = {};
  data.isSetPassWord = buffer.readBool();
  return data;
};

// 修改密码
protobuf[CMD.MODIFICAION_PASSWORD] = (buffer) => {
  const data = {};
  data.isModificationPassWord = buffer.readBool();
  return data;
};

// 找回密码
protobuf[CMD.FIND_PASSWORD] = (buffer) => {
  const data = {};
  data.isFindPassWord = buffer.readBool();
  return data;
};

// 获取到新的消息
protobuf[CMD.RECEIVE_NEW_MSG] = () => {
  const data = {};
  return data;
};

// 刷新用户信息（金币）
protobuf[CMD.REFRESH_USER_INFO] = (buffer) => {
  const data = {};
  data.chip = buffer.readUTF();
  data.mudChip = buffer.readUTF();
  data.extMoney = buffer.readUTF();
  return data;
};
// 获得支付方式
protobuf[CMD.GET_PAYWAY] = (buffer) => {
  const data = {};
  data.json = buffer.readUTF();
  return data;
};

export default protobuf;
