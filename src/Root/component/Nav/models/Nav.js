export default (state = {
    namespace: "Nav",
    urls: [
        {name: "前端", model: "web"},
        {name: "信安", model: "fun"}
    ]
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