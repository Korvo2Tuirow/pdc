
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

      <div className="z-10 flex p-10 gap-24 flex-col absolute w-full justify-center items-center pointer-events-none ">

        <Banner />

     

        <div className="bg-white/10 backdrop-blur-md border text-lg border-yellow-300 text-white p-5 rounded-lg w-full max-w-[1000px]">

        <h1 className=" text-4xl text-white flex justify-center items-center mb-5">🍔🔥 Bem-vindo ao Point do Canal – O Sabor que Conquista!</h1>
         
        <p>
          Se você busca hambúrgueres suculentos com pão de fabricação própria, pastéis crocantes, caldos irresistíveis e aquele açaí cremoso para refrescar o dia, você está no lugar certo! 😍
            Aqui, cada detalhe faz a diferença. Nosso pão é artesanal, feito diariamente para garantir frescor e sabor incomparáveis. Cada ingrediente é escolhido com carinho, resultando em uma experiência gastronômica única e inesquecível.
            📍 Peça agora e descubra o verdadeiro sabor!
            🚀 Delivery rápido | 🏠 Ambiente aconchegante | ❤️ Feito com paixão
            🔽 Faça seu pedido agora mesmo!
        </p></div>

      </div>
    </div>

  );
}
