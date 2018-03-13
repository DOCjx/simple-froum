export default (state = {
    namespace: "Articles",
    articles: [{
        id: 1,
        title: "BFC全解",
        auth: "老黑",
        update: "2018/2/1",
        pid: 0
    },{
        id: 2,
        title: "css从入门到放弃，踩坑记",
        auth: "老黑",
        update: "2018/1/30",
        pid: 0
    },{
        id: 3,
        title: "Web挖矿",
        auth: "老黑",
        update: "2018/1/26",
        pid: 1
    },{
        id: 4,
        title: "我和邻居的日常",
        auth: "老黑",
        update: "2018/1/16",
        pid: 1
    },{
        id: 5,
        title: "大前端背景下的技能树",
        auth: "老黑",
        update: "2018/1/3",
        pid: 0
    }]
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };
    switch(type){
        case `${namespace}/DELETE`:
            const {articles} = state;
            return {
                namespace,
                articles: articles.filter(item => item.id != payload)
            };
        default:
            return state;
    }
};