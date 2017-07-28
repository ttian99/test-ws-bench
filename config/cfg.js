const cfg = {
  debug: false,
  host: '119.23.154.14', // 服务器地址
  pf: 'web', // 平台
  version: '1.0.11',
  qs: {}, // 浏览器参数
  proxyUrl: 'http://112.74.197.225:8000/', // 代理的url
  hallServerUrl: 'ws://112.74.197.225:22004/websocket', // 大厅服务器地址
  gameServerUrl: 'ws://112.74.197.225:22005/websocket', // 游戏服务器地址
};

cfg.updateInfo = `
1.完成了客户新增的修改需求
2.修复了跑马灯播放动画异常问题
3.修改消息相关页面的代码逻辑
4.添加密码管理模块
5.部分其他UI优化
`;

cfg.set = {}; // 模块设定

cfg.init = () => {
  if (cfg.qs.debug) cfg.debug = cfg.qs.debug;
  if (cfg.qs.host) cfg.host = cfg.qs.host;

  if (cfg.debug && !cfg.qs.host) {
    cfg.proxyUrl = 'http://192.168.0.150:8000/';
    cfg.hallServerUrl = 'ws://192.168.0.150:22004/websocket';
    cfg.gameServerUrl = 'ws://192.168.0.150:22005/websocket';
  } else {
    cfg.proxyUrl = 'http://' + cfg.host + ':8000/';
    cfg.hallServerUrl = 'ws://' + cfg.host + ':22004/websocket';
    cfg.gameServerUrl = 'ws://' + cfg.host + ':22005/websocket';
    if (new RegExp('192.168.0.').test(cfg.host)) cfg.proxyUrl = 'http://192.168.0.150:8000/';
  }
};

// window.cfg = cfg;
export default cfg;
