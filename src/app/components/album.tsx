"use client"
import Anima from "@/utils/anima";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Album = () => {

  const teste = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observado = new IntersectionObserver(([entries]) => {  

      if(entries.isIntersecting) { 
        teste.current?.classList.add("slide-in-left");
      }
        console.log(entries);   
           }, {threshold: 0.1});              
       

        observado.observe(teste.current!);

  }, []);



  return (
    <>

   

      <section ref={teste} className=" hidden opacity-0  md:flex max-h-[300px] bg-black/30  flex-col  w-auto max-w-[1000px] my-14 justify-center items-center text-white shadow-2xl shadow-blue-800 " >
      

        <div className="flex gap-4 rounded-lg  overflow-x-auto cursor-pointer pointer-events-auto">
          <Image src={"/h01.jpg"} width={300} height={1} alt="h1" className="shadow-2xl shadow-blue-800 " />
          <Image src={"/h04.jpg"} width={300} height={1} alt="h4" className="shadow-2xl shadow-blue-800 " />
          <Image src={"/h03.jpg"} width={300} height={1} alt="h3" className="shadow-2xl shadow-blue-800 " />
          <Image src={"/pr01.jpg"} width={300} height={1} alt="h5" className="shadow-2xl shadow-blue-800 " />
          <Image src={"/h05.jpg"} width={300} height={1} alt="h5" className="shadow-2xl shadow-blue-800 " />
        </div>
       

      </section>    
     

     
      <section ref={teste} className=" flex opacity-0 md:hidden bg-black/30 gap-5  flex-col  my-24 justify-center items-center text-white  w-auto max-w-[1000px]" >

        <div className="flex gap-3 w-full">
          <Image src={"/h01.jpg"} width={150} height={1} alt="h1" className="shadow-2xl shadow-blue-400 border border-blue-800 rounded-lg" />
          <Image src={"/h04.jpg"} width={150} height={1} alt="h4" className="shadow-2xl shadow-blue-400 border border-blue-800 rounded-lg" />
        </div>
        <Image src={"/h03.jpg"} width={300} height={1} alt="h3" className="shadow-2xl shadow-blue-400 border border-blue-800 rounded-lg" />
        <div className="flex gap-3">
          <Image src={"/pr01.jpg"} width={150} height={1} alt="h5" className="shadow-2xl shadow-blue-400 border border-blue-800 rounded-lg" />
          <Image src={"/h05.jpg"} width={150} height={1} alt="h5" className="shadow-2xl shadow-blue-400 border border-blue-800 rounded-lg" />
        </div>

      </section>
     

    </>
  )
}

export default Album;

/*
       <section className="bg-black/30 gap-5 flex overflow-x-hidden sticky my-24 justify-center items-center text-white p-5  w-auto max-w-[1000px]" >
 
           <div className="flex gap-3 w-full overflow-x-auto cursor-pointer pointer-events-auto">
             <Image src={"/h01.jpg"} width={400} height={1} alt="h1" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
             <Image src={"/h04.jpg"} width={400} height={1} alt="h4" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
             <Image src={"/h03.jpg"} width={400} height={1} alt="h3" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
             <Image src={"/pr01.jpg"} width={400} height={1} alt="h5" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
             <Image src={"/h05.jpg"} width={400} height={1} alt="h5" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
           </div>
         </section>

*/