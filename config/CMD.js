const CMD = {
  HEART: 999, // 心跳包
  ERROR: 111, // 错误返回
  GET_VERTIFICATION_CODE: 3000, // 获取验证码(client->svr)
  LOGIN_HALL: 3001, // 登录大厅
  GET_NOTICE: 3003, // 获取公告信息
  GET_MSG: 3004, // 获取消息
  READ_MSG: 3005, // 读消息
  NOTIFY_PUSH: 3006, // 跑马灯
  ACTIVITY_SIGN: 3007, // 活动签到
  LOGIN_OUT: 3008, // 退出账号登录
  TEAM_MANAGER: 3009, // 团队管理
  CHARGE_RECORD: 3010, // 充值提款记录
  GAME_RECORD: 3011, // 游戏记录
  ACTIVITY_CONTENT: 3012, // 拉取活动内容
  GET_BANNER_PHOTO: 3013, // 获取BANER图
  LOTTERY_ADDRESS: 3015, // 开奖地址
  REFRESH_USER_INFO: 3016, // 刷新用户信息和金币
  GET_FEILD_INFO: 4001, // 拉取场次信息
  GET_RULE_INFO: 4002, // 拉取规则信息
  GET_PLATFORM_INFO: 4003, // 拉取平台信息
  GET_ROOM_INFO: 4004, // 拉取房间信息
  RECEIVE_NEW_MSG: 4005, // 收到新的消息
  PASSWORD_MGR: 5001, // 密码管理
  SET_PASSWORD: 5002, // 设置密码
  MODIFICAION_PASSWORD: 5003, // 修改密码
  FIND_PASSWORD: 5004, // 找回密码
  GET_PAYWAY: 5011, // 获得支付方式
  GET_PAYCHANNEL: 5012, // 获得支付通道
  CANCEL_ORDER: 5013, // 取消定单
  COMFIRM_BINDBANK: 5016, // 确认绑定银行卡
  BIND_BANKCARD: 5017, // 绑定银行卡
  BANK_VERTIFICATION_CODE: 5018, // 绑定银行卡验证码
  GET_EXCHANGE: 5020, // 获取兑换信息
  EXCHANGE_RESULT: 5021, // 兑换结果





  GAME_ENTER: 8001, // 加入房间
  GAME_OUT: 8002, // 退出房间
  PLAYER_GAME_ENTER: 8003, // 玩家加入房间
  GAME_RESULT: 8011, // 游戏结果
  GAME_BET: 8012, // 自己下注
  OTHER_BET: 8013, // 其他玩家下注
  STOP_BET: 8014, // 停止下注
  START_BET: 8015, // 开始下注倒计时
  REQ_BANK: 8021, // 申请上庄
  CANCEL_BANK: 8022, // 取消上庄
  BANK_SUCCESS: 8023, // 上庄成功
  OTHER_CANCEL_BANK: 8024, // 其他玩家取消上庄
  KICK_BANKER: 8025, // 玩家自己被踢下庄的位子
  BET_LAST_DOWN: 8026, // 押注倒计时
  CARDS_ERROR: 8028, // 牌局数据出错
  REPAIR_ROAD_BILL: 8029, // 补单数据
  BET_CHIP_OVER: 8030, // 玩家下注金额大于可下注金额
  SHUFFLE: 8031, // 洗牌协议
  CLOSE_FIELD: 8041, // 封盘协议
  GAME_RECONNECT: 9001, // 重连协议
};

export default CMD;
