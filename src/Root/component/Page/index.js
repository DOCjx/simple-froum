import { connect } from 'react-redux';
import UI from './UI';
import fetch from '../../../common/fetch.js';

const loadArticles = async ({dispatch, model, start, end}) => {
    const articles = await fetch(`articles/${model}`);
    dispatch({
        type:"List/LOAD",
        payload: {
            articles: articles.slice(start, end)
        }
    });
    // dispatch({
    //     type:"Page/SHOW",
    //     payload: articles.length
    // });
};

export default connect((App) => ({Page: App.Page, Active: App.Root.model}), (dispatch) => ({
    onCurrentChange({i, Active, pages, total}){
        let end = i * 5;
        let start = end - 5;
        end = end >= total ? total : end;
        start = start <= 0 ? 0 : start;
        loadArticles({dispatch, model: Active, start, end});
        dispatch({
            type:"Page/CURRENTCHANGE",
            payload: i
        });
    },
    onStepChange({type, current, pages, Active, total}){
        //点击下一页或者上一页按钮时得到当前页数
        let step = type == "next" ? ++current : --current;
        step = step > pages ? pages : step;
        step = step <= 0 ? 1 : step;
        //计算加载文章
        let end = step * 5;
        let start = end - 5;
        end = end >= total ? total : end;
        start = start <= 0 ? 0 : start;
        loadArticles({dispatch, model: Active, start, end});
        dispatch({
            type:"Page/CURRENTCHANGE",
            payload: step
        });
    }
}))(UI);