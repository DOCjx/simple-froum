export default (state = {
    namespace: "Admin"
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        default:
            return state;
    }
};