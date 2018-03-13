export default (state = {
    namespace: "List",
    articles: [{
            id: 1,
            title: "你不知道的Javascript，我知道",
            auth: "小白"
        },{
            id: 2,
            title: "css从入门到放弃，踩坑记",
            auth: "老黑"
        },{
            id: 3,
            title: "BFC全解",
            auth: "老黑"
        },{
            id: 4,
            title: "这些设计模式可能只是听起来高大上",
            auth: "稻壳er"
        },{
            id: 5,
            title: "回调黑洞？不存在的",
            auth: "小白"
    }]
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/LOAD`:
            nextState.articles = payload.model == "fun" ? [{
                    id: 3,
                    title: "我和邻居的日常",
                    auth: "老黑"
                },{
                    id: 1,
                    title: "灰了，灰了",
                    auth: "小白"
                },{
                    id: 5,
                    title: "局域网才是主战场",
                    auth: "小白"
                },{
                    id: 2,
                    title: "Web挖矿",
                    auth: "老黑"
                },{
                    id: 4,
                    title: "如何优雅的钓鱼",
                    auth: "稻壳er"
                }] : [{
                    id: 1,
                    title: "你不知道的Javascript，我知道",
                    auth: "小白"
                },{
                    id: 2,
                    title: "css从入门到放弃，踩坑记",
                    auth: "老黑"
                },{
                    id: 3,
                    title: "BFC全解",
                    auth: "老黑"
                },{
                    id: 4,
                    title: "这些设计模式可能只是听起来高大上",
                    auth: "稻壳er"
                },{
                    id: 5,
                    title: "回调黑洞？不存在的",
                    auth: "小白"
            }];
            return nextState;
        default:
            return state;
    }
};