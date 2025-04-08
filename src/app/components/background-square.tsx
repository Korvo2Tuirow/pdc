const BackgroundSquare = () => {
    return ( 
        <div className="fixed top-0 left-0 w-full h-screen flex flex-wrap">
        {Array.from({ length: 500 }).map((_, i) => (
          <div
            key={i}
            className="w-[10%] aspect-square bg-black border border-[rgb(37,31,1)] transition-all duration-300 animate-pulse-custom hover:bg-[rgb(34,31,4)]"

            style={{
              animationDelay: `${Math.random() * 120}s`, // Delay aleatório de 0 a 3s
            }}

          ></div>
        ))}
      </div>
     );
}
 
export default BackgroundSquare;