export default (state = {
    namespace: "Detail",
    articleId: 0,
    article: {},
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/SHOW`:
            const {articleId, article} = payload;
            return {
                namespace,
                article,
                articleId
            }
        default:
            return state;
    }
};