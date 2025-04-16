"use client";

import { commentsApi } from "../apis/comentarios";

const Coments = () => {

  return (

    <div className="bg-white rounded-lg mb-24 p-5 border-t border-gray-300 flex flex-col w-full max-w-[1000px] z-10">
      <h2 className="flex w-full justify-center text-gray-500 font-bold text-2xl pb-5">Avaliações no Ifood </h2>
      {commentsApi.map((comment) => (

        <div key={comment.id} className="flex flex-col gap-2 mb-3">
          <hr />
          <span className="text-gray-600 font-bold text-xl">{comment.nome}</span>
          <div className="flex justify-between items-center gap-3">
            <div className="flex justify-center items-center gap-2">
              <span className="text-gray-600 font-bold text-lg">{comment.nota}</span>
              <div className="flex">
                {(() => {
                  const stars = [];
                  const notaInteira = Math.floor(comment.nota); // força inteiro
                  for (let i = 0; i < 5; i++) {
                    stars.push(<span key={i}>{i < notaInteira ? '⭐' : ''}</span>);
                  }
                  return stars;
                })()}
              </div>
            </div>
            <div>
              <span className="text-gray-400">{comment.data}</span>
            </div>
          </div>
          <div>
            <p className="text-gray-500">{comment.comentario}</p>
          </div>
        </div>
      ))
      }
    </div>
  )

}

export default Coments;


/*
            <section className="bg-white backdrop-blur-md rounded-md  p-5 mb-24 w-full max-w-[1000px]">
          <h2 className="flex w-full justify-center text-gray-500 font-bold text-2xl pb-5">Avaliações no Ifood </h2>
          <Coments nome="Iza" nota="5,0" data="22/03/2025" comentario="Parabéns , adorei 👏👏👏👏, super indico" />
          <Coments nome="Andressa" nota="5,0" data="22/03/2025" comentario="Nota mil parabéns!!!!" />
          <Coments nome="Bruninho" nota="5,0" data="20/03/2025" comentario="Lanche top 🤩" />
          <Coments nome="Lorena" nota="5,0" data="20/03/2025" comentario="Melhor lanche da Praia Grande" />
          <Coments nome="Gabriela" nota="5,0" data="18/03/2025" comentario="Gostei bastante bem caprichado nota 1000" />
        </section>
*/

