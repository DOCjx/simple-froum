export default (state = {
    namespace: "Comment",
    comments: [],
    sendValue: "",
    model: ""
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/ONSEND`: {
            const {comments, model} = state;
            const {userId, sendValue, time} = payload;
            comments.push({
                id: Math.random() * 10,
                userId,
                comment: sendValue,
                time
            });
            return {
                namespace,
                sendValue: "",
                comments,
                model
            };
        }
        case `${namespace}/CHANGESENDVALUE`: {
            const {comments, model} = state;
            const sendValue = payload.replace(/(^\s+)|(\s+$)/g, "");
            return {
                namespace,
                comments,
                sendValue,
                model
            };
        }
        case `${namespace}/ONLOAD`: {
            const {comment, model} = payload;
            return {
                namespace,
                sendValue: "",
                comments: comment || [],
                model
            };
        }
        default:
            return {
                namespace,
                comments: state.comments,
                sendValue: "",
                model: state.model
            };
    }
};