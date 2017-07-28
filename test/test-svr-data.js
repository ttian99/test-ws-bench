import CMD from '../config/CMD';

const svrData = {};

svrData[CMD.NOTIFY_PUSH] = [
  '1.真的假的师傅的师傅开始了的发生的',
  '2.反水我同类色发生的领导圣诞快乐房间',
  '3.陪我让我不看书的房间是达芬奇的',
];

svrData[CMD.GET_BANNER_PHOTO] = {
  size: 4,
  arr: [
    { gotoUrl: '', photoUrl: '' },
    { gotoUrl: '', photoUrl: '' },
    { gotoUrl: '', photoUrl: '' },
    { gotoUrl: '', photoUrl: '' },
  ],
};

export default svrData;
