import timeList from './timeList';
import Timer from './Timer';

class TimeMgr {
    createNewTimer(uid) {
        timeList[uid] = new Timer();
    }

    setTime(uid, key, subType, time) {
        const theTime = time ? time : new Date();
        timeList[uid][key][subType] = theTime;
    }

    getTime(uid, key, subType) {
        return timeList[uid][key][subType].getTime();
    }

    setDelTime(uid, key) {
        const del = this.getTime(uid, key, 'end') - this.getTime(uid, key, 'start');
        this.setTime(uid, key, 'del');
        console.log(`### uid=${uid} key=${key} del=${del}`);
    }

    setStartTime(uid, key) {
        this.setTime(uid, key, 'start');
    }

    setEndTime(uid, key) {
        this.setTime(uid, key, 'end');
        this.setDelTime(uid, key);
    }

    setErrtime(uid, key) {
        this.setTime(uid, key);
        // console.log(`### uid=${uid} key=${key} err`)
    }
}

const timeMgr = new TimeMgr();

export default timeMgr;
