
import Image from "next/image";
import { Banner } from "./components/banner";
import Link from "next/link";
import Coments from "./components/comentarios";

export default function Home() {


  const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}`;
  const linkIfood = `${process.env.NEXT_PUBLIC_IFOOD}`;

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

        <Banner />

        <section className="bg-white backdrop-blur-md  p-5  w-full max-w-[1000px] " id="qsomo">

          <h1 className=" text-4xl text-gray-700 flex justify-center items-center mb-5 text-center qsomo">🍔🔥 Bem-vindo ao Point do Canal – O Sabor que Conquista!</h1>

          <p className="text-gray-600 ">
            Se você busca hambúrgueres suculentos com pão de fabricação própria, pastéis crocantes, caldos irresistíveis e aquele açaí cremoso para refrescar o dia, você está no lugar certo! 😍
            Aqui, cada detalhe faz a diferença. Nosso pão é artesanal, feito diariamente para garantir frescor e sabor incomparáveis. Cada ingrediente é escolhido com carinho, resultando em uma experiência gastronômica única e inesquecível.
            📍 Peça agora e descubra o verdadeiro sabor!
            🚀 Delivery rápido | 🏠 Ambiente aconchegante | ❤️ Feito com paixão
            🔽 Faça seu pedido agora mesmo!
          </p>

        </section>

        <section className="bg-black/30 gap-5 flex flex-col sticky my-24 justify-center items-center text-white p-5  w-auto max-w-[1000px]" >

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

        <section className="bg-white backdrop-blur-md  p-5  w-full max-w-[1000px]">

          <h2 className="flex w-full justify-center text-gray-500 font-bold text-2xl pb-5">Avaliações no Ifood </h2>

         <Coments nome="Iza" nota="5,0" data="22/03/2025" comentario="Parabéns , adorei 👏👏👏👏, super indico"/>

          <Coments nome="Andressa" nota="5,0" data="22/03/2025" comentario="Nota mil parabéns!!!!"/>

          <Coments nome="Bruninho" nota="5,0" data="20/03/2025" comentario="Lanche top 🤩"/>

          <Coments nome="Lorena" nota="5,0" data="20/03/2025" comentario="Melhor lanche da Praia Grande"/>

          <Coments nome="Gabriela" nota="5,0" data="18/03/2025" comentario="Gostei bastante bem caprichado nota 1000"/>


        </section>




        <footer className="bg-white/10 backdrop-blur-md p-3 my-20 text-white rounded-lg   w-full max-w-[1000px]  text-lg">
          <div className="flex justify-center items-center text-center" >Horário de atendimento de Terça a Domingo, das 19:00 às 01:00.
          </div>
          <div className="flex justify-center items-center" >Avenida Ilda Rosa da Cunha 1244, Praia Grande
          </div>
        </footer>

      </div>
    </div>

  );
}
