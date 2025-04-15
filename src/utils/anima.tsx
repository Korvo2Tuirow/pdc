"use client"

import React, { useEffect, useRef } from "react";

export type Props =
    {
        children: React.ReactNode;
        from?: 'left' | 'right';

    }


const Anima = ({ children, from }: Props) => {

    const teste = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observado = new IntersectionObserver(([entries]) => {

            if (entries.isIntersecting) {
                if (teste.current) {                    
                        teste.current?.classList.add(...(from === 'left' ? ['slide-in-left'] : ['slide-in-right']));
                    }
                }

                console.log(entries);
            
        }, { threshold: 0.1 });


        observado.observe(teste.current!);
       

    }, []);


    return (
        <div className="opacity-0 flex justify-center items-center w-full"
            ref={teste}
        >
            {children}
        </div>
    )


}

export default Anima;