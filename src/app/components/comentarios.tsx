
type Props = {
    nome: string;
    nota: string;
    data:string;
    comentario: string;
}


const Coments = ( { nome, nota, data, comentario}:Props) => {
    return ( 
    <div className=" p-2 border-y border-gray-300 ">
            <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-bold text-xl">{nome}</span>
            <div className="flex justify-between items-center gap-3">
              <div className="flex justify-center items-center gap-2">
                <span className="text-gray-600 font-bold text-lg">{nota}</span>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
              <div>
                <span className="text-gray-400">{data}</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500">{comentario}</p>
            </div>

          </div>

    </div> 
    );
}
 
export default Coments;

// <Coments nome="" nota="" data="" comentario=""/>