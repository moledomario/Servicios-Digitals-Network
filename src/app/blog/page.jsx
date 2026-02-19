import BlogView from "../layout/blogView";
import Header from "../componentes/Header";
import Footer from "../layout/Footer";
export default function Blog() {
    return (
        <section className="flex flex-col gap-4">
            <Header />
            <BlogView />
            <Footer />
        </section>
    );
}
