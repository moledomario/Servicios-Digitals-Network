import BlogView from "../layout/blogLayout/blogView";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
export default function Blog() {
    return (
        <section className="flex flex-col gap-4">
            <Header />
            <BlogView />
            <Footer />
        </section>
    );
}
