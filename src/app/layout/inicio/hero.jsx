import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

            <section className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-6 md:gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            Servicios <span className="text-[var(--primary)]">Digitales</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Ofrecemos soluciones en redes de telecomunicaciones, soluciones cloud,
                            servidores, servicios de infraestructura y ciberseguridad en general.
                            <br className="hidden md:block" />
                            <span className="block mt-4 text-gray-500 text-base md:text-lg">
                                Realizamos todo tipo de proyectos de ingeniería de telecomunicaciones
                                para proveedores de servicios de internet e industrias.
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link
                                href={`https://wa.me/51948599036?text=${encodeURIComponent("Hola buscamos informacion de sus servicios")}`}
                                target="_blank"
                                className="group relative px-6 py-3 text-base bg-[#25D366] hover:bg-[#20bd5a] sm:px-8 sm:py-4 sm:text-lg  text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/40 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">

                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span>51948599036</span>
                                </span>
                            </Link>

                            <Link
                                href="/servicios"
                                className="px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 text-center shadow-sm w-full sm:w-auto"
                            >
                                Ver Servicios
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[400px] lg:max-h-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
                        <div className="relative h-full w-full bg-white/50 backdrop-blur-sm border border-white/40 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/mantenimiento.jpg"
                                alt="Servicios Digitales y Mantenimiento"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}