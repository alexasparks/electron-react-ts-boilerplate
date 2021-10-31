import React, { useEffect } from 'react';

export const Test: React.FC = () => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.electron.sendHelloWorldEvent('test');
    }, []);

    return (
        <>
            <div>Hello World from Test component!</div>
        </>
    );
};

export default Test;
