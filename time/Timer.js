// import moment from 'moment';
import timeList from './timeList';

class Timer {
    constructor() {
        return {
            task: {},
            conn_hall: {},
            conn_game: {},
            conn_both: {},
            login_hall: {},
            game_enter: {},
            game_bet: {},
        };
    }

    // createNewTimer(uid) {
    //     const now = new moment();
    //     timeList[uid] = {
    //         conn_hall: {},
    //         conn_game: {},
    //         login_hall: {},
    //         game_enter: {},
    //         game_bet: {},
    //         conn_both: {},
    //         task: {},

    //         conn_hall_start: now,
    //         conn_hall_end: now,
    //         conn_hall_err: now,
    //         conn_hall_del: now,
    //         conn_game_start: now,
    //         conn_game_end: now,
    //         conn_game_err: now,
    //         conn_game_del: now,
    //         login_hall_start: now,
    //         login_hall_end: now,
    //         login_hall_err: now,
    //         login_hall_del: now,
    //         game_enter_start: now,
    //         game_enter_end: now,
    //         game_enter_err: now,
    //         game_enter_del: now,
    //         game_bet_start: now,
    //         game_bet_end: now,
    //         game_bet_err: now,
    //         game_bet_del: now,

    //         conn_all_start: now,
    //         conn_all_end: now,
    //         conn_all_del: now,

    //         task_start: now,
    //         task_end: now,
    //         task_del: now,
    //     }
    // }
}



export default Timer;