import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const SocialMedia = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full max-w-[1000px] mt-16  bg-white rounded-t-lg '>

            <h1 className="  text-gray-500 font-bold   pt-8  rounded-lg flex justify-center  w-full max-w-[1000px]  text-2xl">Sigam em nossas redes sociais</h1>

            <hr />

            <div className='flex flex-wrap justify-center py-5 mb- items-center gap-10  h-64'>

                <Link href={"https://www.instagram.com/hamburgueria_point_docanal"} target='_blank'>
                    <Image src={"/instalogo.png"} alt='instagram' width={400} height={100} className='rounded-lg pointer-events-auto' />
                </Link>

                <Link href={"https://www.facebook.com/pointdocanal"} target='_blank'>
                    <Image src={"/fblogo.png"} alt='instagram' width={400} height={100} className='rounded-lg pointer-events-auto ' />
                </Link>

            </div>
            <video width="1000" height="240" controls autoPlay muted loop className='pointer-events-auto flex justify-center items-center lg:mt-16 mt-28 shadow-2xl'>
                <source src="/PDCvideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

