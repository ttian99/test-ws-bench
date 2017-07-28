import netMgr from '../net/netMgr';
import svrData from './test-svr-data';

// const testReq = {};

const testReq = (cmd, reqData) => {
  console.log('==> receive test req cmd: ' + cmd);
  console.log(reqData);
  const resData = svrData[cmd];
  netMgr.hallWs.callBackfun[cmd](resData);
};

export default testReq;
