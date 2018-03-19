export default (state = {
    namespace: "Page",
    total: 0,
    current: 1,
    pages: 0
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/CURRENTCHANGE`:
            const {total, pages} = state;
            return {
                namespace,
                total,
                current: payload,
                pages
            };
        case `${namespace}/SHOW`:
            nextState.total = payload;
            nextState.pages = Math.ceil(payload / 5);
            nextState.current = 1;
            return nextState;
        default:
            return state;
    }
};