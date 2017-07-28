import protobuf from './protobuf';
import CMD from '../config/CMD';
import Buffer from './Buffer';
var WebSocket = require('websocket').w3cwebsocket;

class NetWork {
  // 构造函数
  constructor(type) {
    // 常用参数
    this.isConnected = false; // 是否已连接
    this.isConnecting = false; // 是否在连接中
    this.isHeart = false; // 是否活跃

    this.type = type; // websocket连接类型: hall, game
    this.ws = null; // websocket对象
    this.cacheBuf = new Buffer();
    this.callBackfun = {};
    this.errBackfun = {};
    this.timeOut = {};
  }

  // 初始化连接
  connect(url, callBack) {
    // console.log('== netWork start connect ==');
    const netWork = this;
    this.ws = new WebSocket(url, 'default-protocol');
    this.ws.binaryType = 'arraybuffer';
    this.url = url;

    this.isConnected = false;
    this.isConnecting = true;
    this.isHeart = false;

    netWork.ws.onopen = () => {
      console.log('-- netWork onopen ---');
      netWork.isConnecting = false;
      netWork.isConnected = true;
      netWork.isHeart = true;
      netWork.onHeart();
      if (callBack) callBack();

      netWork.intervalID = setInterval(() => {
        netWork.sendHeart();
        netWork.readHeart();
      }, 5000);
    };

    netWork.ws.onerror = () => {
      console.log('-- netWork onerror --> ' + netWork.type);
      // console.error('-- netWork onerror --> ' + netWork.type);
      netWork.isConnecting = false;
      netWork.isConnected = false;
      netWork.offHeart();
      netWork.ws = null;
    };

    netWork.ws.onclose = () => {
      console.error('-- netWork onclose -->' + netWork.type);
      netWork.isConnecting = false;
      netWork.isConnected = false;
      netWork.offHeart();
      netWork.ws = null;
    };

    netWork.ws.onmessage = (evt) => {
      // console.log('-- netWork onmsg ---');
      netWork.cacheBuf.copy(evt.data);
      const netPkg = netWork.getFullNetPkg(netWork.cacheBuf);
      netWork.getPro(netWork, netPkg);
    };
  }

  // 关闭websocket
  end() {
    clearInterval(this.intervalID);
    this.ws.close();
  }

  // 发送消息
  sendPro(protocol, buffer, timeout) {
    // if (protocol !== 999) console.log('send: ' + protocol);
    if (protocol !== 999) console.log('send: ' + protocol);
    const len = buffer.c_len + 10;
    buffer.addShort(protocol);
    buffer.addInt(len);
    buffer.addShort(1000);
    buffer.writeShort(2000);

    // if (timeout !== 0) this.addTimer(protocol, timeout);
    this.isConnected && this.ws.send(buffer.arrayBuffer());
  }

  // 添加超时
  addTimer(protocol, timeOut = 10000) {
    console.log('timer' + protocol);
    this.timeOut[protocol] = setTimeout(() => {
      this.errBackfun && this.errBackfun[protocol]('Error timeout');
    }, timeOut);
  }

  // 移除超时
  clearTimer(protocol) {
    clearTimeout(protocol);
  }

  // 收到消息
  getPro(netWork, netPkg) {
    if (!netPkg) return;
    const protocol = netPkg.readShort();
    this.clearTimer(protocol);
    if (protocol !== 999) console.log('get: ' + protocol);
    if (protocol === CMD.ERROR) {
      const errProtocol = netPkg.readShort();
      const errCode = protobuf[CMD.ERROR](netPkg);
      console.log('errProtocol = ' + errProtocol + ' , errCode = ' + errCode);
      if (netWork.errBackfun[errProtocol]) {
        netWork.errBackfun[errProtocol](errCode);
      }
    } else if (netWork.callBackfun[protocol]) {
      const data = protobuf[protocol](netPkg);
      netWork.callBackfun[protocol](data);
    }
  }

  // 监听心跳
  onHeart() {
    this.registerCallfun(CMD.HEART, () => {
      this.isHeart = true;
    });
  }

  // 销毁监听心跳
  offHeart() {
    this.deleteCallfun(CMD.HEART);
  }

  // 发送心跳
  sendHeart() {
    if (this.isConnect) {
      const buffer = new Buffer();
      this.sendPro(CMD.HEART, buffer);
    }
  }

  // 读取心跳
  readHeart() {
    if (!this.isHeart) {
      this.end();
    }
  }

  // 注册监听
  registerCallfun(cmd, cbfun, errfun) {
    this.callBackfun[cmd] = cbfun;
    if (errfun != null) this.errBackfun[cmd] = errfun;
  }

  // 删除监听
  deleteCallfun(cmd) {
    delete this.errBackfun[cmd];
    delete this.callBackfun[cmd];
  }

  // 获取完整包体
  getFullNetPkg(cacheBuf) {
    if (cacheBuf.c_len < 10) return null;
    if (cacheBuf.readShort() !== 1000) {
      cacheBuf.reset();
      return null;
    }
    const len = cacheBuf.readInt();
    if (len > cacheBuf.c_len) {
      cacheBuf.clear();
      return null;
    }
    if (cacheBuf.getShort(len) !== 2000) {
      cacheBuf.reset();
      return null;
    }
    return cacheBuf.getSub(len);
  }
}

export default NetWork;
