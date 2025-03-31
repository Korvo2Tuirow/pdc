import Image from "next/image"

export const Banner = () =>{
    return(
        <>
         <Image
                  className="rotate-scale-down-ver"
                  src={"/logo3.png"} width={800} height={800} alt="logo"
                />
                </>
    )
}