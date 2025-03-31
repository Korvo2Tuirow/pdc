import Image from "next/image";
import { Container } from "./components/containers/containers";

export default function Home() {
  return (
    <div>
      <section className="fixed top-0 left-0 w-full h-screen flex flex-wrap">
        {Array.from({ length: 500 }).map((_, i) => (
          <div
            key={i}
            className="w-[10%] aspect-square bg-black border border-[rgb(37,31,1)] transition-all duration-300 animate-pulse-custom hover:bg-[rgb(34,31,4)]"

            style={{
              animationDelay: `${Math.random() * 120}s`, // Delay aleatório de 0 a 3s
            }}

          ></div>
        ))}
      </section>

      <div className="z-10 flex p-10 gap-24 flex-col absolute w-full justify-center items-center pointer-events-none ">
        <Image
          className="rotate-scale-down-ver"
          src={"/logo3.png"} width={800} height={800} alt="logo"
        />

        <Container text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum exercitationem neque eveniet illo ex quod distinctio maiores tempore ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure cum deleniti velit arerum at commodi.it amet consectetur adipisicing elit. Earum qui odio aspernatur beatae fugit esse ab, soluta impedit molestiae cum e."} />



      </div>
    </div>

  );
}
