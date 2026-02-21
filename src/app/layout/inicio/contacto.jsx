import Link from "next/link";

export default function Contacto() {
    return (
        <section id="contacto" className="relative w-full py-24 px-6 overflow-hidden bg-gray-950">

            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-20"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">

                    <div className="space-y-4">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Contáctanos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400">Hoy Mismo</span>
                        </h3>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            Solicita mantenimiento, instalación o revisión de redes con técnicos certificados y años de experiencia.
                            <span className="block mt-2 text-gray-300 font-medium">¡Estamos listos para potenciar tu proyecto!</span>
                        </p>
                    </div>

                    <Link
                        href={`https://wa.me/51948599036?text=${encodeURIComponent("Hola buscamos informacion de sus servicios")}`}
                        target="_blank"
                        className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 mt-8 w-full sm:w-max"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span className="tracking-wide">Consultar por WhatsApp</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}