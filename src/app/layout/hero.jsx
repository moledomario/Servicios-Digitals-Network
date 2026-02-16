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
                                href="/whatsapp"
                                className="group relative px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-gradient-to-r from-[var(--primary)] to-blue-400 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/40 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <span>262626</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
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