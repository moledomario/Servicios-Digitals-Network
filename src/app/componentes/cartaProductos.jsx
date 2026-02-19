import Link from "next/link";
import Image from "next/image";
import productos from "../utils/productos";


export default function CartaProductos({ limit }) {
    const productosAMostrar = limit ? productos.slice(0, limit) : productos;

    return (
        <section className="flex justify-center">
            <div className="flex flex-col items-center mt-10 mb-10" >


                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-6">
                    {productosAMostrar.map((producto) => (
                        <li key={producto.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-[400px] hover:-translate-y-2">
                            {/* Image Container */}
                            <div className="relative aspect-square w-full bg-gray-50/50 overflow-hidden border-b border-gray-50">
                                <div className="block h-full w-full p-6">
                                    <Image
                                        src={producto.imagen}
                                        alt={producto.name}
                                        fill
                                        className="object-contain  transition-transform duration-700 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--primary)] shadow-sm border border-gray-100">
                                    Nuevo
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="block mb-4">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                                        {producto.name}
                                    </h2>
                                    <ul className="text-gray-500 text-xs sm:text-sm list-disc list-inside space-y-0.5 mt-2 min-h-[60px]">
                                        {producto.description.map((descripcion, index) => (
                                            <li key={index} className="line-clamp-1">{descripcion}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Area */}
                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <Link
                                        href={`https://wa.me/51948599036?text=Hola!%20Me%20interesa%20el%20producto%20${producto.name}`}
                                        target="_blank"
                                        className="w-full py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-green-500/20 active:scale-95"
                                    >
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        <span className="text-sm">Consultar WhatsApp</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
