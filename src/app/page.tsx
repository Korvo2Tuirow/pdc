
import Image from "next/image";
import { Banner } from "./components/banner";
import { Container } from "./components/containers";

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

      <div className="z-10  flex flex-col absolute w-full justify-center items-center pointer-events-none">

        <nav className="bg-black/10 flex justify-center items-center text-lg text-white p-5  rounded-lg w-full max-w-[1000px]">
          {/*
          <div className="flex-1 flex">
           
            <a href="#qsomo" className="cursor-pointer pointer-events-auto bg-yellow-300 text-black backdrop-blur-md border-2 text-lg border-yellow-400 p-1 rounded-lg ">Quem somos !</a>
          
          <a href="#qsomo" className="cursor-pointer pointer-events-auto bg-yellow-300 text-black backdrop-blur-md border-2 text-lg border-yellow-400 p-1 rounded-lg">Cardapio</a>
           

          </div> */}

          <div className="bg-red-500 p-4 rounded-full ">

            <Image
              src={"/ifood-logo-7.png"}
              width={80}
              height={80}
              alt="ifood"
              className="cursor-pointer pointer-events-auto"

            />
          </div>


          <Image
            src={"/whatsapp1.png"}
            width={120}
            height={120}
            alt="whtassapp"
            className="p-5 rounded-lg cursor-pointer pointer-events-auto"
          />
        </nav>

        <Banner />

        <div className="bg-white backdrop-blur-md   text-white p-5  w-full max-w-[1000px] shadow-2xl shadow-yellow-400" id="qsomo">

          <h1 className=" text-4xl text-black flex justify-center items-center mb-5 text-center qsomo">🍔🔥 Bem-vindo ao Point do Canal – O Sabor que Conquista!</h1>

          <p className="text-black ">
            Se você busca hambúrgueres suculentos com pão de fabricação própria, pastéis crocantes, caldos irresistíveis e aquele açaí cremoso para refrescar o dia, você está no lugar certo! 😍
            Aqui, cada detalhe faz a diferença. Nosso pão é artesanal, feito diariamente para garantir frescor e sabor incomparáveis. Cada ingrediente é escolhido com carinho, resultando em uma experiência gastronômica única e inesquecível.
            📍 Peça agora e descubra o verdadeiro sabor!
            🚀 Delivery rápido | 🏠 Ambiente aconchegante | ❤️ Feito com paixão
            🔽 Faça seu pedido agora mesmo!
          </p>

        </div>

      </div>
    </div>

  );
}
