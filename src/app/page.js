import Hero from "./layout/hero";
import Header from "./componentes/Header";
import Stats from "./componentes/Stats";
import ProductosOverview from "./layout/productosOverview";
import Contacto from "./layout/contacto";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <ProductosOverview />
      <Contacto />
      <Footer />
    </>
  );
}
