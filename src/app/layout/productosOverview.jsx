import Link from "next/link";
import Image from "next/image";
import CartaProductos from "../componentes/cartaProductos";

export default function Productos() {



    return (
        <section className="flex flex-col items-center mt-10 mb-10">
            <h2 className="text-4xl font-bold mb-4">Algunos de nuestros <span className="text-[var(--primary)]">productos</span></h2>
            <CartaProductos limit={3} />
            <Link
                href="/productos"
                className="px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary)]/80 transition-all duration-300 hover:-translate-y-1 text-center shadow-sm"
            >
                Ver todos los productos
            </Link>
        </section>
    );
}