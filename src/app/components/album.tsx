import Image from "next/image";

const Album = () => {
  return (
    <>

      <section className="hidden md:flex  bg-black/30 gap-5 flex-col overflow-x-hidden  my-14 justify-center items-center text-white  w-[1000px]" >

        <div className="flex gap-3  overflow-x-auto cursor-pointer pointer-events-auto">
          <Image src={"/h01.jpg"} width={500} height={1} alt="h1" className="shadow-2xl shadow-yellow-400 " />
          <Image src={"/h04.jpg"} width={600} height={1} alt="h4" className="shadow-2xl shadow-yellow-400 " />
          <Image src={"/h03.jpg"} width={550} height={1} alt="h3" className="shadow-2xl shadow-yellow-400 " />
          <Image src={"/pr01.jpg"} width={850} height={1} alt="h5" className="shadow-2xl shadow-yellow-400 " />
          <Image src={"/h05.jpg"} width={600} height={1} alt="h5" className="shadow-2xl shadow-yellow-400 " />
        </div>

      </section>


      <section className="flex md:hidden bg-black/30 gap-5  flex-col  my-24 justify-center items-center text-white p-5  w-auto max-w-[1000px]" >

        <div className="flex gap-3 w-full">
          <Image src={"/h01.jpg"} width={150} height={1} alt="h1" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
          <Image src={"/h04.jpg"} width={150} height={1} alt="h4" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
        </div>
        <Image src={"/h03.jpg"} width={300} height={1} alt="h3" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
        <div className="flex gap-3">
          <Image src={"/pr01.jpg"} width={150} height={1} alt="h5" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
          <Image src={"/h05.jpg"} width={150} height={1} alt="h5" className="shadow-2xl shadow-yellow-400 border border-yellow-300" />
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