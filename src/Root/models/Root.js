export default (state = {
    namespace: "Root",
    model: "web",
    userInfo: {}
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