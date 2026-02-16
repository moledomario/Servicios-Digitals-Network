'use client';

import Header from "../componentes/Header";
import Footer from "../layout/Footer";
import CartaProductos from "../componentes/cartaProductos";
import Marcas from "../layout/marcas";


export default function Productos() {
    return (
        <div className="min-h-screen bg-gray-50/30 mt-20">
            <Header />
            <Marcas />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-dm-serif-text">
                            Nuestros <span className="text-[var(--primary)]">Productos</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Descubre nuestra selección de tecnología y dispositivos de alta calidad,
                            diseñados para potenciar tus proyectos digitales.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <CartaProductos />
                    <Marcas />
                </div>
            </main>

            <Footer />
        </div>
    )
}
