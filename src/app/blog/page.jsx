import BlogView from "../layout/blogView";
import Header from "../componentes/Header";
import Footer from "../layout/Footer";
export default function Blog() {
    return (
        <section className="flex flex-col gap-4">
            <Header />
            <h1 className="text-4xl font-bold text-center mt-20">Blog</h1>
            <BlogView />
            <Footer />
        </section>
    );
}
