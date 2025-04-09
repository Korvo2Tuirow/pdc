import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const SocialMedia = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full max-w-[1000px] mt-16'>
            <div className='flex flex-wrap justify-center items-center gap-10'>
            <Link href={"https://www.instagram.com/hamburgueria_point_docanal"} target='_blank'>
                <Image src={"/instalogo.png"} alt='instagram' width={400} height={100} className='rounded-lg pointer-events-auto'/>
            </Link>

            <Link href={"https://www.facebook.com/pointdocanal"} target='_blank'>
                <Image src={"/fblogo.png"} alt='instagram' width={400} height={100} className='rounded-lg pointer-events-auto' />
            </Link>

            </div>
            <video width="1000" height="240" controls autoPlay muted loop className='pointer-events-auto flex justify-center items-center mt-16 shadow-2xl'>
                <source src="/PDCvideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

