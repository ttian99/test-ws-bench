'use strict';

var _netMgr = require('./net/netMgr');

var _netMgr2 = _interopRequireDefault(_netMgr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('==start ==='); // import dataMgr from './net/data-mgr';

_netMgr2.default.connectSvr();

console.log('==start ===');
var timeInterval = setInterval(function () {
    if (_netMgr2.default.isAllConnected) {
        console.log('== all connected ==');
    }
}, 1000);
