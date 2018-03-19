import config from '../../common/config';
const {rootModel} = config;

export default (state = {
    namespace: "Root",
    model: rootModel,
    userInfo: {
        userId: "",
        pwd: "",
    }
}, {type, payload}) => {

    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/MODELCHANGE`:
            const {model, data} = payload;
            const {userInfo} = data;
            nextState.model = model;
            nextState.userInfo = userInfo ? data.userInfo : state.userInfo;
            return nextState;
        default:
            return state;
    }
};

        // userId: "123",
        // pwd: "123",
        // email: "l@gmail.com",
        // role: "auth",
        // isOnline: true