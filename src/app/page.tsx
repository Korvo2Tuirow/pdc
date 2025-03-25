import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="fixed top-0 left-0 w-full h-screen flex flex-wrap">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="w-[10%] aspect-square bg-black border border-[rgb(37,31,1)] transition-all duration-300 animate-pulse-custom hover:bg-[rgb(34,31,4)]"

            style={{
              animationDelay: `${Math.random() * 120}s`, // Delay aleatório de 0 a 3s
            }}

          ></div>
        ))}
      </section>

      <div className="z-10 flex p-10 flex-col absolute w-full justify-center items-center pointer-events-none ">
  <Image   
  src={"/logo3.png"} width={800} height={800} alt="logo"
   />

   <div className="bg-black/30 backdrop-blur-md m-20 shadow-2xl shadow-yellow-400 border border-yellow-300 text-white p-10 rounded-lg w-full max-w-[1000px]  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing e.</div>
   
   <div className="bg-black/30 backdrop-blur-md shadow-2xl shadow-yellow-400 border border-yellow-300 text-white p-10 rounded-lg w-full max-w-[1000px]  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit debitis voluptatibus mollitia quasi voluptatem sed maiores perspiciatis, obcaecati iste ipsam ad aliquam qui rerum at commodi.it amet consectetur adipisicing e.</div>
</div>

<style>
        {`
          @keyframes pulseCustom {
            0%, 100% { background-color: black; }
            50% { background-color: rgb(34,31,4); }
          }
          .animate-pulse-custom {
            animation: pulseCustom 10s infinite;
          }
        `}
      </style>


    </div>

  );
}
