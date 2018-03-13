export default (state = {
    namespace: "Login",
    isOnline: false,
    userId: "",
    pwd: "",
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/CHANGEUSERSTATE`:
            const {isOnline} = payload;
            return {
                namespace: "Login",
                isOnline,
                userId: isOnline ? payload.userId : "",
                pwd: isOnline ? payload.pwd : "",
            };
        case `${namespace}/CHANGEVALUE`:
            const {field, value} = payload;
            const {userId, pwd} = state;
            return {
                namespace,
                userId: field == "userId" ? value : userId,
                pwd: field == "pwd" ? value : pwd
            }
        default:
            return state;
    }
};