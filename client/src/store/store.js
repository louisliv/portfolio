import {currentStateReducer} from './current-state';
// import {authReducer} from './auth';
// import {gameReducer} from './games';
// import {myGameReducer} from './my-games';
// import {systemReducer} from './systems';
// import {roomReducer} from './rooms';
// import {notificationReducer} from './notifications';

function appStore(state = {}, action) {
    return {
        currentState: currentStateReducer(state.currentState, action),
        // currentUser: authReducer(state.currentUser, action),
        // games: gameReducer(state.games, action),
        // systems: systemReducer(state.systems, action),
        // myGames: myGameReducer(state.myGames, action),
        // rooms: roomReducer(state.rooms, action),
        // notifications: notificationReducer(state.notifications, action)
    }
}

export default appStore;