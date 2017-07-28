const CNT = {};

// 页面配置
CNT.PAGE = {
  HOME: { id: 0, name: 'homePage', desc: '游戏大厅' },
  PAY: { id: 1, name: 'payPage', desc: '充值' },
  MSG: { id: 2, name: 'msgPage', desc: '消息' },
  SELF: { id: 3, name: 'selfPage', desc: '个人中心' },
  LOGIN: { id: 4, name: 'login', desc: '登录页面' },
  FEILD: { id: 5, name: 'feildPage', desc: '房间列表' },
  RULE: { id: 6, name: 'rulePage', desc: '游戏规则' },
  PLATFORM: { id: 7, name: 'platformPage', desc: '平台页面' },
  ACTIVITY: { id: 8, name: 'activityPage', desc: '活动页面' },
  SERVICE: { id: 9, name: 'servicePage', desc: '客服页面' },
  SHARE: { id: 10, name: 'sharePage', desc: '分享页面' },
  CHARGE_RECORD: { id: 11, name: 'chargeRecordPage', desc: '充提记录页面' },
  GAME_RECORD: { id: 12, name: 'gameRecordPage', desc: '游戏记录页面' },
  TEAM_MGR: { id: 13, name: 'teamMgrPage', desc: '团队管理页面' },
  PASSWORD_MGR: { id: 14, name: 'passwordMgrPage', desc: '密码管理页面' },
  BANK_CARD_BIND: { id: 15, name: 'bankCardBindPage', desc: '绑定银行卡页面' },
  DRAW: { id: 16, name: 'drawPage', desc: '提款页面' },
  SET_PASSWORD: { id: 17, name: 'setPassWordPage', desc: '设置秘密页面' },
  ALTER_PASSWORD: { id: 18, name: 'alterPassWordPage', desc: '修改密码页面' },
  FIND_PASSWORD: { id: 19, name: 'findPassWordPage', desc: '找回密码页面' },
  CONTINUEBINDBANKCARD: { id: 20, name: 'continueBindBankCard', desc: '已经绑定银行卡页面' },
  CONFIRMBINDBANKCARD: { id: 21, name: 'confirmBindBankCard', desc: '开始绑定银行卡页面' },
  PAYCHOOSEBANKPAGE: { id: 22, name: 'payChooseBankPage', desc: '支付方式页面' },
  EXCHANGE: { id: 23, name: 'exchangePage', desc: '兑换页面' },
};

// 页面操作类型
CNT.PAGE_ACT = {
  ERR: -1, // 打开错误页面
  SELF: 0, // 打开当前已经打开的页面
  SWITCH: 1, // 切换页面
  ADD: 2, // 打开新的页面
  HOME: 3, // 回到主页
};

// 场次规则
CNT.FEILD = {
  1: {
    id: 1, name: '普通场', formula: '2.5% x 您下级的流水 x 您当前的返水比例', example: `例如:
您当前的返水比例为50%。在同一局中，您的下级A投注为200，您的下级B投注为300，则您的返水最终为:
2.5%x200x50% + 2.5%x300x50% = 6.25` },
  2: {
    id: 2, name: '高级场', formula: '您下级的流水 x 您当前的返水比例', example: `例如：
您当前的返水比例为1%。在同一局中，您的下级A投注为200，您的下级B投注为300，则您的返水最终为：
（200+300）x 1% = 5` },
  3: {
    id: 3, name: '贵宾场', formula: '您下级的流水 x 您当前的返水比例', example: `例如：
您当前的返水比例为1%。在同一局中，您的下级A投注为200，您的下级B投注为300，则您的返水最终为：
（200+300）x 1% = 5` },
};

export default CNT;
