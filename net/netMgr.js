import NetWork from './WebSocket-test';
import cfg from '../config/cfg';

class NetMgr {
  constructor() {
    this.isConnecting = false; // 是否正在连接
    this.hallWs = new NetWork('hall');
    this.gameWs = new NetWork('game');
  }

  // 连接服务器
  connectSvr(hallSuccFun, gameSuccFun) {
    console.log('== start connectSvr ==');
    this.hallWs.connect(cfg.hallServerUrl, () => {
      this.isConnecting = false;
      console.log('== connect hall success : ' + cfg.hallServerUrl);
      hallSuccFun && hallSuccFun();
    });
    this.gameWs.connect(cfg.gameServerUrl, () => {
      this.isConnecting = false;
      console.log('== connect game success : ' + cfg.gameServerUrl);
      gameSuccFun && gameSuccFun();
    });
  }

  // 更新连接
  // updateConnect(callbackFun) {
  //   if (!this.isAnyConnecting()) {
  //     if (!this.hallWs.isConnected) {
  //       console.debug('...连接hall服务器...');
  //       this.hallWs.connect(cfg.hallServerUrl, callbackFun);
  //     } else if (!this.gameWs.isConnected) {
  //       console.debug('...连接game服务器...');
  //       this.gameWs.connect(cfg.gameServerUrl, callbackFun);
  //     }
  //   }
  // }

  // 是否2个socket都连接上了
  isAllConnected() {
    return (this.hallWs.isConnected && this.gameWs.isConnected);
  }

  // 是否有连接在连接中
  isAnyConnecting() {
    return (this.hallWs.isConnecting || this.gameWs.isConnecting);
  }
}

const netMgr = new NetMgr();
// window.netMgr = netMgr;
export default netMgr;
