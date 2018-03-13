import React from 'react';
import './style.less';
import _ from 'lodash';

export default ({Alert}) => {
    const {words, isOpen} = Alert;
    return (
        <div>
            {
                isOpen ?
                    <section id = "alert">
                        <div id = "alert-con">
                            <div>稻壳er提醒您</div>
                            <div>{words}</div>
                        </div>
                    </section>
                : ""
            }
        </div>
    );
};