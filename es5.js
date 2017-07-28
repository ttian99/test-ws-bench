console.log('=======hahaha========');
import dataMgr from './net.es6/dataMgr';
import netMgr from './net.es6/netMgr';

netMgr.connectSvr();

const timeInterval = setInterval(() => {
    if (netMgr.isAllConnected) {
        console.log('== all connected ==');
    }
}, 1000);
