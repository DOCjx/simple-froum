export default (state = {
    namespace: "Alert",
    words: "",
    isOpen: false,
    stack: []
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/SHOW`:
            return {
                namespace,
                words: payload,
                isOpen: true,
                stack: state.stack
            };
        case `${namespace}/CLOSE`:
            const {stack, words} = state;
            stack.push(words);//保存log
            return {
                namespace,
                words: "",
                isOpen: false,
                stack
            };
        default:
            return state;
    }
};