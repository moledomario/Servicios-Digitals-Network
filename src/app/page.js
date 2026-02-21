import Hero from "./layout/inicio/hero";
import Header from "./componentes/Header";
import Stats from "./componentes/Stats";
import ProductosOverview from "./layout/inicio/productosOverview";
import Contacto from "./layout/inicio/contacto";
import Footer from "./componentes/Footer";

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
