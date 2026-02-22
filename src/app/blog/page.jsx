import BlogView from "../layout/blogLayout/blogView";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export const metadata = {
    title: "Blog Tecnológico | Noticias y Tendencias Digitales",
    description: "Mantente al día con las últimas noticias, tutoriales y tendencias en el mundo de la tecnología y los servicios digitales en nuestro blog oficial.",
};

export default function Blog() {
    return (
        <section className="flex flex-col gap-4">
            <Header />
            <BlogView />
            <Footer />
        </section>
    );
}
