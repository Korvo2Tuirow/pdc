import Image from "next/image"

export const Banner = () =>{
    return(
        <>
         <Image
                  className="rotate-scale-down-ver mt-[-50px] sticky top-0 "
                  src={"/logo3.png"} width={800} height={800} alt="logo"
                />
                </>
    )
}