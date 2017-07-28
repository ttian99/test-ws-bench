// import dataMgr from './data-mgr';
import dataList from '../dataList';
import CMD from '../config/CMD';

const mockReq = {};

mockReq.reqLoginHall = (uid) => {
    // console.log(uid);
    // console.log(JSON.stringify(dataList[uid]));
    dataList[uid].dataMgr.reqSvr(uid, CMD.LOGIN_HALL, {
        sessionid: '',
        uid: uid,
        securityCode: '8888',
        invitationCode: '',
    });
};

mockReq.reqGameEnter = (uid) => {
    console.log('req GameEnter');
    dataList[uid].dataMgr.reqSvr(uid, CMD.GAME_ENTER, {
        uid: uid,
        roomNum: 'A01',
    }, 'game');
}

mockReq.reqBank = (uid) => {
    dataList[uid].dataMgr.reqSvr(uid, CMD.REQ_BANK, { uid: uid }, 'game');
}

mockReq.reqBet = (uid) => {
    const data = {};
    data.uid = uid;
    data.bet = {
        led: 10000,
        idle: 20000,
        flat: 30000,
        twoLed: 40000,
        twoIdle: 69999
    };
    console.log('uid = ' + uid);
    dataList[uid].dataMgr.reqSvr(uid, CMD.GAME_BET, data, 'game');
}


export default mockReq;