// import netMgr from './netMgr';
import hallReq from './hall-req';
// import hallRes from './hall-res';
// import testReq from '../test/test-req';
import gameReq from './game-req';
import dataList from '../dataList';

class DataMgr {
  constructor(uid) {
    this.uid = uid;
    this.isDebug = false;
  }

  // 注册监听
  reqSvr(uid, cmd, data, type, isDebug) {
    if (this.isDebug || isDebug) {
      testReq(cmd, data);
    } else {
      const req = (cmd > 8000) ? gameReq : hallReq;
      req[cmd](uid, cmd, data);
    }
  }


  // 发起ws请求
  registerCallfun(cmd, succFunc, errFunc) {
    const netMgr = dataList[this.uid].netMgr;
    const ws = cmd > 8000 ? netMgr.gameWs : netMgr.hallWs;
    ws.registerCallfun(cmd, (data) => {
      console.log(cmd + ' succ');
      // console.log(data);
      // hallRes[cmd] && hallRes[cmd](data);
      succFunc && succFunc(data);
    }, (err) => {
      console.log(cmd + ' err');
      console.error(err);
      // hallRes[111](err);
      errFunc && errFunc(err);
    });
  }

  deleteCallfun() {
    const netMgr = dataList[this.uid].netMgr;
    const ws = cmd > 8000 ? netMgr.gameWs : netMgr.hallWs;
    ws.deleteCallfun(cmd);
  }
};

// window.dataMgr = dataMgr;
export default DataMgr;
