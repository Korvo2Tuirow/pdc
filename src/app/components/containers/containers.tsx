type Props = {
    text:string;
}

export const Container = ({text}:Props) =>{
    return(
        <div className="bg-black/10 backdrop-blur-md shadow-2xl shadow-yellow-400 border border-yellow-300 text-white p-5 rounded-lg w-full max-w-[1000px]  ">{text}</div>
    )
}