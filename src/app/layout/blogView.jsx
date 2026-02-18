import Link from "next/link";
import CartaBlog from "../componentes/cartaBlog";


export default function BlogView() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 mt-20">
            <CartaBlog />
        </section>
    );
}
