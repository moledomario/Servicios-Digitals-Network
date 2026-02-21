
import Image from "next/image";
import { marcas } from "../utils/marcas";

export default function Marcas() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 w-full ">
            <h4 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-dm-serif-text mt-20 text-center">Marcas con las que trabajamos</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {marcas.map((marca) => (
                    <div key={marca.marca} className="flex flex-col items-center gap-2">
                        <Image src={`/marcas/${marca.img}`} alt={marca.marca} width={200} height={100} className="hover:scale-110 transition-all duration-300 " />

                    </div>
                ))}
            </div>
        </div>
    )
};