import React from 'react';
export const VideoPDC = () => {
    return (
        <video width="1000" height="240" controls autoPlay muted loop className='pointer-events-auto flex justify-center items-center mt-16 shadow-2xl shadow-blue-400'>
            <source src="/PDCvideo.mp4" type="video/mp4" />
        </video>
    );
}

