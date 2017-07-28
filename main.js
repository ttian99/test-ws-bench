// import async from 'async';
import ep from './event-proxy';
import fs from 'fs';
import NetMgr from './net/net-mgr-test';
import DataMgr from './net/data-mgr-test';
import CMD from './config/CMD';
import mockReq from './net/mock-req';
import cfg from './config/cfg';
import dataList from './dataList';
import timeList from './time/timeList';
import timeMgr from './time/time-mgr';


cfg.qs.debug = true;
cfg.qs.host = '192.168.0.99';
cfg.init();

console.log('==start ===');

let count = 0; // 用于计数

const main = () => {
    const uid = getUid();

    timeMgr.createNewTimer(uid);
    timeMgr.setStartTime(uid, 'task');

    dataList[uid] = { uid: uid };
    dataList[uid].userInfo = {};
    dataList[uid].netMgr = new NetMgr(uid);
    dataList[uid].dataMgr = new DataMgr(uid);

    connected(uid);
};

function connected(uid) {
    timeMgr.setStartTime(uid, 'task');
    timeMgr.setStartTime(uid, 'conn_hall');
    timeMgr.setStartTime(uid, 'conn_game');
    dataList[uid].netMgr.connectSvr(
        () => {
            timeMgr.setEndTime(uid, 'conn_hall');
        },
        () => {
            timeMgr.setEndTime(uid, 'conn_game');
        }
    );

    onListen(uid);

    dataList[uid].isConnected = false;
    const timeInterval = setInterval(() => {
        if (dataList[uid].netMgr.isAllConnected() && !dataList[uid].isConnected) {
            console.log('== both connected ==');
            dataList[uid].isConnected = true;
            clearInterval(timeInterval);
            timeMgr.setStartTime(uid, 'login_hall');
            mockReq.reqLoginHall(uid);
        }
    }, 1000);
}


const regCallfun = function (uid, cmd, succFunc, errFunc) {
    dataList[uid].dataMgr.registerCallfun(cmd, (data) => {
        succFunc && succFunc(data);
    }, (err) => {
        errFunc && errFunc(err);
    });
}

// 监听回调
const onListen = function (uid) {
    regCallfun(uid, CMD.LOGIN_HALL, (data) => {
        console.log('===> login hall Succ== ');
        timeMgr.setEndTime(uid, 'login_hall');
        dataList[uid].userInfo = data;
        timeMgr.setStartTime(uid, 'game_enter');
        mockReq.reqGameEnter(data.uid);
    }, (err) => {
        console.log('==> login hall err == ' + err);
        timeMgr.setEndTime(uid, 'login_hall');
        ep.emit('over', err);
    });
    regCallfun(uid, CMD.GAME_ENTER, (data) => {
        console.log('===> game entry Succ== ');
        timeMgr.setEndTime(uid, 'game_enter');
        timeMgr.setStartTime(uid, 'game_bet');
        // mockReq.reqBank(userData.uid);
        console.log('--uid = ' + uid);
        mockReq.reqBet(dataList[uid].userInfo.uid);
    }, (err) => {
        console.log('==> game entry err : ' + err);
        timeMgr.setEndTime(uid, 'game_enter');
        ep.emit('over', err);
    });

    regCallfun(uid, CMD.GAME_BET, (data) => {
        console.log('==> game_bet succ : ' + JSON.stringify(data));
        timeMgr.setEndTime(uid, 'game_bet');
        timeMgr.setEndTime(uid, 'task');
        ep.emit('over', data);
    }, (err) => {
        console.log('==> game_bet err : ' + err);
        timeMgr.setEndTime(uid, 'game_bet');
        timeMgr.setEndTime(uid, 'task');
        ep.emit('over', err);
    });

    regCallfun(uid, CMD.REQ_BANK, (data) => {
        console.log('==> req_bank succ : ' + JSON.stringify(data));
    }, (err) => {
        console.log('==> req_bank err : ' + err);
        ep.emit('over', err);
    });
}

// 模拟用户id
function getUid() {
    count++;
    return (13200000000 + count).toString();
}


const totalTimes = 30;
// async.times();

fs.writeFileSync('./time.json', '{}', 'utf8');

ep.onListen('over', totalTimes, (arr) => {
    console.log('=== all task over ===');
    fs.writeFileSync('./time.json', JSON.stringify(timeList, null, 4), 'utf8');
});

// 调用10次
for (let i = 1; i <= totalTimes; i++) {
    try {
        main();
    } catch (error) {
        console.log('**** unExcepte Error **** ' + error);
    }
}