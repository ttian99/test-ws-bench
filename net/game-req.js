import CMD from '../config/CMD';
import Buffer from './Buffer';
// import netMgr from './netMgr';
import dataList from '../dataList';

const gameReq = {};

// 发送请求
gameReq.sendReq = (uid, cmd, buffer) => {
  const netMgr = dataList[uid].netMgr;
  netMgr.gameWs.sendPro(cmd, buffer);
};

// 进入游戏
gameReq[CMD.GAME_ENTER] = (uid, cmd, data) => {
  const buffer = new Buffer();
  buffer.writeUTF(data.uid);
  buffer.writeUTF(data.roomNum);
  gameReq.sendReq(uid, cmd, buffer);
};
// 离开游戏
gameReq[CMD.GAME_OUT] = (uid, cmd, data) => {
  const buffer = new Buffer();
  buffer.writeUTF(data.uid);
  gameReq.sendReq(uid, cmd, buffer);
};
// 自己下注
gameReq[CMD.GAME_BET] = (uid, cmd, data) => {
  const buffer = new Buffer();
  buffer.writeUTF(data.uid);
  buffer.writeInt(data.bet.led);
  buffer.writeInt(data.bet.idle);
  buffer.writeInt(data.bet.flat);
  buffer.writeInt(data.bet.twoLed);
  buffer.writeInt(data.bet.twoIdle);
  gameReq.sendReq(uid, cmd, buffer);
};
// 申请上庄
gameReq[CMD.REQ_BANK] = (uid, cmd, data) => {
  const buffer = new Buffer();
  buffer.writeUTF(data.uid);
  gameReq.sendReq(uid, cmd, buffer);
};
// 申请下庄
gameReq[CMD.CANCEL_BANK] = (uid, cmd, data) => {
  const buffer = new Buffer();
  buffer.writeUTF(data.uid);
  gameReq.sendReq(uid, cmd, buffer);
};

// 申请重连
gameReq[CMD.GAME_RECONNECT] = (uid, cmd, data) => {
  const buffer = new Buffer();
  buffer.writeUTF(data.uid);
  buffer.writeUTF(data.roomNum);
  gameReq.sendReq(uid, cmd, buffer);
};

export default gameReq;
