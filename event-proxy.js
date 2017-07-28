import EventProxy from 'eventproxy';

const ep = new EventProxy();

// 监听
// ep.after('mission_over', files.length, function (list) {
//   // 在所有文件的异步执行结束后将被执行
//   // 所有文件的内容都存在list数组中
// });

// 触发
// for (var i = 0; i < files.length; i++) {
//   fs.readFile(files[i], 'utf-8', function (err, content) {
//     // 触发结果事件
//     ep.emit('mission_over', content);
//   });
// }

ep.onListen = (name, count, cb) => {
    ep.after(name, count, cb);
};

export default ep;