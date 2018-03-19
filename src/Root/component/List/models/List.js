export default (state = {
    namespace: "List",
    articles: []
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/LOAD`:
            nextState.articles = payload.articles;
            return nextState;
        default:
            return state;
    }
};