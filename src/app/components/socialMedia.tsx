import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const SocialMedia = () => {
    
    return (

        <div className='flex flex-col justify-center p-8 items-center w-full max-w-[1000px] gap-6 bg-white rounded-lg z-10 '>

            <h1 className="  text-gray-500 font-bold    rounded-lg flex justify-center  w-full max-w-[1000px]  text-2xl">Sigam em nossas redes sociais</h1>

            <video width="1000" height="240" controls autoPlay muted loop className='pointer-events-auto flex justify-center items-center lg:mt-6  '>
                <source src="/PDCvideo.mp4" type="video/mp4" />
            </video>

            <div className='flex flex-wrap justify-center py-5 mb- items-center gap-10  h-auto'>

                <Link href={"https://www.instagram.com/hamburgueria_point_docanal"} target='_blank'>
                    <Image src={"/instalogo.png"} alt='instagram' width={400} height={100} className='rounded-lg pointer-events-auto' />
                </Link>

                <Link href={"https://www.facebook.com/pointdocanal"} target='_blank'>
                    <Image src={"/fblogo.png"} alt='instagram' width={400} height={100} className='rounded-lg pointer-events-auto ' />
                </Link>

            </div>

        </div>

    );
}

