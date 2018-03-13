export default (state = {
    namespace: "Comment",
    comments: [{
        id: 0,
        userId: "小黑",
        comment: "我是小黑我是小黑我是小黑我是小黑我是小黑我是小黑我是小黑",
        time: "2018/1/6",
    },{
        id: 1,
        userId: "小白",
        comment: "我是小白我是小白我是小白我是小白我是小白我是小白我是小白",
        time: "2018/1/6",
    },{
        id: 2,
        userId: "稻壳er",
        comment: "我是稻壳er我是稻壳er我是稻壳er我是稻壳er我是稻壳er我是稻壳er我是稻壳er",
        time: "2018/1/6",
    },{
        id: 3,
        userId: "老白",
        comment: "我是老白我是老白我是老白我是老白我是老白我是老白我是老白",
        time: "2018/1/6",
    }],
    sendValue: ""
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    const {comments} = state;
    switch(type){
        case `${namespace}/ONSEND`:
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
                comments
            };
        case `${namespace}/CHANGESENDVALUE`:
            return {
                namespace,
                comments,
                sendValue: payload
            };
        default:
            return state;
    }
};