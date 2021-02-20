import React from 'react';

const CommonComponentExample = ({props, subtitle}: any) => {
    return (
        <>
            <h1>Texto H1</h1>
            <h2>{subtitle || 'subtitle'}</h2>
        </>
    );
};

export default CommonComponentExample;