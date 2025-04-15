
import { Banner } from "./components/banner";
import Coments from "./components/comentarios";
import Album from "./components/album";
import BackgroundSquare from "./components/background-square";
import NavBar from "./components/menu";
import { SocialMedia } from "./components/socialMedia";
import Anima from "@/utils/anima";


export default function Home() {

  return (
    <div>
      <BackgroundSquare />

      <div className="z-10  flex flex-col absolute w-full justify-center items-center pointer-events-none ">

        <Anima from="left">

          <NavBar />
        </Anima>

        <Banner />

        <Anima from="right">

          <section className="bg-white backdrop-blur-md  px-5 py-10 mb-24 w-full max-w-[1000px] rounded-md" id="qsomo" >
            <h1 className=" text-4xl text-gray-700 flex justify-center items-center mb-5 text-center qsomo">🍔🔥 Bem-vindo ao Point do Canal – O Sabor que Conquista!</h1>
            <p className="text-gray-600 text-lg ">
              Se você busca hambúrgueres suculentos com pão de fabricação própria, pastéis crocantes, caldos irresistíveis e aquele açaí cremoso para refrescar o dia, você está no lugar certo! 😍
              Aqui, cada detalhe faz a diferença. Nosso pão é artesanal, feito diariamente para garantir frescor e sabor incomparáveis. Cada ingrediente é escolhido com carinho, resultando em uma experiência gastronômica única e inesquecível.
              📍 Peça agora e descubra o verdadeiro sabor!
              🚀 Delivery rápido | 🏠 Ambiente aconchegante | ❤️ Feito com paixão
              🔽 Faça seu pedido agora mesmo!
            </p>
          </section>
        </Anima>

        <Album />

        <section className="bg-white backdrop-blur-md rounded-md  p-5 mb-24 w-full max-w-[1000px]">
          <h2 className="flex w-full justify-center text-gray-500 font-bold text-2xl pb-5">Avaliações no Ifood </h2>
          <Coments nome="Iza" nota="5,0" data="22/03/2025" comentario="Parabéns , adorei 👏👏👏👏, super indico" />
          <Coments nome="Andressa" nota="5,0" data="22/03/2025" comentario="Nota mil parabéns!!!!" />
          <Coments nome="Bruninho" nota="5,0" data="20/03/2025" comentario="Lanche top 🤩" />
          <Coments nome="Lorena" nota="5,0" data="20/03/2025" comentario="Melhor lanche da Praia Grande" />
          <Coments nome="Gabriela" nota="5,0" data="18/03/2025" comentario="Gostei bastante bem caprichado nota 1000" />
        </section>

        <SocialMedia />

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
