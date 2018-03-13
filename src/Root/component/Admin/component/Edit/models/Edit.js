export default (state = {
    namespace: "Edit",
    isSublime: true,
    article: {}
}, {type, payload}) => {
    const {namespace} = state;
    const nextState = {
        namespace
    };

    switch(type){
        case `${namespace}/CLEAR`:
            return {
                namespace,
                isSublime: true,
                article: {}
            };
        case `${namespace}/VALUECHANGE`: {
            const {isSublime, article} = state;
            const {value, action} = payload;
            article[action] = value;
            return {
                namespace,
                isSublime,
                article
            };
        }
        case `${namespace}/EDIT`:
            const {articleId, pid} = payload;
            let articles = pid ? [{
                    id: 3,
                    title: "我和邻居的日常",
                    auth: "老黑",
                    content: "我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常我和邻居的日常",
                    update: "2018/2/9"
                },{
                    id: 1,
                    title: "灰了，灰了",
                    auth: "小白",
                    content: "灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了灰了，灰了",
                    update: "2018/2/9"
                },{
                    id: 5,
                    title: "局域网才是主战场",
                    auth: "小白",
                    content: "局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场局域网才是主战场",
                    update: "2018/2/9"
                },{
                    id: 2,
                    title: "Web挖矿",
                    auth: "老黑",
                    content: "Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿Web挖矿",
                    update: "2018/2/9"
                },{
                    id: 4,
                    title: "如何优雅的钓鱼",
                    auth: "稻壳er",
                    content: "如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼如何优雅的钓鱼",
                    update: "2018/2/9"
                }] : [{
                    id: 1,
                    title: "你不知道的Javascript，我知道",
                    auth: "小白",
                    content: "你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道你不知道的Javascript，我知道",
                    update: "2018/2/9"
                },{
                    id: 2,
                    title: "css从入门到放弃，踩坑记",
                    auth: "老黑",
                    content: "css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记css从入门到放弃，踩坑记",
                    update: "2018/2/9"
                },{
                    id: 3,
                    title: "BFC全解",
                    auth: "老黑",
                    content: "BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解BFC全解",
                    update: "2018/2/9"
                },{
                    id: 4,
                    title: "这些设计模式可能只是听起来高大上",
                    auth: "稻壳er",
                    content: "这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上这些设计模式可能只是听起来高大上",
                    update: "2018/2/9"
                },{
                    id: 5,
                    title: "回调黑洞？不存在的",
                    auth: "小白",
                    content: "回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的回调黑洞？不存在的",
                    update: "2018/2/9"
            }];
            const article = articles.filter(item => item.id == articleId)[0];
            article.pid = pid;
            return {
                namespace,
                isSublime: false,
                article
            };
        default:
            return state;
    }
};