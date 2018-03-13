import { connect } from 'react-redux';
import UI from './UI';

export default connect((App) => ({Page: App.Page, Active: App.Root.model}), (dispatch) => ({
    onCurrentChange({i, Active, pages, total}){
        let end = i * 5 - 1;
        end = end >= total ? total : end;
        let star = end - 4;
        star = star <= 0 ? 0 : star;
        dispatch({
            type:"List/LOAD",
            payload: {
                star,
                end,
                model: Active
            }
        });
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
        let end = step * 5 - 1;
        end = end >= total ? total : end;
        let star = end - 4;
        star = star <= 0 ? 0 : star;
        dispatch({
            type:"List/LOAD",
            payload: {
                star,
                end,
                model: Active
            }
        });
        dispatch({
            type:"Page/CURRENTCHANGE",
            payload: step
        });
    }
}))(UI);