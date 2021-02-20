import React from 'react';
import CommonComponentExample from '../Common/CommonComponetExample';

const PageExample = ({props, subtitle}: any) => {
    return (
        <>
            <h2>Title</h2>

            <CommonComponentExample subtitle={subtitle}/>
        </>
    );
};

export default PageExample;