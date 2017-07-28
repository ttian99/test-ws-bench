import netMgr from './netMgr';
import hallReq from './hall-req';
// import hallRes from './hall-res';
// import testReq from '../test/test-req';
import gameReq from './game-req';

const dataMgr = {
  isDebug: false,
};

// 发起ws请求
dataMgr.reqSvr = (cmd, data, type, isDebug) => {
  if (dataMgr.isDebug || isDebug) {
    testReq(cmd, data);
  } else {
    if (type === 'game') {
      gameReq[cmd](cmd, data);
    } else {
      hallReq[cmd](cmd, data);
    }
  }
};

// 注册监听
dataMgr.registerCallfun = (cmd, succFunc, errFunc) => {
  netMgr.hallWs.registerCallfun(cmd, (data) => {
    console.log(cmd + ' succ');
    console.log(data);
    // hallRes[cmd] && hallRes[cmd](data);
    succFunc && succFunc(data);
  }, (err) => {
    console.log(cmd + ' err');
    console.error(err);
    // hallRes[111](err);
    errFunc && errFunc(err);
  });
};

// 取消监听
dataMgr.deleteCallfun = (cmd) => {
  netMgr.hallWs.deleteCallfun(cmd);
};

// window.dataMgr = dataMgr;
export default dataMgr;
