'use client';

import Image from "next/image";
import Link from "next/link";

import Footer from "../../layout/Footer";


export default function ServiciosView() {


    return (
        <section className="bg-white w-full">

            <div className="w-full h-[70vh] mt-20 flex items-center justify-center" style={{ backgroundImage: "url('/servicios.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="text-center flex items-center gap-2 flex-col">
                    <h1 className="text-6xl font-bold text-white font-dm-serif-text mb-4" >Nuestros Servicios</h1>
                    <p className="text-xl text-gray-200 bg-black/50 p-2 rounded">Soluciones digitales a medida</p>
                    <svg className="size-10 animate-bounce text-white rounded-full bg-white p-2 mt-8 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-[var(--primary)]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </svg>
                </div>
            </div>
            <div className="mb-20 w-full px-6"  >
                <h2 className="text-black text-4xl font-bold text-center font-dm-serif-text mt-20">¿Qué hacemos?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12 mx-6">
                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[400px] lg:max-h-[300px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
                        <div className="relative h-full w-full bg-white/50 backdrop-blur-sm border border-white/40 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/servicios2.jpg"
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
                    <div >
                        <h3 className="text-4xl font-bold font-dm-serif-text mb-4 text-[var(--primary)] ">Soluciones Integrales</h3>

                        <p className="text-gray-600 text-lg">Brindamos soluciones integrales en redes de telecomunicaciones, infraestructura tecnológica, servidores, entornos Cloud y ciberseguridad. Diseñamos, implementamos y mantenemos sistemas robustos, seguros y escalables, adaptados a las necesidades de cada organización.</p>
                        <Link
                            href={`https://wa.me/51948599036?text=Hola!%20Me%20interesa%20el%20producto%20${"Hola buscamos informacion"}`}
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 mt-6 w-full sm:w-auto"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="tracking-wide">Consultar por WhatsApp</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mb-20 w-full px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12 mx-6">
                    <div>
                        <h3 className="text-4xl font-bold text-[var(--primary)] font-dm-serif-text mb-4">Tipos de Trabajos</h3>
                        <p className="text-gray-600 text-lg">
                            Realizamos todo tipo de proyectos de ingeniería de telecomunicaciones para Proveedores de Servicios de Internet e Industrias.
                            <br />
                            Implementamos estrategias tecnológicas en la arquitectura de las redes para obtener una comunicación estable y segura.</p>
                        <Link
                            href={`https://wa.me/51948599036?text=Hola!%20Me%20interesa%20el%20producto%20${"Hola buscamos informacion"}`}
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 mt-6 w-full sm:w-auto"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="tracking-wide">Consultar por WhatsApp</span>
                        </Link>
                    </div>
                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[400px] lg:max-h-[300px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
                        <div className="relative h-full w-full bg-white/50 backdrop-blur-sm border border-white/40 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/servicios-img.jpeg"
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
            </div>
            <div className="mb-20 w-full px-6" >

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12 mx-6">

                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[400px] lg:max-h-[300px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
                        <div className="relative h-full w-full bg-white/50 backdrop-blur-sm border border-white/40 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src="/servicios3.jpeg"
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
                    <div>
                        <h3 className="text-4xl font-bold text-[var(--primary)] font-dm-serif-text mb-4">Análisis y Diseño de Redes</h3>
                        <p className="text-gray-600 text-lg">
                            La primera fase de nuestro proceso es el estudio y análisis detenido de la infraestructura de red.
                        </p>
                        <Link
                            href={`https://wa.me/51948599036?text=Hola!%20Me%20interesa%20el%20producto%20${"Hola buscamos informacion"}`}
                            target="_blank"
                            className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 mt-6 w-full sm:w-auto"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="tracking-wide">Consultar por WhatsApp</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
