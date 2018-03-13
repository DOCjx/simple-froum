export default (state = {
    namespace: "Info",
}, {type, payload}) => {
    const {namespace} = state;

    switch(type){
        case `${namespace}/CLEAR`:
            return {namespace};
        case `${namespace}/VALCHANGE`:
            const {userIdInfo, pwdInfo, emailInfo} = state;
            const {action, value} = payload;
            const nextState = {
                namespace,
                userIdInfo,
                pwdInfo,
                emailInfo
            };
            nextState[action] = value;
            return nextState;
        default:
            return state;
    }
};