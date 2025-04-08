import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}`;
    const linkIfood = `${process.env.NEXT_PUBLIC_IFOOD}`;
  
    return ( 
        <nav className="bg-black/10 flex justify-center items-center text-lg text-white p-5  rounded-lg w-full max-w-[1000px]">
        {/*
        <div className="flex-1 flex">
         
          <a href="#qsomo" className="cursor-pointer pointer-events-auto bg-yellow-300 text-black backdrop-blur-md border-2 text-lg border-yellow-400 p-1 rounded-lg ">Quem somos !</a>
        
        <a href="#qsomo" className="cursor-pointer pointer-events-auto bg-yellow-300 text-black backdrop-blur-md border-2 text-lg border-yellow-400 p-1 rounded-lg">Cardapio</a>
         

        </div> */}

        <div className="bg-red-500 p-4 rounded-full ">

          <Link href={linkIfood} target="_blank" className="cursor-pointer pointer-events-auto">
            <Image
              src={"/ifood-logo-7.png"}
              width={80}
              height={80}
              alt="ifood"
              className="cursor-pointer pointer-events-auto"
            />
          </Link>
        </div>


        <Link href={linkZap} target="_blank" className="cursor-pointer pointer-events-auto">
          <Image
            src={"/whatsapp1.png"}
            width={120}
            height={120}
            alt="whtassapp"
            className="p-5 rounded-lg"
          />
        </Link>

      </nav>
     );
}
 
export default NavBar;