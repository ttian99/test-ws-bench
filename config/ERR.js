const ERR = {
  // 验证码输入有误
  // USER_SECURITYCODE_ERROR: 100,
  // 用户不存在
  USER_NOT_EXIST: 101,
  // 用户被冻结
  USER_IS_FROZEN: 102,
  // 用户的提取记录获取失败
  // MONEYLOG_NO_EXIST: 103,
  // 提取记录为空
  // MONEYLOG_IS_NULL: 104,
  // 金币纪录对象为空
  // COINLOG_IS_NULL: 105,
  // 获取用户的金币纪录失败
  // COINLOG_NO_EXIST: 106,
  // 玩家游戏记录对象为空
  // USERGAMELOG_IS_NULL: 107,
  // 房间的牌局结果记录对象为空
  // WAYBILL_IS_NULL: 108,
  // 订单对象为空
  // ORDER_IS_NULL: 109,
  // 信息长度错误
  // INFO_LENGTH_ERROR: 118,
  // 系统公告不存在
  // NOTICE_NO_EXITST: 120,
  // 游戏账变记录对象为空
  // GAMEACCOUNTLOG_IS_NULL: 121,
  // 10分钟内请求验证码超过3次
  // APPLY_SECURITYCODE_OVERTIME: 122,
  // 邀请码不存在
  INVITE_CODE_NOT_EXITST: 125,
  // 邀请码不允许更改
  INVITE_CODE_NOT_ALLOW_MODIFY: 126,

  /** ---------------兑换---------------**/
  // 一天时间内最多兑换*次
  COUNT_OUT: 127,
  // 发起兑换时用户为空
  EXCHANGE_USER_NOT_EXIST: 128,
  // 兑换时用户银行卡信息对象为空
  USERBANKINFO_IS_NULL: 129,
  // 兑换时，提款密码不正确
  CONVERSION_PASSWORD_ERROR: 130,
  // 选择银行卡不存在
  BANK_CARD_NOT_EXIST: 131,
  // 填写金额小于*
  COIN_DRAW_NOT_ENOUGH: 132,
  // 不允许取出几角钱出来，最少一元
  COIN_DEAW_FORMAT_ERROR: 133,
  // 没有绑定银行卡
  BANK_NUM_IS_ZERO: 134,
  /** ---------------兑换OK---------------**/

  // 不是空闲状态
  TABLE_SEAT_NOT_OPEN: 201,
  // 座子找不到玩家
  TABLE_NOT_USER: 204,
  // 找不到桌子
  TABLE_NOT_EXIST: 205,
  // 金币不符房间准入条件
  TABLE_COIN_ERROR: 206,
  // 重复进入桌子
  TABLE_SEAT_AGLIN: 208,
  // 找不到对应的房间
  ROOM_NOT_EXIST: 210,
  // 找不到对应的游戏引擎
  ENGINE_NOT_EXIST: 211,
  // 有未完成的牌局
  ROOM_UNFINISHED_GAME: 212,
  // 断线重连时在战绩记录中找不到玩家信息
  RECONNECT_USERINFO_NOT_EXIST: 230,
  // 获取玩家战绩记录时
  USERINFO_NOT_EXIST_IN_PRIVATEROOM: 231,
  // 好友场断线重连的时候房间信息为空
  RECONNECT_PRIVATEROOM_NOT_EXIST: 232,
  // 好友场断线重连的时候招不到对应的玩家
  RECONNECT_USER_NOT_EXIST: 233,
  // 庄家位置上的玩家不能取消上庄
  CANCEL_BNKER_ERROR: 241,
  // 庄家位置上的玩家不能压注
  BANKER_BET_ERROR: 242,
  // 不满足押注庄家最小押注
  BET_ERROR_BANKER: 251,
  // 不满足押注闲家最小押注
  BET_ERROR_PLAYER: 252,
  // 不满足押注和最小押注
  BET_ERROR_DRAW: 253,
  // 不满足押注庄对最小押注
  BET_ERROR_BANKERAIR: 254,
  // 不满足押注闲对最小押注
  BET_ERROR_PLAYERAIR: 255,
  // 玩家金币筹码低于上庄的最低限额
  BANKER_ERROR_LEAST_LIMT: 401,
  // 玩家的历史充值金额不足
  BANKER_ERROR_HISTORY_CHARGE: 402,

  // ----------------------------
  NO_BANK_MONRY: 80251, // 1-玩家金币不足，被踢出
  NO_BANK_OUT: 80252, // 玩家上庄满3局，被踢出
  BET_MAX_ERROR: 80301, // 玩家下注金额大于可下注金额
  NO_MONRY: 80121, // 金币不足
  MAX_MONRY: 80122,   // 超出最大压注
  STOP_BET: 80123,   // 禁止压注
  BET_NO_MONRY: 80124,   // 没有金额
  SEND_NO_MSG: 80611,   // 发送消息没有内容
  ERROR_GLOBAL: 4444, // 通用错误


};
export default ERR;
